import type { SignatureData } from '$lib/types/signature';

export function getFullName(data: SignatureData): string {
	return `${data.firstName} ${data.lastName}`.trim();
}

export function getInitials(data: SignatureData): string {
	const parts = [data.firstName, data.lastName].filter(Boolean);
	return parts
		.map((n) => n[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
}
