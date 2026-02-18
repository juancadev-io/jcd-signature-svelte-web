export type Layout = 1 | 2 | 3 | 4 | 5 | 6;
export type Style = 'classic' |  'minimal';

export interface SocialLinks {
	linkedin: string;
	twitter: string;
	github: string;
	instagram: string;
	youtube: string;
	whatsapp: string;
}

export interface SignatureData {
	firstName: string;
	lastName: string;
	jobTitle: string;
	department: string;
	company: string;

	email: string;
	officePhone: string;
	mobilePhone: string;
	website: string;

	avatarUrl: string;
	logoUrl: string;

	social: SocialLinks;

	ctaText: string;
	ctaUrl: string;

	layout: Layout;
	style: Style;
	primaryColor: string;
	textColor: string;
	linkColor: string;
	fontFamily: string;
	googleFontUrl: string;
	fontSize: number;

	disclaimer: string;
}
