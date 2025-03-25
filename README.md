# Astro 5 + Tailwind 4 + PostHog + Cloudflare Pages

## Quick Start

There are 2 install options:

### 1. Via CLI
`npm create cloudflare@latest -- my-astro-app --framework=astro --template=lerenos/astro-ph-cf`

When prompted...

_What would you like to start with?_

`> Template from a GitHub repo`

_What's the url of git repo containing the template you'd like to use?_

`lerenos/astro-ph-cf`

_Do you want to deploy your application?_

`> No` (so you can later connect to your GitHub repo)

You can be prompted about logging into Cloudflare and/or Github.

You'll need to connect GitHub to Cloudflare via Dashboard. [Here is a complete tutorial.](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

### 2. Via Github and Cloudflare Dashboard
1. Go to https://github.com/lerenos/astro-ph-cf
2. Click on the "Use this Template" button and configure the name and visibility of your new repo
3. Go to https://dash.cloudflare.com/ > Your Account > + Add (top right of the screen) > Pages
4. Connect to Git
5. Choose the repo
6. Name your project
7. Framework preset: Astro
8. Deploy!
9. Enable Web Analytics at Metrics > Web Analytics (optional)
10. For local development with VSCode, go to the IDE command line and run:

`git clone <your repo address>`

`cd <the folder name>`

`npm i` to install the packages

`npm run dev` to start the development server

## Domain Configuration
1. Configure the Custom domain on the Cloudflare Dashboard (optional)
2. Configure the Site Domain on astro.config.mjs

## Environment variables
SITE_NAME - The site name

PUBLIC_PH_KEY - PostHog Public Key


## Motivation
This is a starter template to meet the following requirements:

- A Marketing Website with Landing Pages
- Being an excellent site to recieve traffic from Google and Meta Ads
- Perfect (or almost) score on Google Lighthouse/Page Speed Insights
- Perfect SEO Metatags and ld+json
- Being able to exapand the website and make a blog with thousands of pages.

To achieve this, we're going to use:

- [Posthog](https://posthog.com/) - for Analytics and Sending Events to Meta and Google Ads - Goodbye to GA4 👋.
- Cloudflare Pages - CF Pages is a CI/CD solution, alternative to Vercel/Netlify
- Cloudflare Zaraz - This is a serverless Edge Service that allows you to add 3rd party scripts to your website, thus substituting the need of using Google Tag Manager (or the expensive sGTM solution). If PostHog works good to send data to Meta and GAds, we're not going to need this for now (but it is cool to have this option on the table). 

## Other Important Techs Here
- [Astro](https://astro.build/) - The framework used to build the website (Not a JS framework, like react or Vue, but a Site Generator framework).
- [TailwindCSS](https://tailwindcss.com/) - For styling
- [DaisyUI](https://daisyui.com/) - A Tailwind Component Library

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

