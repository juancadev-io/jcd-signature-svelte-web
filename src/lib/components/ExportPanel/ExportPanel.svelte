<!--
  ExportPanel.svelte
  Handles all export actions:
  - Copy HTML to clipboard (for Gmail / Outlook)
  - Download PNG (for mobile clients)
  - Save config as JSON
  - Load config from JSON file
-->
<script lang="ts">
	import {
		signature,
		loadSignature,
		resetSignature,
		exportConfig
	} from '$lib/stores/signatureStore';
	import type { SignatureData } from '$lib/types/signature';
	import { generateHTML } from '$lib/utils/exportHTML';
	import { exportAsPNG } from '$lib/utils/exportPNG';

	let { previewEl }: { previewEl: HTMLDivElement } = $props();

	let copied = $state(false);
	let exporting = $state(false);

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

	async function downloadPNG() {
		if (!previewEl) return;
		exporting = true;
		const name = `${$signature.firstName}-${$signature.lastName}`
			.replace(/\s+/g, '-')
			.toLowerCase();
		await exportAsPNG(previewEl, `signature-${name}.png`);
		exporting = false;
	}

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
			input.value = '';
		};
		reader.readAsText(file);
	}
</script>

<div
	class="lg:backdrop-blur-0 fixed right-4 bottom-4 left-4 z-20 rounded-2xl border border-gray-200 bg-white/95 p-2.5 shadow-lg backdrop-blur-sm lg:static lg:right-auto lg:bottom-auto lg:left-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
>
	<div class="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-2.5">
		<button
			onclick={copyHTML}
			class="flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition-all {copied
				? 'bg-green-500 text-white'
				: 'bg-indigo-500 text-white hover:bg-indigo-600'}"
		>
			{copied ? '✓ Copied' : '📋 Copy HTML'}
		</button>

		<button
			onclick={downloadPNG}
			disabled={exporting}
			class="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-50 disabled:opacity-50"
		>
			{exporting ? '⏳ PNG...' : '📱 PNG'}
		</button>

		<button
			onclick={saveConfig}
			class="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50"
		>
			💾 Save
		</button>

		<label
			class="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50"
		>
			📂 Load
			<input type="file" accept=".json" onchange={handleLoadConfig} class="sr-only" />
		</label>
	</div>

	<div class="mt-2 hidden lg:block">
		<button
			onclick={resetSignature}
			class="w-full rounded-lg px-2 py-2 text-xs font-medium text-red-500 transition-all hover:bg-red-50"
		>
			↺ Reset to defaults
		</button>
	</div>
</div>
