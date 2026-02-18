<!--
  Template 3: Avatar LEFT + Name/Title RIGHT (compact header)
  Separator, then contact details full width below.
  Logo + social at bottom.
-->
<script lang="ts">
	import type { SignatureData } from '$lib/types/signature';
	import { getFullName, getInitials } from '$lib/utils/templateHelpers';
	import { getStyleVars } from '$lib/utils/styleConfig';
	import SocialLinks from './SocialLinks.svelte';

	let { data }: { data: SignatureData } = $props();
	let s = $derived(getStyleVars(data));
	let fullName = $derived(getFullName(data));
	let initials = $derived(getInitials(data));
	let fs = $derived(data.fontSize);
</script>

<table cellpadding="0" cellspacing="0" style="font-family:{data.fontFamily};font-size:{fs}px;line-height:1.35;color:{s.textColor};background:{s.containerBg};border-radius:{s.containerRadius};max-width:500px;">
	<tbody>
		<tr>
			<td>
				<!-- Header: Avatar + Name -->
				<table cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td style="padding-right:12px;vertical-align:middle;">
							{#if data.avatarUrl}
								<img src={data.avatarUrl} alt={fullName} width="64" height="64" style="display:block;width:64px !important;height:64px !important;min-width:64px;min-height:64px;max-width:64px;max-height:64px;border-radius:9999px;object-fit:cover;object-position:center center;box-sizing:border-box;{s.avatarBorder ? `border:${s.avatarBorder}` : ''}" />
							{:else}
								<div style="width:64px;height:64px;border-radius:50%;background:{data.primaryColor};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;">
									{initials}
								</div>
							{/if}
						</td>
						<td style="vertical-align:middle;">
							<div style="font-size:{fs + 4}px;font-weight:700;color:{s.nameColor};">{fullName}</div>
							<div style="font-size:{fs - 1}px;color:{s.titleColor};margin-top:1px;">
								{data.jobTitle}{#if data.department} · {data.department}{/if}
							</div>
							{#if data.company}
								<div style="font-size:{fs - 2}px;color:{s.mutedColor};margin-top:1px;">{data.company}</div>
							{/if}
						</td>
					</tr></tbody>
				</table>

				<!-- Separator -->
				<div style="margin:10px 0;height:2px;background:{s.separatorColor};width:50px;"></div>

				<!-- Contact details full width -->
				<div style="font-size:{fs - 2}px;color:{s.mutedColor};display:flex;gap:8px;flex-wrap:wrap;">
					{#if data.email}<a href="mailto:{data.email}" style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">{data.email}</a>{/if}
					{#if data.officePhone}<span>{data.email ? '·' : ''} {data.officePhone}</span>{/if}
					{#if data.mobilePhone}<span>· {data.mobilePhone}</span>{/if}
					{#if data.website}<span>· <a href={data.website} style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">{data.website}</a></span>{/if}
				</div>

				<!-- Logo + Social -->
				{#if data.logoUrl || Object.values(data.social).some(Boolean)}
				<div style="margin-top:10px;">
					<table cellpadding="0" cellspacing="0" style="width:100%;">
						<tbody><tr>
							<td style="vertical-align:middle;">
								{#if data.logoUrl}
									<img src={data.logoUrl} alt={data.company || 'Logo'} style="max-height:28px;max-width:90px;object-fit:contain;" />
								{/if}
							</td>
							<td style="text-align:right;vertical-align:middle;">
								{#if Object.values(data.social).some(Boolean)}
									<div style="display:inline-flex;gap:6px;">
										<SocialLinks social={data.social} color={s.socialColor} size={15} />
									</div>
								{/if}
							</td>
						</tr></tbody>
					</table>
				</div>
				{/if}

				<!-- CTA -->
				{#if data.ctaText && data.ctaUrl}
				<div style="margin-top:10px;">
					{#if data.style === 'minimal'}
						<a href={data.ctaUrl} style="color:{s.ctaColor};text-decoration:none;font-size:{fs - 2}px;font-weight:600;border-bottom:1px solid {s.ctaColor};">{data.ctaText} &rarr;</a>
					{:else}
						<a href={data.ctaUrl} style="display:inline-block;padding:7px 14px;background:{s.ctaBg};color:{s.ctaColor};border-radius:6px;text-decoration:none;font-size:{fs - 1}px;font-weight:600;{s.ctaBorder !== 'none' ? `border:${s.ctaBorder}` : ''}">{data.ctaText}</a>
					{/if}
				</div>
				{/if}

				<!-- Disclaimer -->
				{#if data.disclaimer}
				<div style="margin-top:12px;border-top:1px solid {s.borderColor};padding-top:8px;font-size:{fs - 3}px;color:{s.disclaimerColor};max-width:460px;">
					{data.disclaimer}
				</div>
				{/if}
			</td>
		</tr>
	</tbody>
</table>
