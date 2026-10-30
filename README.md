# charli-jo.com

The professional site of Charli-Jo Tyrer: Universal Digital Involvement (the principle), Agent-First Accessible Service Design (the method) and Zero Information Casualty (the standard).

The site is built to Zero Information Casualty v1.7: static HTML, no JavaScript, with an agent surface (llms.txt, llms-full.txt and a Markdown mirror of every page) generated from the same pages at build time.

## Build

Needs Node 18 or later and pandoc.

```
node build.mjs
```

The finished site is written to `site/`.

## Where things live

- `src/home.html` and `src/accessibility.html`: the home page and accessibility statement, written by hand.
- `src/*.docx`: the Principle and Method source documents. Those pages are generated from them, so to update a page, replace its Word document and rebuild.
- `src/standard.html`: a short summary of ZIC. The full specification lives at https://zeroinformationcasualty.org/ and is not copied here.
- `src/styles.css`: the one stylesheet.
- `build.mjs`: the build, including robots.txt, sitemap.xml and the agent surface. The search and training declarations are the `SEARCH` and `TRAINING` settings near the top.
- `wrangler.jsonc`: Cloudflare Workers deployment. Cloudflare serves the `site/` folder as it is in the repo, so run the build and commit `site/` before pushing.

## Licence

Content is licensed under CC BY-SA 4.0.
