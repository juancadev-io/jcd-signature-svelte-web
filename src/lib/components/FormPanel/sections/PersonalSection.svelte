<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';

	function handleAvatarUpload(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			signature.update((s) => ({ ...s, avatarUrl: reader.result as string }));
		};
		reader.readAsDataURL(file);
	}

	function handleLogoUpload(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			signature.update((s) => ({ ...s, logoUrl: reader.result as string }));
		};
		reader.readAsDataURL(file);
	}
</script>

<div class="pt-3">
	<label class="block text-xs font-medium text-gray-600 mb-1">First Name</label>
	<input type="text" bind:value={$signature.firstName} placeholder="John" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
	<input type="text" bind:value={$signature.lastName} placeholder="Doe" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Job Title</label>
	<input type="text" bind:value={$signature.jobTitle} placeholder="Full Stack Developer" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Department</label>
	<input type="text" bind:value={$signature.department} placeholder="Engineering" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Company / Brand</label>
	<input type="text" bind:value={$signature.company} placeholder="Juancadev" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Avatar</label>
	<input type="file" accept="image/*" onchange={handleAvatarUpload} class="w-full text-sm text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs hover:file:bg-indigo-100" />
	<p class="text-xs text-gray-400 mt-1">Or paste a URL below</p>
	<input type="url" bind:value={$signature.avatarUrl} placeholder="https://..." class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
<div>
	<label class="block text-xs font-medium text-gray-600 mb-1">Company Logo</label>
	<input type="file" accept="image/*" onchange={handleLogoUpload} class="w-full text-sm text-gray-500 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 file:text-xs hover:file:bg-indigo-100" />
	<p class="text-xs text-gray-400 mt-1">Or paste a URL below</p>
	<input type="url" bind:value={$signature.logoUrl} placeholder="https://..." class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
</div>
