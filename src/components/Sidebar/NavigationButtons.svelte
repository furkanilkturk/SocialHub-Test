<script>
	import { page } from '$app/stores';
	import DropdownMenu from '../DropdownMenu.svelte';

	export let path;
	export let Icon;
	export let name;
	export let dropdown;
</script>

{#if !dropdown}
	<a
		href="/"
		class=" rounded-lg p-2 hover:bg-greenButton {$page.url.pathname === `${path}` &&
			'bg-greenButton text-white'}"
	>
		<div class="flex gap-3">
			<Icon />
			{name}
		</div>
	</a>
{:else}
	<DropdownMenu style="bg-transparent p-2 justify-between flex w-full hover:bg-greenButton">
		<div class="flex items-center gap-3">
			<Icon />
			{name}
		</div>
	</DropdownMenu>
{/if}
