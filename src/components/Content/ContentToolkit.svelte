<script>
	import { Toolkits, SocialMedias } from '$lib/icons';
	import SocialMediaButton from './SocialMediaButton.svelte';

	import ToolKitButton from './ToolKitButton.svelte';
</script>

<div class="lg:flex lg:justify-between bg-white p-3 border-b lg:px-3 lg:mx-0 mx-2">
	<div class="flex lg:gap-4 justify-between lg:justify-normal w-full">
		{#each Toolkits as Toolkit}
			<ToolKitButton Icon={Toolkit.Tool} />
		{/each}
	</div>
	<div class="flex justify-center items-center lg:justify-normal lg:gap-4 gap-3 pt-4 lg:pt-0">
		{#each SocialMedias as SocialMedia}
			<SocialMediaButton Media={SocialMedia.Media} style="size-6 lg:size-8" addButton={false} />
		{/each}
	</div>
</div>
