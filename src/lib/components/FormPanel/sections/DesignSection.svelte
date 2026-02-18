<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
	import type { Layout, Style } from '$lib/types/signature';

	const layouts: { id: Layout; label: string }[] = [
		{ id: 1, label: 'Horizontal' },
		{ id: 2, label: 'Centered' },
		{ id: 3, label: 'Compact' },
		{ id: 4, label: 'Reverse' },
		{ id: 5, label: 'Stacked' },
		{ id: 6, label: 'Split' }
	];

	const styles: { id: Style; label: string }[] = [
		{ id: 'classic', label: 'Classic' },
		{ id: 'minimal', label: 'Minimal' }
	];
</script>

<!-- Layout picker -->
<div class="pt-3">
	<p class="block text-xs font-medium text-gray-600 mb-2">Layout</p>
	<div class="grid grid-cols-3 gap-2">
		{#each layouts as l}
			<button
				onclick={() => signature.update((s) => ({ ...s, layout: l.id }))}
				class="relative py-5 rounded-lg text-xs font-medium border transition-all {$signature.layout === l.id ? 'bg-indigo-500 text-white border-indigo-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}"
			>
				<!-- Mini layout preview -->
				<div class="flex justify-center mb-1.5">
					{#if l.id === 1}
						<!-- Avatar left, text right -->
						<div class="flex gap-1 items-start">
							<div class="w-3 h-3 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							<div class="space-y-0.5">
								<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
								<div class="w-5 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
								<div class="w-4 h-1 rounded {$signature.layout === l.id ? 'bg-white/30' : 'bg-gray-200'}"></div>
							</div>
						</div>
					{:else if l.id === 2}
						<!-- Centered -->
						<div class="flex flex-col items-center gap-0.5">
							<div class="w-3 h-3 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							<div class="w-5 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
						</div>
					{:else if l.id === 3}
						<!-- Compact header + body -->
						<div class="space-y-1">
							<div class="flex gap-1 items-center">
								<div class="w-2.5 h-2.5 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
								<div class="w-5 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							</div>
							<div class="w-7 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
							<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/30' : 'bg-gray-200'}"></div>
						</div>
					{:else if l.id === 4}
						<!-- Text left, avatar right -->
						<div class="flex gap-1 items-start">
							<div class="space-y-0.5">
								<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
								<div class="w-5 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
								<div class="w-4 h-1 rounded {$signature.layout === l.id ? 'bg-white/30' : 'bg-gray-200'}"></div>
							</div>
							<div class="w-3 h-3 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
						</div>
					{:else if l.id === 5}
						<!-- Stacked left, avatar bottom right -->
						<div class="space-y-0.5">
							<div class="w-7 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
							<div class="flex gap-1 items-center">
								<div class="w-4 h-1 rounded {$signature.layout === l.id ? 'bg-white/30' : 'bg-gray-200'}"></div>
								<div class="w-2.5 h-2.5 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							</div>
						</div>
					{:else}
						<!-- Split: name left, avatar right top -->
						<div class="space-y-0.5">
							<div class="flex gap-1 items-start justify-between w-8">
								<div class="w-4 h-1 rounded {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
								<div class="w-2.5 h-2.5 rounded-full {$signature.layout === l.id ? 'bg-white/60' : 'bg-gray-300'}"></div>
							</div>
							<div class="w-6 h-1 rounded {$signature.layout === l.id ? 'bg-white/40' : 'bg-gray-200'}"></div>
							<div class="w-5 h-1 rounded {$signature.layout === l.id ? 'bg-white/30' : 'bg-gray-200'}"></div>
						</div>
					{/if}
				</div>
				{l.label}
			</button>
		{/each}
	</div>
</div>

<!-- Style picker -->
<div>
	<p class="block text-xs font-medium text-gray-600 mb-2">Style</p>
	<div class="grid grid-cols-3 gap-2">
		{#each styles as st}
			<button
				onclick={() => signature.update((s) => ({ ...s, style: st.id }))}
				class="py-2 rounded-lg text-xs font-medium border transition-all {$signature.style === st.id ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}"
			>
				{st.label}
			</button>
		{/each}
	</div>
</div>

<!-- Colors -->
<div>
	<label for="design-theme-color-picker" class="block text-xs font-medium text-gray-600 mb-1">Theme Color</label>
	<div class="flex items-center gap-3">
		<input id="design-theme-color-picker" type="color" bind:value={$signature.primaryColor} class="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
		<input type="text" bind:value={$signature.primaryColor} placeholder="#6366f1" class="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400" />
	</div>
</div>
<div>
	<label for="design-text-color-picker" class="block text-xs font-medium text-gray-600 mb-1">Text Color</label>
	<div class="flex items-center gap-3">
		<input id="design-text-color-picker" type="color" bind:value={$signature.textColor} class="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
		<input type="text" bind:value={$signature.textColor} placeholder="#374151" class="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400" />
	</div>
</div>
<div>
	<label for="design-link-color-picker" class="block text-xs font-medium text-gray-600 mb-1">Link Color</label>
	<div class="flex items-center gap-3">
		<input id="design-link-color-picker" type="color" bind:value={$signature.linkColor} class="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
		<input type="text" bind:value={$signature.linkColor} placeholder="#6366f1" class="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400" />
	</div>
</div>

<!-- Font -->
<div>
	<label for="design-font-family" class="block text-xs font-medium text-gray-600 mb-2">Font</label>
	<select id="design-font-family" bind:value={$signature.fontFamily} class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
		<option value="Arial, sans-serif">Arial</option>
		<option value="Georgia, serif">Georgia</option>
		<option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
		<option value="Verdana, sans-serif">Verdana</option>
		<option value="'Courier New', monospace">Courier New</option>
	</select>
</div>

<!-- Font size -->
<div>
	<label for="design-font-size" class="block text-xs font-medium text-gray-600 mb-1">Font Size ({$signature.fontSize}px)</label>
	<input id="design-font-size" type="range" min="11" max="18" step="1" bind:value={$signature.fontSize} class="w-full accent-indigo-500" />
</div>
