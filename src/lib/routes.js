import {
	Home,
	BrainCog,
	PieChart,
	Layers,
	Rocket,
	CalendarDays,
	Bolt,
	ShieldQuestion,
	BadgeCheck,
	HandCoins
} from 'lucide-svelte';

export const routes = [
	{
		name: 'Home',
		path: '/home',
		Icon: Home,
		dropdown: false
	},
	{
		name: 'AI Playground',
		path: '/',
		Icon: BrainCog,
		dropdown: false
	},
	{
		name: 'Analytics',
		path: '/analytics',
		Icon: PieChart,
		dropdown: false
	},
	{
		name: 'My Assets',
		path: '/myassets',
		Icon: Layers,
		dropdown: true
	},
	{
		name: 'Autopilot',
		path: '/autopilot',
		Icon: Rocket,
		dropdown: false
	},
	{
		name: 'Calendar',
		path: '/calendar',
		Icon: CalendarDays,
		dropdown: false
	},
	{
		name: 'Settings',
		path: '/settings',
		Icon: Bolt,
		dropdown: false
	}
];

export const faqs = [
	{
		name: 'Help',
		path: '/help',
		Icon: ShieldQuestion,
		dropdown: false
	},
	{
		name: 'Feedback',
		path: '/feedback',
		Icon: BadgeCheck,
		dropdown: false
	},
	{
		name: 'Refer & Earn',
		path: '/earn',
		Icon: HandCoins,
		dropdown: false
	}
];
