<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
</script>

<div class="pt-3">
	<label for="extras-cta-text" class="mb-1 block text-xs font-medium text-gray-600"
		>CTA Button Text</label
	>
	<input
		id="extras-cta-text"
		type="text"
		bind:value={$signature.ctaText}
		placeholder="Schedule a call"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="extras-cta-url" class="mb-1 block text-xs font-medium text-gray-600"
		>CTA Button URL</label
	>
	<input
		id="extras-cta-url"
		type="url"
		bind:value={$signature.ctaUrl}
		placeholder="https://calendly.com/..."
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="extras-disclaimer" class="mb-1 block text-xs font-medium text-gray-600"
		>Legal Disclaimer (multiline)</label
	>
	<textarea
		id="extras-disclaimer"
		bind:value={$signature.disclaimer}
		placeholder="This email and any attachments are confidential..."
		rows={5}
		class="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	></textarea>
	<p class="mt-1 text-xs text-gray-400">
		Usa Enter para respetar saltos de línea en la vista previa y export HTML.
	</p>
</div>
