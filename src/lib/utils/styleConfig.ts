import type { SignatureData } from '$lib/types/signature';
import { getSafeColor, getSafeColorOnBg, hexToRgba } from '$lib/utils/colorContrast';

export interface StyleVars {
	containerBg: string;
	containerRadius: string;
	nameColor: string;
	titleColor: string;
	textColor: string;
	mutedColor: string;
	linkColor: string;
	socialColor: string;
	borderColor: string;
	separatorColor: string;
	ctaBg: string;
	ctaColor: string;
	ctaBorder: string;
	disclaimerColor: string;
	avatarBorder: string;
}

export function getStyleVars(data: SignatureData): StyleVars {
	const { style, primaryColor, textColor, linkColor } = data;

	if (style === 'minimal') {
		return {
			containerBg: 'transparent',
			containerRadius: '0',
			nameColor: getSafeColor(textColor),
			titleColor: getSafeColor(textColor),
			textColor: getSafeColor(textColor),
			mutedColor: '#9ca3af',
			linkColor: getSafeColor(linkColor),
			socialColor: getSafeColor(linkColor),
			borderColor: '#e5e7eb',
			separatorColor: '#e5e7eb',
			ctaBg: 'transparent',
			ctaColor: getSafeColor(linkColor),
			ctaBorder: 'none',
			disclaimerColor: '#9ca3af',
			avatarBorder: 'none'
		};
	}

	// classic
	return {
		containerBg: 'transparent',
		containerRadius: '0',
		nameColor: getSafeColor(textColor),
		titleColor: getSafeColor(primaryColor),
		textColor: getSafeColor(textColor),
		mutedColor: '#6b7280',
		linkColor: getSafeColor(linkColor),
		socialColor: getSafeColor(linkColor),
		borderColor: '#e5e7eb',
		separatorColor: primaryColor,
		ctaBg: primaryColor,
		ctaColor: '#ffffff',
		ctaBorder: 'none',
		disclaimerColor: '#9ca3af',
		avatarBorder: 'none'
	};
}
