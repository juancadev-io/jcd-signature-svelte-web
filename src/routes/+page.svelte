<!--
  +page.svelte
  Main page — two-column layout: form on the left, preview + export on the right.
  Responsive: stacks vertically on mobile.
-->
<script lang="ts">
	import FormPanel from '$lib/components/FormPanel/FormPanel.svelte';
	import PreviewPanel from '$lib/components/PreviewPanel/PreviewPanel.svelte';
	import ExportPanel from '$lib/components/ExportPanel/ExportPanel.svelte';
	let previewEl: HTMLDivElement;
</script>

<svelte:head>
	<title>Email Signature Generator · Juancadev</title>
	<meta name="description" content="Create professional email signatures for free. Export HTML for Gmail and PNG for mobile clients." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">

	<!-- Header -->
	<header class="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
		<div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
			<div>
				<h1 class="text-lg font-bold text-gray-900">Signature Generator</h1>
				<p class="text-xs text-gray-400">by <a href="https://juancamilofarfan.com" class="text-indigo-500 hover:underline">juancamilofarfan.com</a></p>
			</div>
			<a
				href="https://github.com/juancadev-io/jcd-signature-svelte-web"
				target="_blank"
				rel="noopener noreferrer"
				class="text-xs text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50"
			>
				⭐ GitHub
			</a>
		</div>
	</header>

	<!-- Main content -->
	<main class="max-w-6xl mx-auto px-6 py-8">
		<div class="flex flex-col lg:flex-row gap-8">

			<!-- Left: Form -->
			<aside class="w-full lg:w-[400px] shrink-0">
				<FormPanel />
			</aside>

			<!-- Right: Preview + Export -->
			<div class="flex-1 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
				<PreviewPanel bind:previewEl />
				<ExportPanel {previewEl} />
			</div>

		</div>
	</main>

	<!-- Footer -->
	<footer class="text-center py-8 text-xs text-gray-400">
		Open source · MIT License ·
		<a href="https://juancamilofarfan.com" class="text-indigo-400 hover:underline">juancamilofarfan.com</a>
	</footer>

</div>