<!--
  Template 2: Avatar TOP CENTER, everything centered below
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

<table cellpadding="0" cellspacing="0" style="font-family:{data.fontFamily};font-size:{fs}px;color:{s.textColor};background:{s.containerBg};border-radius:{s.containerRadius};width:100%;max-width:400px;">
	<tbody>
		<tr>
			<td style="text-align:center;">
				<!-- Avatar -->
				<div style="margin-bottom:10px;">
					{#if data.avatarUrl}
						<img src={data.avatarUrl} alt={fullName} width="80" height="80" style="display:block;margin:0 auto;width:80px !important;height:80px !important;min-width:80px;min-height:80px;max-width:80px;max-height:80px;border-radius:9999px;object-fit:cover;{s.avatarBorder ? `border:${s.avatarBorder}` : ''}" />
					{:else}
						<div style="width:80px;height:80px;border-radius:50%;background:{data.primaryColor};display:inline-flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff;">
							{initials}
						</div>
					{/if}
				</div>

				<div style="font-size:{fs + 4}px;font-weight:700;color:{s.nameColor};">{fullName}</div>
				<div style="font-size:{fs - 1}px;color:{s.titleColor};margin-top:2px;">
					{data.jobTitle}{#if data.department} · {data.department}{/if}
				</div>
				{#if data.company}
					<div style="font-size:{fs - 2}px;color:{s.mutedColor};margin-top:1px;">{data.company}</div>
				{/if}

				<!-- Contact -->
				<div style="margin-top:8px;font-size:{fs - 2}px;color:{s.mutedColor};">
					{#if data.email}<a href="mailto:{data.email}" style="color:{s.linkColor};text-decoration:none;">{data.email}</a><br/>{/if}
					{#if data.officePhone}<span>{data.officePhone}</span>{/if}
					{#if data.mobilePhone}<span>{data.officePhone ? ' · ' : ''}{data.mobilePhone}</span>{/if}
					{#if data.website}<br/><a href={data.website} style="color:{s.linkColor};text-decoration:none;">{data.website}</a>{/if}
				</div>

				<!-- Logo + Social -->
				{#if data.logoUrl || Object.values(data.social).some(Boolean)}
				<div style="margin-top:10px;display:flex;align-items:center;justify-content:center;gap:12px;">
					{#if data.logoUrl}
						<img src={data.logoUrl} alt={data.company || 'Logo'} style="max-height:28px;max-width:90px;object-fit:contain;" />
					{/if}
					{#if Object.values(data.social).some(Boolean)}
						<div style="display:inline-flex;gap:6px;">
							<SocialLinks social={data.social} color={s.socialColor} size={15} />
						</div>
					{/if}
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
				<div style="margin-top:12px;border-top:1px solid {s.borderColor};padding-top:8px;font-size:{fs - 3}px;color:{s.disclaimerColor};max-width:400px;">
					{data.disclaimer}
				</div>
				{/if}
			</td>
		</tr>
	</tbody>
</table>
