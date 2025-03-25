import { sequence, defineMiddleware } from "astro:middleware";

const PH_API_HOST = "https://us.i.posthog.com"; // Change to "eu.i.posthog.com" for the EU region
const PH_ASSET_HOST = "https://us-assets.i.posthog.com"; // Change to "eu-assets.i.posthog.com" for the EU region

const rewrites = defineMiddleware((context, next) => {
  const url = new URL(context.url);

  if (url.pathname.startsWith('/ingest/static/')) {
    let rewrittenUrl = new URL(url);
    rewrittenUrl.host = PH_ASSET_HOST;
    rewrittenUrl.port = '';
    rewrittenUrl.pathname = rewrittenUrl.pathname.replace('/ingest/static/', '/static/');
    return next(rewrittenUrl);
  }

  if (url.pathname.startsWith('/ingest/')) {
    let rewrittenUrl = new URL(url);
    rewrittenUrl.host = PH_API_HOST;
    rewrittenUrl.port = '';
    rewrittenUrl.pathname = rewrittenUrl.pathname.replace('/ingest/', '/');
    return next(rewrittenUrl);
  }

  return next();
});

export const onRequest = sequence(rewrites);
