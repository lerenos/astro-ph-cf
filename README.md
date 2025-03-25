# Astro 5 + Tailwind 4 + PostHog + Cloudflare Pages

## Motivation
This is a starter template to meet the following requitements:

- A Marketing Website with Landing Pages
- To run Ads on Google and Meta
- Perfect (or almost) score on Google Lighthouse
- Perfect SEO Metatags and ld+json
- Ability to make a blog, in a second moment.

To achieve this, we will use:

- Posthog - for Analytics and Sending Events to Meta and Google Ads - Goodbye to GA4 👋.
- Cloudflare Pages - CF Pages is a CI/CD solution, alternative to Vercel/Netlify
- Cloudflare Zaraz - This is a serverless Edge Service that allows you to add 3rd party scripts to your website, thus substituting the need of using Google Tag Manager (or the expensive sGTM solution). If PostHog works good to send data to Meta and GAds, we're not going to need this for now (but it is cool to have this option on the table). 

## Other Important Techs Here
- Astro - The framework used to build the website (Not a JS framework, like react or Vue, but a Site Generator framework).
- TailwindCSS - For styling
- DaisyUI - A Tailwind Component Library

## Remarkable plugins
- notion-astro-loader - Notion loader for the Astro Content Layer
- Playform Inline - inlines your app's critical CSS and lazy-loads the rest.

## Pricing
PostHog is free until 1 million events per month.
Same for Cloudflare Zaraz.
Cloudflare Pages has an even crazier free tier - the only limitations are: 1 build at a time, 500 builds per month and 100 custom domains per project.

So... well, budget is definitely not an issue here, as it is going to be free for most users. Even when you grow, the price is the most competitive.

## Client-side Iteractivity Frameworks
Sometimes you just don't need it! 

A no-framework approach, for example, is to use the [Web Components Standard.](https://docs.astro.build/en/guides/client-side-scripts/#web-components-with-custom-elements)

For sharing state between components, [Astro's Nano stores](https://docs.astro.build/en/recipes/sharing-state-islands/#why-nano-stores) is a good solution.

When things get a little more complex, I like to use Vue or Alpine.

But if you're more a React person, of course you can use this template, but I would advise you to also check other interesting solutions before starting here:
- [Fresh/Deno](https://fresh.deno.dev/)
- Next.js/Vercel
- ~stop using react~

If you're going to add some framework integration, always watch the size of the bundle these things add to your cleint-side result, so it doesn't hurt the performance. (React is notorious for this downside.)

## Tailwind Component Libraries
Why reinvent the wheel?

### No installation (just copy and paste to create your own)
- [Meraki UI](https://merakiui.com/components#marketing)
- [Sailboat](https://sailboatui.com/) - Uses semantic colors (primary and secondary), uses alpine for some components.
- [HyperUI](https://www.hyperui.dev/)
- [Tail-kit](https://www.tailwind-kit.com/components#pagesection) - has an interesting live editor
- [Tailkit Free](https://tailkit.com/free-tailwind-components) - yes, it is different from the one above, but almost the same name.

### Requires Installation
- [DaisyUI](https://daisyui.com/) - has several themes (nice) and components. It is already installed here.
- [Preline](https://preline.co/)

### Paid
- [Tailwind UI](https://tailwindui.com/) - The official UI kit.

### Very Interesting: This is an online editor for Tailwind, with many components and layouts
- [Windframe](https://windframe.devwares.com/)

## Dark Mode

You can manipulate it by calling these js functions:

- setLightMode()
- setDarkMode()
- respectOSPreference()

You can see the logic at `src/layouts/scripts/darkMode.astro`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



## Manual Setup

It is not meant to be used, but I'll keep here just as a reference for how things started.

### 1. Install Packages

```sh
npm create cloudflare@latest -- choose-your-dir-name --framework=astro

npx astro add mdx
npx astro add sitemap
npm i notion-astro-loader

npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@beta

```
### 2. Project Customizations
After this initial commands, I made some customizations in...

- tsconfig.json (set the "@/*" import alias, etc)
- Created the Head component with many SEO metatags
- Tailwind: modifications in base.css, such as the DaisyUI installation and dark theme configuration. 
- Middleware for Posthog reverse proxy
- Head Scripts: Posthog, Dark Mode, Forward Query Strings

## Cool Resources

### Colors
- [Better dynamic themes in Tailwind with OKLCH color magic](https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic)
- [Tailwind Color Converter](https://divmagic.com/tools/color-converter)
- [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)
- [Tailwind Color Pallete - A really nice class picker](https://tailkit.com/tools/tailwind-color-palette)
- [Tailwind Color Pallete - Official Docs](https://tailwindcss.com/docs/customizing-colors)