// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://beta.nextftc.dev',
	integrations: [
		starlight({
			title: 'NextFTC',
			logo: {
				light: './src/assets/nextftc-logo-light.png',
				dark: './src/assets/nextftc-logo-dark.png',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NextFTC/NextFTCSuite' },
				{ icon: 'discord', label: 'Discord', href: 'https://nextftc.dev/discord' },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation Guide', slug: 'guides/installation' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
