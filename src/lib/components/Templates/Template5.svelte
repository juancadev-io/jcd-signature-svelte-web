<!--
  Template 5: All info stacked LEFT, avatar bottom-right area
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

<table
	cellpadding="0"
	cellspacing="0"
	style="font-family:{data.fontFamily};font-size:{fs}px;line-height:1.35;color:{s.textColor};background:{s.containerBg};border-radius:{s.containerRadius};max-width:500px;"
>
	<tbody>
		<tr>
			<td>
				<!-- Name + title stacked -->
				<div style="font-size:{fs + 4}px;font-weight:700;color:{s.nameColor};">{fullName}</div>
				<div style="font-size:{fs - 1}px;color:{s.titleColor};margin-top:2px;">
					{data.jobTitle}{#if data.department}
						· {data.department}{/if}
				</div>
				{#if data.company}
					<div style="font-size:{fs - 2}px;color:{s.mutedColor};margin-top:1px;">
						{data.company}
					</div>
				{/if}

				<!-- Separator -->
				<div style="margin:8px 0;height:2px;background:{s.separatorColor};width:40px;"></div>

				<!-- Contact stacked -->
				<div style="font-size:{fs - 2}px;color:{s.mutedColor};">
					{#if data.email}<div>
							<a
								href="mailto:{data.email}"
								style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;"
								>{data.email}</a
							>
						</div>{/if}
					{#if data.officePhone}<div>{data.officePhone}</div>{/if}
					{#if data.mobilePhone}<div>{data.mobilePhone}</div>{/if}
					{#if data.website}<div>
							<a
								href={data.website}
								style="color:{s.linkColor};text-decoration:none;word-break:break-word;overflow-wrap:anywhere;"
								>{data.website}</a
							>
						</div>{/if}
				</div>

				<!-- Bottom row: Logo + Social + Avatar -->
				<div style="margin-top:10px;">
					<table cellpadding="0" cellspacing="0" style="width:100%;">
						<tbody
							><tr>
								<td style="vertical-align:bottom;">
									{#if data.logoUrl}
										<div style="margin-bottom:6px;">
											<img
												src={data.logoUrl}
												alt={data.company || 'Logo'}
												style="max-height:28px;max-width:90px;object-fit:contain;"
											/>
										</div>
									{/if}
									{#if Object.values(data.social).some(Boolean)}
										<div style="display:inline-flex;gap:6px;">
											<SocialLinks social={data.social} color={s.socialColor} size={15} />
										</div>
									{/if}
								</td>
								<td style="text-align:right;vertical-align:bottom;padding-left:14px;width:70px;">
									{#if data.avatarUrl}
										<img
											src={data.avatarUrl}
											alt={fullName}
											width="70"
											height="70"
											style="display:block;width:70px !important;height:70px !important;min-width:70px;min-height:70px;max-width:70px;max-height:70px;border-radius:9999px;object-fit:cover;object-position:center center;box-sizing:border-box;{s.avatarBorder
												? `border:${s.avatarBorder}`
												: ''}"
										/>
									{:else}
										<div
											style="width:70px;height:70px;border-radius:50%;background:{data.primaryColor};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;"
										>
											{initials}
										</div>
									{/if}
								</td>
							</tr></tbody
						>
					</table>
				</div>

				<!-- CTA -->
				{#if data.ctaText && data.ctaUrl}
					<div style="margin-top:10px;">
						{#if data.style === 'minimal'}
							<a
								href={data.ctaUrl}
								style="color:{s.ctaColor};text-decoration:none;font-size:{fs -
									2}px;font-weight:600;border-bottom:1px solid {s.ctaColor};"
								>{data.ctaText} &rarr;</a
							>
						{:else}
							<a
								href={data.ctaUrl}
								style="display:inline-block;padding:7px 14px;background:{s.ctaBg};color:{s.ctaColor};border-radius:6px;text-decoration:none;font-size:{fs -
									1}px;font-weight:600;{s.ctaBorder !== 'none' ? `border:${s.ctaBorder}` : ''}"
								>{data.ctaText}</a
							>
						{/if}
					</div>
				{/if}

				<!-- Disclaimer -->
				{#if data.disclaimer}
					<div
						style="margin-top:12px;border-top:1px solid {s.borderColor};padding-top:8px;font-size:{fs -
							3}px;color:{s.disclaimerColor};max-width:460px;white-space:pre-line;overflow-wrap:anywhere;"
					>
						{data.disclaimer}
					</div>
				{/if}
			</td>
		</tr>
	</tbody>
</table>
