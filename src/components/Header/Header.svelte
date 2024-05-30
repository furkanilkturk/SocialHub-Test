<script>
	import { X } from 'lucide-svelte';
	import { Download } from 'lucide-svelte';
	import { Plus } from 'lucide-svelte';
</script>

<div class="bg-white rounded-t-md lg:bg-transparent mx-2 px-2 lg:mx-3">
	<div class="header flex flex-row justify-between p-2 items-center">
		<h3 class="font-semibold text-lg">AI Playground</h3>

		<!-- header buttons -->
		<div class="flex gap-2 lg:gap-4 items-center">
			<div class="flex items-center justify-center">
				<X />
				<span class="hidden lg:flex">Close All</span>
			</div>
			<div class="border rounded p-0.5">
				<div class="flex gap-2 items-center justify-center lg:px-2 lg:py-1">
					<Download class="lg:w-5" />
					<span class="hidden lg:flex">Save All</span>
				</div>
			</div>
			<div class="bg-greenButton text-white rounded-md p-1">
				<div class="flex gap-2 justify-center items-center lg:px-2 lg:py-1">
					<Plus />
					<span class="hidden lg:flex pb-1">New Document</span>
				</div>
			</div>
		</div>
	</div>
</div>
