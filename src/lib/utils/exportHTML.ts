/**
 * exportHTML.ts
 * Generates a self-contained HTML string of the signature.
 * Uses inline styles because email clients strip external CSS.
 */

import type { SignatureData } from '$lib/types/signature';
import { getFullName, getInitials } from '$lib/utils/templateHelpers';
import { getStyleVars, type StyleVars } from '$lib/utils/styleConfig';
import { socialEntries } from '$lib/utils/socialIcons';
import { getGoogleFontHref } from '$lib/utils/fontUtils';

export function generateHTML(data: SignatureData): string {
	const s = getStyleVars(data);
	const fullName = getFullName(data);
	const initials = getInitials(data);
	const fs = data.fontSize;

	const avatar = buildAvatar(data, fullName, initials, s);
	const logo = buildLogo(data);
	const contact = buildContact(data, s, fs);
	const social = buildSocialIcons(data, s);
	const cta = buildCta(data, s, fs);
	const disclaimer = buildDisclaimer(data, s, fs);
	const titleLine = `${data.jobTitle}${data.department ? ' &middot; ' + data.department : ''}`;
	const companyLine = data.company
		? `<div style="font-size:${fs - 2}px;color:${s.mutedColor};margin-top:1px;">${data.company}</div>`
		: '';

	const p = {
		data,
		s,
		fs,
		fullName,
		avatar,
		logo,
		contact,
		social,
		cta,
		disclaimer,
		titleLine,
		companyLine
	};
	const fontImport = buildFontImport(data);

	switch (data.layout) {
		case 2:
			return `${fontImport}${buildLayout2(p)}`;
		case 3:
			return `${fontImport}${buildLayout3(p)}`;
		case 4:
			return `${fontImport}${buildLayout4(p)}`;
		case 5:
			return `${fontImport}${buildLayout5(p)}`;
		case 6:
			return `${fontImport}${buildLayout6(p)}`;
		default:
			return `${fontImport}${buildLayout1(p)}`;
	}
}

// ─── Shared builders ─────────────────────────────────────────────────────────

interface Parts {
	data: SignatureData;
	s: StyleVars;
	fs: number;
	fullName: string;
	avatar: string;
	logo: string;
	contact: string;
	social: string;
	cta: string;
	disclaimer: string;
	titleLine: string;
	companyLine: string;
}

function buildFontImport(data: SignatureData): string {
	const href = getGoogleFontHref(data.fontFamily, data.googleFontUrl);
	if (!href) return '';
	return `<style>@import url('${href}');</style>`;
}

function buildAvatar(
	data: SignatureData,
	fullName: string,
	initials: string,
	s: StyleVars,
	size = 80
): string {
	const borderStyle = s.avatarBorder !== 'none' ? `border:${s.avatarBorder};` : '';
	if (data.avatarUrl) {
		return `<img src="${data.avatarUrl}" alt="${fullName}" width="${size}" height="${size}" style="display:block;width:${size}px !important;height:${size}px !important;min-width:${size}px;min-height:${size}px;max-width:${size}px;max-height:${size}px;border-radius:9999px;object-fit:cover;object-position:center center;box-sizing:border-box;${borderStyle}" />`;
	}
	return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${data.primaryColor};display:flex;align-items:center;justify-content:center;font-size:${Math.round(size * 0.35)}px;font-weight:700;color:#fff;font-family:${data.fontFamily};">${initials}</div>`;
}

function buildLogo(data: SignatureData): string {
	if (!data.logoUrl) return '';
	return `<img src="${data.logoUrl}" alt="${data.company || 'Logo'}" style="max-height:28px;max-width:90px;object-fit:contain;" />`;
}

function buildContact(data: SignatureData, s: StyleVars, fs: number): string {
	const lines: string[] = [];
	if (data.email)
		lines.push(
			`<a href="mailto:${data.email}" style="color:${s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">${data.email}</a>`
		);
	const phones = [data.officePhone, data.mobilePhone].filter(Boolean).join(' &middot; ');
	if (phones) lines.push(`<span>${phones}</span>`);
	if (data.website)
		lines.push(
			`<a href="${data.website}" style="color:${s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">${data.website}</a>`
		);
	return `<div style="font-size:${fs - 2}px;color:${s.mutedColor};">${lines.join('<br/>')}</div>`;
}

