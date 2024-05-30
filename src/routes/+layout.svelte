<script>
	import '../app.css';

	import Navbar from '../components/Navbar/Navbar.svelte';
	import Header from '../components/Header/Header.svelte';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	import Contents from '../components/Content/Contents.svelte';
	import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar.svelte';
</script>

<div class="flex bg-slate-100">
	<Sidebar />
	<div class="w-full">
		<Navbar />
		<div class="pt-3 lg:pt-0 flex">
			<SocialMediaBar />
			<div>
				<Header />
				<Contents />
			</div>
		</div>
	</div>
</div>
