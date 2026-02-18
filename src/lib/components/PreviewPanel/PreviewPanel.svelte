<!--
  PreviewPanel.svelte
  Real-time preview of the signature using the active template layout + style.
-->
<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
	import Template1 from '$lib/components/Templates/Template1.svelte';
	import Template2 from '$lib/components/Templates/Template2.svelte';
	import Template3 from '$lib/components/Templates/Template3.svelte';
	import Template4 from '$lib/components/Templates/Template4.svelte';
	import Template5 from '$lib/components/Templates/Template5.svelte';
	import Template6 from '$lib/components/Templates/Template6.svelte';

	let { previewEl = $bindable() }: { previewEl?: HTMLDivElement } = $props();
</script>

<div class="bg-gray-100 rounded-2xl p-6 min-h-[300px] flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<span class="text-xs font-semibold text-gray-400 uppercase tracking-widest">Live Preview</span>
		<span class="text-xs text-gray-400">Layout {$signature.layout} · {$signature.style}</span>
	</div>

	<div bind:this={previewEl} class="bg-white rounded-xl p-6 shadow-sm inline-block w-full">
		{#if $signature.layout === 1}
			<Template1 data={$signature} />
		{:else if $signature.layout === 2}
			<Template2 data={$signature} />
		{:else if $signature.layout === 3}
			<Template3 data={$signature} />
		{:else if $signature.layout === 4}
			<Template4 data={$signature} />
		{:else if $signature.layout === 5}
			<Template5 data={$signature} />
		{:else}
			<Template6 data={$signature} />
		{/if}
	</div>

	<p class="text-xs text-gray-400 text-center">
		↑ Desktop preview · PNG export optimized for mobile (600px)
	</p>
</div>
