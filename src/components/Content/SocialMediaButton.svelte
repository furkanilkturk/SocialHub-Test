<script>
	import { Plus } from 'lucide-svelte';
	export let Media;
	export let addButton = false;
	export let style = '';
</script>

<div class="border rounded-lg flex justify-center items-center p-1 lg:p-1.5 relative {style}">
	<div
		class={`${
			addButton === true
				? 'absolute bg-dropdown text-white rounded-full size-4 flex items-center justify-center bottom-0 left-6'
				: 'hidden'
		}`}
	>
		<Plus />
	</div>
	<img src={Media} alt="Social Media Button" />
</div>
