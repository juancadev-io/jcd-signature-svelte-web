<!--
  +page.svelte
  Main page — two-column layout: form on the left, preview + export on the right.
  Responsive: stacks vertically on mobile.
-->
<script lang="ts">
	import FormPanel from '$lib/components/FormPanel/FormPanel.svelte';
	import PreviewPanel from '$lib/components/PreviewPanel/PreviewPanel.svelte';
	import ExportPanel from '$lib/components/ExportPanel/ExportPanel.svelte';
	import { signature } from '$lib/stores/signatureStore';
	import { getGoogleFontHref } from '$lib/utils/fontUtils';
	let previewEl: HTMLDivElement;
</script>

<svelte:head>
	<title>Email Signature Generator · Juancadev</title>
	<meta
		name="description"
		content="Create professional email signatures for free. Export HTML for Gmail and PNG for mobile clients."
	/>
	{#if getGoogleFontHref($signature.fontFamily, $signature.googleFontUrl)}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
		<link
			rel="stylesheet"
			href={getGoogleFontHref($signature.fontFamily, $signature.googleFontUrl)}
		/>
	{/if}
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
	<header class="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<div>
				<h1 class="text-lg font-bold text-gray-900">Signature Generator</h1>
				<p class="text-xs text-gray-400">
					by <a href="https://juancamilofarfan.com" class="text-indigo-500 hover:underline"
						>juancamilofarfan.com</a
					>
				</p>
			</div>
			<a
				href="https://github.com/juancadev-io/jcd-signature-svelte-web"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800"
			>
				⭐ GitHub
			</a>
		</div>
	</header>

	<main class="mx-auto max-w-6xl px-6 py-8 pb-28 lg:pb-8">
		<div class="flex flex-col gap-8 lg:flex-row">
			<aside class="w-full shrink-0 lg:w-[400px]">
				<FormPanel />
			</aside>

			<div class="flex flex-1 flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
				<PreviewPanel bind:previewEl />
				<ExportPanel {previewEl} />
			</div>
		</div>
	</main>

	<footer class="py-8 text-center text-xs text-gray-400">
		Open source · MIT License ·
		<a href="https://juancamilofarfan.com" class="text-indigo-400 hover:underline"
			>juancamilofarfan.com</a
		>
	</footer>
</div>
