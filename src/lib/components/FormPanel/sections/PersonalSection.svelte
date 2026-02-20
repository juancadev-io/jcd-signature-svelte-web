<script lang="ts">
	import { signature } from '$lib/stores/signatureStore';
	import { compressImageForSignature } from '$lib/utils/imageUpload';

	let uploadError = $state('');

	async function handleAvatarUpload(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		uploadError = '';
		try {
			const optimized = await compressImageForSignature(file, {
				maxWidth: 260,
				maxHeight: 260,
				quality: 0.82
			});
			signature.update((s) => ({ ...s, avatarUrl: optimized }));
		} catch {
			uploadError = 'Could not optimize avatar image. Try another file.';
		}
	}

	async function handleLogoUpload(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		uploadError = '';
		try {
			const optimized = await compressImageForSignature(file, {
				maxWidth: 320,
				maxHeight: 140,
				quality: 0.82
			});
			signature.update((s) => ({ ...s, logoUrl: optimized }));
		} catch {
			uploadError = 'Could not optimize logo image. Try another file.';
		}
	}
</script>

<div class="pt-3">
	<label for="personal-first-name" class="mb-1 block text-xs font-medium text-gray-600"
		>First Name</label
	>
	<input
		id="personal-first-name"
		type="text"
		bind:value={$signature.firstName}
		placeholder="John"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-last-name" class="mb-1 block text-xs font-medium text-gray-600"
		>Last Name</label
	>
	<input
		id="personal-last-name"
		type="text"
		bind:value={$signature.lastName}
		placeholder="Doe"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-job-title" class="mb-1 block text-xs font-medium text-gray-600"
		>Job Title</label
	>
	<input
		id="personal-job-title"
		type="text"
		bind:value={$signature.jobTitle}
		placeholder="Full Stack Developer"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-department" class="mb-1 block text-xs font-medium text-gray-600"
		>Department</label
	>
	<input
		id="personal-department"
		type="text"
		bind:value={$signature.department}
		placeholder="Engineering"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-company" class="mb-1 block text-xs font-medium text-gray-600"
		>Company / Brand</label
	>
	<input
		id="personal-company"
		type="text"
		bind:value={$signature.company}
		placeholder="Juancadev"
		class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-avatar-file" class="mb-1 block text-xs font-medium text-gray-600"
		>Avatar</label
	>
	<input
		id="personal-avatar-file"
		type="file"
		accept="image/*"
		onchange={handleAvatarUpload}
		class="w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-3 file:py-1 file:text-xs file:text-indigo-700 hover:file:bg-indigo-100"
	/>
	<p class="mt-1 text-xs text-gray-400">Or paste a URL below</p>
	<input
		id="personal-avatar-url"
		type="url"
		bind:value={$signature.avatarUrl}
		placeholder="https://..."
		class="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>
<div>
	<label for="personal-logo-file" class="mb-1 block text-xs font-medium text-gray-600"
		>Company Logo</label
	>
	<input
		id="personal-logo-file"
		type="file"
		accept="image/*"
		onchange={handleLogoUpload}
		class="w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-3 file:py-1 file:text-xs file:text-indigo-700 hover:file:bg-indigo-100"
	/>
	<p class="mt-1 text-xs text-gray-400">Or paste a URL below</p>
	<input
		id="personal-logo-url"
		type="url"
		bind:value={$signature.logoUrl}
		placeholder="https://..."
		class="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
	/>
</div>

{#if uploadError}
	<p class="text-xs text-amber-600">{uploadError}</p>
{/if}

<p class="text-xs text-gray-400">
	Images uploaded from file are auto-optimized to keep Gmail-friendly HTML size.
</p>
