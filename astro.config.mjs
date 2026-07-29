// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
    site: 'https://beta.nextftc.dev',
    integrations: [
       starlight({
          title: 'NextFTC',
          head: [
             {
                //Look at /public/scripts/external-links thats where the thing happens
                tag: 'script',
                attrs: {
                   src: '/scripts/external-links.js',
                },
             },
          ],
          logo: {
             light: './src/assets/nextftc-banner-light.png',
             dark: './src/assets/nextftc-banner-dark.png',
             replacesTitle: true,
          },
          favicon: '/favicon.svg',
          customCss: ['./src/styles/custom.css'],
          social: [
             { icon: 'github', label: 'GitHub', href: 'https://github.com/NextFTC/NextFTCSuite' },
             { icon: 'discord', label: 'Discord', href: 'https://nextftc.dev/discord' },
          ],
          plugins: [
             starlightSidebarTopics([
                {
                   label: 'Introduction',
                   link: '/introduction/',
                   icon: 'rocket',
                   items: [{ autogenerate: { directory: 'introduction' } }],
                },
                {
                   label: 'Your First Robot',
                   link: '/your-first-robot/',
                   icon: 'star',
                   items: [{ autogenerate: { directory: 'your-first-robot' } }],
                },
                {
                   label: 'Robot Module',
                   link: '/robot/',
                   icon: 'puzzle',
                   items: [{ autogenerate: { directory: 'robot' } }],
                },
                {
                   label: 'Hardware Module',
                   link: '/hardware/',
                   icon: 'setting',
                   items: [
                      {
                         label: 'Actuators',
                         items: [{ autogenerate: { directory: 'hardware/actuators' } }],
                      },
                      {
                         label: 'Sensors',
                         items: [{ autogenerate: { directory: 'hardware/sensors' } }],
                      },
                      {
                         label: 'Miscellaneous',
                         items: [{ autogenerate: { directory: 'hardware/miscellaneous' } }],
                      },
                   ],
                },
                {
                   label: 'Control Module',
                   link: '/control/',
                   icon: 'document',
                   items: [{ autogenerate: { directory: 'control' } }],
                },
             ]),
             starlightThemeGalaxy(),
             starlightLinksValidator(),
          ]
       }),
    ],
});