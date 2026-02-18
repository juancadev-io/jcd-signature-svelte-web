/**
 * Returns the relative luminance of a hex color (0 = black, 1 = white).
 */
function getLuminance(hex: string): number {
	const raw = hex.replace('#', '');
	const r = parseInt(raw.substring(0, 2), 16) / 255;
	const g = parseInt(raw.substring(2, 4), 16) / 255;
	const b = parseInt(raw.substring(4, 6), 16) / 255;

	const [rs, gs, bs] = [r, g, b].map((c) =>
		c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
	);

	return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * If the color is too light to read on a white background, returns a dark fallback.
 */
export function getSafeColor(hex: string): string {
	if (getLuminance(hex) > 0.7) {
		return '#374151';
	}
	return hex;
}

/**
 * Ensures a foreground color has enough contrast against a given background.
 * If contrast ratio < 3, auto-corrects to white (dark bg) or near-black (light bg).
 */
export function getSafeColorOnBg(color: string, bgColor: string): string {
	const colorLum = getLuminance(color);
	const bgLum = getLuminance(bgColor);
	const contrast =
		(Math.max(colorLum, bgLum) + 0.05) / (Math.min(colorLum, bgLum) + 0.05);

	if (contrast < 3) {
		return bgLum > 0.5 ? '#111827' : '#ffffff';
	}
	return color;
}

/**
 * Converts a hex color to rgba with the given alpha.
 */
export function hexToRgba(hex: string, alpha: number): string {
	const raw = hex.replace('#', '');
	const r = parseInt(raw.substring(0, 2), 16);
	const g = parseInt(raw.substring(2, 4), 16);
	const b = parseInt(raw.substring(4, 6), 16);
	return `rgba(${r},${g},${b},${alpha})`;
}
