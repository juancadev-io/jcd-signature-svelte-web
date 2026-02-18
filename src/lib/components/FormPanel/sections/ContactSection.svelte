<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
</script>

<div class="pt-3">
	<label class="block text-xs font-medium text-gray-600 mb-1">Email</label>
	<input type="email" bind:value={$signature.email} placeholder="hello@juancamilofarfan.com" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Office Phone</label>
	<input type="tel" bind:value={$signature.officePhone} placeholder="+57 (1) 234 5678" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Mobile Phone</label>
	<input type="tel" bind:value={$signature.mobilePhone} placeholder="+57 300 000 0000" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Website (Company / Brand)</label>
	<input type="url" bind:value={$signature.website} placeholder="https://techcompany.com" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
