<script>
	import SocialMediaButton from '../Content/SocialMediaButton.svelte';
	import { SocialMedias } from '$lib/icons.js';
	import { Settings, Plus } from 'lucide-svelte';
</script>

<div class="hidden lg:flex bg-white flex-col justify-between border-r px-4 pt-3">
	<div class="flex flex-col gap-4">
		{#each SocialMedias as SocialMedia}
			<SocialMediaButton Media={SocialMedia.Media} addButton={true} style="size-10 " />
		{/each}
	</div>
	<div class="flex flex-col gap-4 items-center justify-center text-gray-500 pb-4">
		<Settings />
		<div class="flex justify-center items-center border rounded-lg p-1">
			<Plus />
		</div>
	</div>
</div>
