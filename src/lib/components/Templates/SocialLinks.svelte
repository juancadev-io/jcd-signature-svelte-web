<script lang="ts">
	import type { SocialLinks as SocialLinksType } from '$lib/types/signature';

	let {
		social,
		color,
		size = 16
	}: { social: SocialLinksType; color: string; size?: number } = $props();

	const icons = [
		{ key: 'linkedin' as const, icon: 'tabler:brand-linkedin-filled' },
		{ key: 'twitter' as const, icon: 'tabler:brand-twitter-filled' },
		{ key: 'github' as const, icon: 'tabler:brand-github-filled' },
		{ key: 'instagram' as const, icon: 'tabler:brand-instagram-filled' },
		{ key: 'youtube' as const, icon: 'tabler:brand-youtube-filled' },
		{ key: 'whatsapp' as const, icon: 'tabler:brand-whatsapp-filled' }
	];

	function getIconSrc(icon: string, iconColor: string) {
		const encodedColor = encodeURIComponent(iconColor);
		return `https://api.iconify.design/${icon}.svg?color=${encodedColor}`;
	}
</script>

{#each icons as { key, icon }}
	{#if social[key]}
		<a
			href={social[key]}
			style="color:{color};text-decoration:none;display:inline-flex;align-items:center;vertical-align:middle;"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				src={getIconSrc(icon, color)}
				alt={key}
				width={size}
				height={size}
				style="display:block;width:{size}px;height:{size}px;"
			/>
		</a>
	{/if}
{/each}