function buildSocialIcons(data: SignatureData, s: StyleVars): string {
	const iconMap: Record<string, string> = {
		linkedin: 'tabler:brand-linkedin-filled',
		twitter: 'tabler:brand-twitter-filled',
		github: 'tabler:brand-github-filled',
		instagram: 'tabler:brand-instagram-filled',
		youtube: 'tabler:brand-youtube-filled',
		whatsapp: 'tabler:brand-whatsapp-filled'
	};
	const iconColor = encodeURIComponent(s.socialColor);
	const icons = socialEntries
		.filter((entry) => data.social[entry.key])
		.map(
			(entry) =>
				`<a href="${data.social[entry.key]}" style="text-decoration:none;display:inline-block;margin-right:8px;vertical-align:middle;" target="_blank" rel="noopener noreferrer"><img src="https://api.iconify.design/${iconMap[entry.key]}.svg?color=${iconColor}" alt="${entry.label}" width="16" height="16" style="display:block;width:16px;height:16px;" /></a>`
		)
		.join('');
	if (!icons) return '';
	return `<div style="margin-top:0;">${icons}</div>`;
}

function buildCta(data: SignatureData, s: StyleVars, fs: number): string {
	if (!data.ctaText || !data.ctaUrl) return '';
	if (data.style === 'minimal') {
		return `<div style="margin-top:10px;"><a href="${data.ctaUrl}" style="color:${s.ctaColor};text-decoration:none;font-size:${fs - 2}px;font-weight:600;border-bottom:1px solid ${s.ctaColor};">${data.ctaText} &rarr;</a></div>`;
	}
	const border = s.ctaBorder !== 'none' ? `border:${s.ctaBorder};` : '';
	return `<div style="margin-top:10px;"><a href="${data.ctaUrl}" style="display:inline-block;padding:7px 14px;background:${s.ctaBg};color:${s.ctaColor};border-radius:6px;text-decoration:none;font-size:${fs - 1}px;font-weight:600;${border}">${data.ctaText}</a></div>`;
}

function buildDisclaimer(data: SignatureData, s: StyleVars, fs: number): string {
	if (!data.disclaimer) return '';
	const disclaimerText = data.disclaimer.replace(/\r?\n/g, '<br/>');
	return `<div style="margin-top:12px;border-top:1px solid ${s.borderColor};padding-top:8px;font-size:${fs - 3}px;color:${s.disclaimerColor};max-width:460px;white-space:pre-line;overflow-wrap:anywhere;">${disclaimerText}</div>`;
}

function bottomRow(logo: string, social: string): string {
	if (!logo && !social) return '';
	return `<table cellpadding="0" cellspacing="0" style="width:100%;margin-top:10px;"><tr><td style="vertical-align:middle;">${logo}</td><td style="text-align:right;vertical-align:middle;">${social}</td></tr></table>`;
}

function wrap(data: SignatureData, s: StyleVars, inner: string, fullWidth = false): string {
	const w = fullWidth ? 'width:100%;' : '';
	return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${data.fontFamily};font-size:${data.fontSize}px;line-height:1.35;color:${s.textColor};background:${s.containerBg};border-radius:${s.containerRadius};${w}max-width:500px;"><tr><td>${inner}</td></tr></table>`.trim();
}

// ─── Layout builders ─────────────────────────────────────────────────────────

function buildLayout1(p: Parts): string {
	const inner = `
<table cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
	<td style="padding-right:14px;vertical-align:top;width:80px;">${p.avatar}</td>
  <td style="border-left:3px solid ${p.s.separatorColor};padding-left:14px;vertical-align:top;">
    <div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
    <div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:2px;">${p.titleLine}</div>
    ${p.companyLine}
    <div style="margin-top:6px;">${p.contact}</div>
  </td>
</tr>
<tr><td colspan="2">${bottomRow(p.logo, p.social)}</td></tr>
${p.cta ? `<tr><td colspan="2">${p.cta}</td></tr>` : ''}
${p.disclaimer ? `<tr><td colspan="2">${p.disclaimer}</td></tr>` : ''}
</table>`;
	return wrap(p.data, p.s, inner);
}

