<!--
  SectionWrapper.svelte
  Collapsible section container used by all form sections.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		icon,
		open = $bindable(false),
		children
	}: { title: string; icon: string; open: boolean; children: Snippet } = $props();
</script>

<section class="rounded-xl border border-gray-200 bg-white overflow-hidden">
	<button
		onclick={() => (open = !open)}
		class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
	>
		<span class="font-semibold text-gray-800 text-sm">{icon} {title}</span>
		<span class="text-gray-400 text-xs">{open ? '▲' : '▼'}</span>
	</button>
	{#if open}
		<div class="px-5 pb-5 space-y-3 border-t border-gray-100">
			{@render children()}
		</div>
	{/if}
</section>
