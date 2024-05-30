<script>
	import { AlignJustify as HamburgerMenu } from 'lucide-svelte';
	import { Search } from 'lucide-svelte';
	import { Bell } from 'lucide-svelte';
	import { Bot } from 'lucide-svelte';

	import DropdownMenu from '../DropdownMenu.svelte';
	import ThemeButtons from './ThemeButtons.svelte';
	import Language from './Language.svelte';
	import Input from './Input.svelte';
	import UserProfile from './UserProfile.svelte';
</script>

<nav class="rounded-b-xl lg:rounded-none border-b pb-2 lg:pb-0 bg-white lg:px-4">
	<div class="flex justify-between p-2">
		<div class="flex items-center gap-4">
			<HamburgerMenu />
			<DropdownMenu
				style="hidden lg:flex  bg-dropdown p-2 w-32 h-9 flex justify-between items-center rounded-md text-white"
			>
				<Bot />
				<p class="text-xs">AI Button</p>
			</DropdownMenu>
			<div class="pl-12 border-l">
				<Input />
			</div>
		</div>
		<div class="gap-7 hidden lg:flex items-center">
			<ThemeButtons />
			<Bell />
			<Language />
			<UserProfile />
		</div>
		<!--Mobile Logo-->
		<h1 class="font-semibold flex lg:hidden">SocialHub</h1>
		<!-- mobile search and notification buttons -->
		<div class="flex gap-2 lg:hidden">
			<Search />
			<Bell />
		</div>
	</div>
	<div class="flex pt-2 justify-between px-2 lg:hidden">
		<!-- dropdown menu -->
		<DropdownMenu
			style=" lg:hidden bg-dropdown p-2 w-28 h-9 flex justify-between items-center rounded-md text-white"
			><Bot />
			<p class="text-xs">AI Button</p></DropdownMenu
		>

		<!-- buttons -->
		<div class="flex gap-6">
			<ThemeButtons />
			<Language />
		</div>
	</div>
</nav>