function buildLayout2(p: Parts): string {
	const centeredAvatar = p.data.avatarUrl
		? p.avatar.replace('display:block;', 'display:block;margin:0 auto;')
		: p.avatar;
	const inner = `
<div style="text-align:center;">
	<div style="margin-bottom:10px;">${centeredAvatar}</div>
  <div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
  <div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:2px;">${p.titleLine}</div>
  ${p.companyLine}
  <div style="margin-top:8px;">${p.contact}</div>
  ${p.logo || p.social ? `<div style="margin-top:10px;">${p.logo} ${p.social}</div>` : ''}
  ${p.cta}
  ${p.disclaimer}
</div>`;
	return wrap(p.data, p.s, inner, true);
}

function buildLayout3(p: Parts): string {
	const avatarSmall = buildAvatar(p.data, p.fullName, getInitials(p.data), p.s, 64);
	const inner = `
<table cellpadding="0" cellspacing="0"><tr>
	<td style="padding-right:12px;vertical-align:middle;">${avatarSmall}</td>
  <td style="vertical-align:middle;">
    <div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
    <div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:1px;">${p.titleLine}</div>
    ${p.companyLine}
  </td>
</tr></table>
<div style="margin:10px 0;height:2px;background:${p.s.separatorColor};width:50px;"></div>
${p.contact}
${bottomRow(p.logo, p.social)}
${p.cta}
${p.disclaimer}`;
	return wrap(p.data, p.s, inner);
}

function buildLayout4(p: Parts): string {
	const inner = `
<table cellpadding="0" cellspacing="0" style="width:100%;"><tr>
  <td style="vertical-align:top;">
    <div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
    <div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:2px;">${p.titleLine}</div>
    ${p.companyLine}
    <div style="margin-top:6px;">${p.contact}</div>
  </td>
	<td style="vertical-align:top;text-align:right;padding-left:14px;width:80px;">${p.avatar}</td>
</tr>
<tr><td colspan="2">${bottomRow(p.logo, p.social)}</td></tr>
${p.cta ? `<tr><td colspan="2">${p.cta}</td></tr>` : ''}
${p.disclaimer ? `<tr><td colspan="2">${p.disclaimer}</td></tr>` : ''}
</table>`;
	return wrap(p.data, p.s, inner);
}

function buildLayout5(p: Parts): string {
	const avatarSmall = buildAvatar(p.data, p.fullName, getInitials(p.data), p.s, 70);
	const inner = `
<div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
<div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:2px;">${p.titleLine}</div>
${p.companyLine}
<div style="margin:8px 0;height:2px;background:${p.s.separatorColor};width:40px;"></div>
${p.contact}
<table cellpadding="0" cellspacing="0" style="width:100%;margin-top:10px;"><tr>
  <td style="vertical-align:bottom;">${p.logo ? `<div style="margin-bottom:6px;">${p.logo}</div>` : ''}${p.social}</td>
	<td style="text-align:right;vertical-align:bottom;width:70px;">${avatarSmall}</td>
</tr></table>
${p.cta}
${p.disclaimer}`;
	return wrap(p.data, p.s, inner);
}

function buildLayout6(p: Parts): string {
	const avatarSmall = buildAvatar(p.data, p.fullName, getInitials(p.data), p.s, 70);
	const inner = `
<table cellpadding="0" cellspacing="0" style="width:100%;"><tr>
  <td style="vertical-align:top;">
    <div style="font-size:${p.fs + 4}px;font-weight:700;color:${p.s.nameColor};">${p.fullName}</div>
    <div style="font-size:${p.fs - 1}px;color:${p.s.titleColor};margin-top:2px;">${p.titleLine}</div>
    ${p.companyLine}
  </td>
	<td style="vertical-align:top;text-align:right;padding-left:14px;width:70px;">${avatarSmall}</td>
</tr>
<tr><td colspan="2" style="padding-top:8px;">${p.contact}</td></tr>
<tr><td colspan="2">${bottomRow(p.logo, p.social)}</td></tr>
${p.cta ? `<tr><td colspan="2">${p.cta}</td></tr>` : ''}
${p.disclaimer ? `<tr><td colspan="2">${p.disclaimer}</td></tr>` : ''}
</table>`;
	return wrap(p.data, p.s, inner);
}
