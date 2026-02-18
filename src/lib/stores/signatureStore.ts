import { writable } from 'svelte/store';
import type { SignatureData } from '$lib/types/signature';
import { getDefaultSignature } from '$lib/stores/defaults';

export type { SignatureData, Layout, Style, SocialLinks } from '$lib/types/signature';

export const signature = writable<SignatureData>(getDefaultSignature());

export function resetSignature() {
	signature.set(getDefaultSignature());
}

export function loadSignature(data: Partial<SignatureData>) {
	signature.update((current) => {
		const merged = { ...current, ...data };
		if (data.social) {
			merged.social = { ...current.social, ...data.social };
		}
		return merged;
	});
}

export function exportConfig(data: SignatureData): string {
	return JSON.stringify(data, null, 2);
}
