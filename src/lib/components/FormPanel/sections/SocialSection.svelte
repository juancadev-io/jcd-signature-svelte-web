<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';

	const fields = [
		{ key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/...' },
		{ key: 'twitter', label: 'Twitter / X', placeholder: 'https://twitter.com/...' },
		{ key: 'github', label: 'GitHub', placeholder: 'https://github.com/...' },
		{ key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/...' },
		{ key: 'youtube', label: 'YouTube', placeholder: 'https://youtube.com/...' },
		{ key: 'whatsapp', label: 'WhatsApp', placeholder: 'https://wa.me/573001234567' }
	] as const;
</script>

{#each fields as field}
	<div class="pt-3 first:pt-3">
		<label for={`social-${field.key}`} class="block text-xs font-medium text-gray-600 mb-1">{field.label}</label>
		<input
			id={`social-${field.key}`}
			type="url"
			bind:value={$signature.social[field.key]}
			placeholder={field.placeholder}
			class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
		/>
	</div>
{/each}
