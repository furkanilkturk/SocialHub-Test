<script>
	import { routes, faqs } from '$lib/routes.js';
	import NavigationButtons from './NavigationButtons.svelte';
</script>

<div class="hidden lg:flex flex-col gap-8 w-1/6 px-4 bg-white border-r">
	<!-- Logo -->
	<div class="logo pt-2">SocialHub</div>
	<!-- Sidebar Navigations -->
	<div class="flex flex-col gap-2">
		{#each routes as route}
			<NavigationButtons
				name={route.name}
				Icon={route.Icon}
				path={route.path}
				dropdown={route.dropdown}
			/>
		{/each}

		<!-- FAQ area -->
		<div class="border-t px-2">
			<div class="pt-4">
				{#each faqs as faq}
					<NavigationButtons
						name={faq.name}
						Icon={faq.Icon}
						path={faq.path}
						dropdown={faq.dropdown}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
