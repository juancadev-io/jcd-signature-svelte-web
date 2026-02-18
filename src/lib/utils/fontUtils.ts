export const DEFAULT_FONT_FAMILY = 'Arial, sans-serif';

export const PRESET_FONT_OPTIONS = [
	{ label: 'Arial', value: 'Arial, sans-serif' },
	{ label: 'Georgia', value: 'Georgia, serif' },
	{ label: 'Trebuchet MS', value: "'Trebuchet MS', sans-serif" },
	{ label: 'Verdana', value: 'Verdana, sans-serif' },
	{ label: 'Courier New', value: "'Courier New', monospace" }
];

export function isValidGoogleFontUrl(url: string): boolean {
	if (!url.trim()) return false;

	try {
		const parsed = new URL(url.trim());
		if (parsed.hostname !== 'fonts.googleapis.com') return false;
		if (!parsed.pathname.startsWith('/css2')) return false;
		return !!parsed.searchParams.get('family');
	} catch {
		return false;
	}
}

export function getFontFamilyFromGoogleFontUrl(url: string): string {
	if (!isValidGoogleFontUrl(url)) return '';

	try {
		const parsed = new URL(url.trim());
		const familyParam = parsed.searchParams.get('family') ?? '';
		if (!familyParam) return '';

		const familyName = familyParam.split(':')[0]?.replace(/\+/g, ' ').trim() ?? '';
		if (!familyName) return '';

		return familyName;
	} catch {
		return '';
	}
}

export function isPresetFontFamily(fontFamily: string): boolean {
	return PRESET_FONT_OPTIONS.some((option) => option.value === fontFamily);
}

export function getGoogleFontHref(fontFamily: string, googleFontUrl = ''): string | null {
	if (isValidGoogleFontUrl(googleFontUrl)) {
		return googleFontUrl.trim();
	}
	return null;
}

export function toCustomFontFamily(input: string): string {
	const name = input.trim();
	if (!name) return '';
	if (name.includes(',')) return name;
	return `'${name}', sans-serif`;
}
