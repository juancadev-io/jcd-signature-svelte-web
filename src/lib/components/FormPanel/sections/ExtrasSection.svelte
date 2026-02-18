<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
</script>

<div class="pt-3">
	<label for="extras-cta-text" class="block text-xs font-medium text-gray-600 mb-1">CTA Button Text</label>
	<input id="extras-cta-text" type="text" bind:value={$signature.ctaText} placeholder="Schedule a call" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label for="extras-cta-url" class="block text-xs font-medium text-gray-600 mb-1">CTA Button URL</label>
	<input id="extras-cta-url" type="url" bind:value={$signature.ctaUrl} placeholder="https://calendly.com/..." class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label for="extras-disclaimer" class="block text-xs font-medium text-gray-600 mb-1">Legal Disclaimer</label>
	<textarea id="extras-disclaimer" bind:value={$signature.disclaimer} placeholder="This email and any attachments are confidential..." rows={3} class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"></textarea>
</div>
