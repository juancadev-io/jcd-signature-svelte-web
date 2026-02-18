<!--
  FormPanel.svelte
  Step-by-step form. Writes directly to the signatureStore.
  Organized in collapsible sections for better UX.
-->
<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	import PersonalSection from './sections/PersonalSection.svelte';
	import ContactSection from './sections/ContactSection.svelte';
	import SocialSection from './sections/SocialSection.svelte';
	import DesignSection from './sections/DesignSection.svelte';
	import ExtrasSection from './sections/ExtrasSection.svelte';

	let personal = $state(true);
	let contact = $state(true);
	let social = $state(false);
	let design = $state(false);
	let extras = $state(false);
</script>

<div class="space-y-3">
	<SectionWrapper title="Personal Info" icon="👤" bind:open={personal}>
		<PersonalSection />
	</SectionWrapper>

	<SectionWrapper title="Contact" icon="📬" bind:open={contact}>
		<ContactSection />
	</SectionWrapper>

	<SectionWrapper title="Social Links" icon="🔗" bind:open={social}>
		<SocialSection />
	</SectionWrapper>

	<SectionWrapper title="Design" icon="🎨" bind:open={design}>
		<DesignSection />
	</SectionWrapper>

	<SectionWrapper title="Extras" icon="✨" bind:open={extras}>
		<ExtrasSection />
	</SectionWrapper>
</div>
