<!--
  ExportPanel.svelte
  Handles all export actions:
  - Copy HTML to clipboard (for Gmail / Outlook)
  - Download PNG (for mobile clients)
  - Save config as JSON
  - Load config from JSON file
-->
<script lang="ts">
	import { signature, loadSignature, resetSignature, exportConfig } from '$lib/stores/signatureStore';
	import type { SignatureData } from '$lib/types/signature';
	import { generateHTML } from '$lib/utils/exportHTML';
	import { exportAsPNG } from '$lib/utils/exportPNG';

	// The preview DOM element passed from the parent
	let { previewEl }: { previewEl: HTMLDivElement } = $props();

	let copied = $state(false);
	let exporting = $state(false);

	// ── Copy HTML ──────────────────────────────────────────────────────
	async function copyHTML() {
		const html = generateHTML($signature);
		if (window.ClipboardItem) {
			const item = new ClipboardItem({
				'text/html': new Blob([html], { type: 'text/html' }),
				'text/plain': new Blob([html], { type: 'text/plain' })
			});
			await navigator.clipboard.write([item]);
		} else {
			await navigator.clipboard.writeText(html);
		}
		copied = true;
		setTimeout(() => (copied = false), 2500);
	}

	// ── Download PNG ───────────────────────────────────────────────────
	async function downloadPNG() {
		if (!previewEl) return;
		exporting = true;
		const name = `${$signature.firstName}-${$signature.lastName}`.replace(/\s+/g, '-').toLowerCase();
		await exportAsPNG(previewEl, `signature-${name}.png`);
		exporting = false;
	}

	// ── Save config as JSON ────────────────────────────────────────────
	function saveConfig() {
		const json = exportConfig($signature);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'signature-config.json';
		link.click();
		URL.revokeObjectURL(url);
	}

	// ── Load config from JSON ──────────────────────────────────────────
	function handleLoadConfig(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const data = JSON.parse(reader.result as string) as Partial<SignatureData>;
				loadSignature(data);
			} catch {
				alert('Invalid config file.');
			}
			// Reset input so the same file can be reloaded
			input.value = '';
		};
		reader.readAsText(file);
	}
</script>

<div class="space-y-3">
	<h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest px-1">Export</h2>

	<!-- Copy HTML -->
	<button
		onclick={copyHTML}
		class="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all
		{copied ? 'bg-green-500 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}"
	>
		{copied ? '✓ Copied to clipboard!' : '📋 Copy HTML for Gmail / Outlook'}
	</button>

	<!-- Download PNG -->
	<button
		onclick={downloadPNG}
		disabled={exporting}
		class="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50"
	>
		{exporting ? '⏳ Generating...' : '📱 Download PNG (mobile)'}
	</button>

	<div class="border-t border-gray-100 pt-3 space-y-2">
		<h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest px-1">Config</h2>

		<!-- Save JSON -->
		<button
			onclick={saveConfig}
			class="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
		>
			💾 Save config (.json)
		</button>

		<!-- Load JSON -->
		<label class="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all cursor-pointer">
			📂 Load config (.json)
			<input type="file" accept=".json" onchange={handleLoadConfig} class="sr-only" />
		</label>

		<!-- Reset -->
		<button
			onclick={resetSignature}
			class="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-medium text-red-400 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
		>
			↺ Reset to defaults
		</button>
	</div>
</div>
