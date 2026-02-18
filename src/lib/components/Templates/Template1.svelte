<!--
  Template 1: Avatar LEFT | vertical separator | Info RIGHT
  Bottom: logo left, social icons right
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
				<table cellpadding="0" cellspacing="0" style="width:100%;">
					<tbody>
						<tr>
							<!-- Avatar -->
							<td style="padding-right:14px;vertical-align:top;width:80px;">
								{#if data.avatarUrl}
									<img src={data.avatarUrl} alt={fullName} width="80" height="80" style="display:block;width:80px !important;height:80px !important;min-width:80px;min-height:80px;max-width:80px;max-height:80px;border-radius:9999px;object-fit:cover;object-position:center center;box-sizing:border-box;{s.avatarBorder ? `border:${s.avatarBorder}` : ''}" />
								{:else}
									<div style="width:80px;height:80px;border-radius:50%;background:{data.primaryColor};display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff;">
										{initials}
									</div>
								{/if}
							</td>
							<!-- Separator + Info -->
							<td style="border-left:3px solid {s.separatorColor};padding-left:14px;vertical-align:top;">
								<div style="font-size:{fs + 4}px;font-weight:700;color:{s.nameColor};">{fullName}</div>
								<div style="font-size:{fs - 1}px;color:{s.titleColor};margin-top:2px;">
									{data.jobTitle}{#if data.department} · {data.department}{/if}
								</div>
								{#if data.company}
									<div style="font-size:{fs - 2}px;color:{s.mutedColor};margin-top:1px;">{data.company}</div>
								{/if}

								<div style="margin-top:6px;font-size:{fs - 2}px;color:{s.mutedColor};">
									{#if data.email}<a href="mailto:{data.email}" style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">{data.email}</a><br/>{/if}
									{#if data.officePhone}<span>{data.officePhone}</span>{/if}
									{#if data.mobilePhone}<span>{data.officePhone ? ' · ' : ''}{data.mobilePhone}</span>{/if}
									{#if data.website}<br/><a href={data.website} style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;">{data.website}</a>{/if}
								</div>
							</td>
						</tr>

						<!-- Bottom row: logo + social -->
						{#if data.logoUrl || Object.values(data.social).some(Boolean)}
						<tr>
							<td colspan="2" style="padding-top:12px;">
								<table cellpadding="0" cellspacing="0" style="width:100%;">
									<tbody><tr>
										<td style="vertical-align:middle;">
											{#if data.logoUrl}
												<img src={data.logoUrl} alt={data.company || 'Logo'} style="max-height:30px;max-width:100px;object-fit:contain;" />
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
							</td>
						</tr>
						{/if}

						<!-- CTA -->
						{#if data.ctaText && data.ctaUrl}
						<tr>
							<td colspan="2" style="padding-top:10px;">
								{#if data.style === 'minimal'}
									<a href={data.ctaUrl} style="color:{s.ctaColor};text-decoration:none;font-size:{fs - 2}px;font-weight:600;border-bottom:1px solid {s.ctaColor};">{data.ctaText} &rarr;</a>
								{:else}
									<a href={data.ctaUrl} style="display:inline-block;padding:7px 14px;background:{s.ctaBg};color:{s.ctaColor};border-radius:6px;text-decoration:none;font-size:{fs - 1}px;font-weight:600;{s.ctaBorder !== 'none' ? `border:${s.ctaBorder}` : ''}">{data.ctaText}</a>
								{/if}
							</td>
						</tr>
						{/if}

						<!-- Disclaimer -->
						{#if data.disclaimer}
						<tr>
							<td colspan="2" style="padding-top:12px;">
								<div style="border-top:1px solid {s.borderColor};padding-top:8px;font-size:{fs - 3}px;color:{s.disclaimerColor};max-width:460px;">
									{data.disclaimer}
								</div>
							</td>
						</tr>
						{/if}
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
