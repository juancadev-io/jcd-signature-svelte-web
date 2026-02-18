import type { SignatureData } from '$lib/types/signature';

const _defaults: SignatureData = {
	firstName: 'John',
	lastName: 'Doe',
	jobTitle: 'Full Stack Developer',
	department: '',
	company: 'Tech Company',

	email: 'hello@techcompany.com',
	officePhone: '',
	mobilePhone: '',
	website: 'https://techcompany.com',

	avatarUrl: '',
	logoUrl: '',

	social: {
		linkedin: '',
		twitter: '',
		github: '',
		instagram: '',
		youtube: '',
		whatsapp: ''
	},

	ctaText: '',
	ctaUrl: '',

	layout: 1,
	style: 'classic',
	primaryColor: '#6366f1',
	textColor: '#374151',
	linkColor: '#6366f1',
	fontFamily: 'Arial, sans-serif',
	googleFontUrl: '',
	fontSize: 14,

	disclaimer: 'This email and any attachments are confidential and intended solely for the use of the individual to whom they are addressed. If you have received this email in error, please notify the sender immediately and delete it from your system.'
};

export function getDefaultSignature(): SignatureData {
	return structuredClone(_defaults);
}
