<script>
	import { ChevronDown } from 'lucide-svelte';

	export let style;
</script>

<div class={style}>
	<slot />
	<ChevronDown class="w-5 " />
</div>
