<script>
	import { Search } from 'lucide-svelte';
	let isFocus = false;
	const handleFocus = () => {
		isFocus = true;
		console.log('focused');
	};
	const handleBlur = () => {
		isFocus = false;
	};
</script>

<div class="relative items-center hidden lg:flex">
	<input
		type="text"
		name="search"
		id="search"
		class="border rounded px-12 py-1"
		on:focus={handleFocus}
		on:blur={handleBlur}
	/>
	<label
		for="search"
		class="absolute left-1 flex gap-2 items-center cursor-text {isFocus === true
			? 'hidden'
			: 'flex '} "><Search class="size-5 " /> Search...</label
	>
</div>
