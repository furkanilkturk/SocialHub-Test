<script>
	import { Download, Trash2, Forward } from 'lucide-svelte';

	export let documentName;
	export let date;
</script>

<div class="bg-white lg:rounded-t-lg border-b mx-2 pb-2 lg:mx-0">
	<div class="header flex flex-row justify-between p-2 lg:px-4 items-center">
		<h4 class="font-semibold text-base">{documentName}-{date}</h4>

		<!-- header buttons -->
		<div class="flex gap-2 lg:gap-4 items-center">
			<div class="flex items-center justify-center">
				<Download />
			</div>
			<div class="flex items-center justify-center">
				<Trash2 />
			</div>
			<div class="bg-greenButton text-white rounded-md p-1">
				<div class="flex gap-2 justify-center items-center lg:px-2 lg:py-1">
					<Forward />
				</div>
			</div>
		</div>
	</div>
</div>
