// Build charli-jo.com: static HTML pages, plus an agent surface
// (llms.txt, llms-full.txt, Markdown mirrors) generated from the same pages.
// Requires Node 18+ and pandoc. Run: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://charli-jo.com';
const SITE = 'Charli-Jo Tyrer';
const OUT = 'site';
const LICENCE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';
const LICENCE_NAME = 'Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)';

// Publisher decisions (ZIC §3.3, §3.6). ai-input is always yes.
const SEARCH = true;
const TRAINING = true;

const docs = {
  principle: 'Universal-Digital-Involvement-v1.1',
  method: 'Agent-First-Accessible-Service-Design-v1.0',
  standard: 'Zero-Information-Casualty-v1.7',
};

const pages = [
  {
    path: '/', nav: 'Home', h1: SITE, title: `Accessible service design for people and their agents — ${SITE}`,
    description: 'Charli-Jo Tyrer designs digital services that everyone can use: directly, with assistive technology, or through an AI agent they choose.',
    llms: 'Who Charli-Jo Tyrer is, what the practice offers, and how to get in touch.',
    body: () => read('src/home.html'), type: 'WebSite',
  },
  {
    path: '/principle/', nav: 'Principle', h1: 'Universal Digital Involvement',
    title: `Universal Digital Involvement — ${SITE}`,
    description: 'Universal Digital Involvement: a proposal that digital services be designed from the outset for all people and the AI agents they authorise.',
    llms: 'The principle: services open to all people and their authorised agents, with five commitments for organisations.',
    byline: 'A proposal by Charli-Jo Tyrer. Version 1.1, October 2026.',
    body: () => fromDoc(docs.principle, 'leading-paras'), download: docs.principle, type: 'WebPage',
  },
  {
    path: '/method/', nav: 'Method', h1: 'Agent-First Accessible Service Design',
    title: `Agent-First Accessible Service Design — ${SITE}`,
    description: 'Agent-First Accessible Service Design: a method that revives systems analysis to build services people can use directly or through AI agents.',
    llms: 'The method: outside-in systems analysis, the Completion Chain, six activities, and building with agents.',
    byline: 'An introduction to the method by Charli-Jo Tyrer. Version 1.0, October 2026.',
    body: () => fromDoc(docs.method, 'leading-paras'), download: docs.method, type: 'WebPage',
  },
  {
    path: '/standard/', nav: 'Standard', h1: 'Zero Information Casualty',
    title: `Zero Information Casualty v1.7 — ${SITE}`,
    description: 'Zero Information Casualty v1.7: a web design specification so that no reader, human, assistive technology or sent agent, loses public meaning.',
    llms: 'The full ZIC v1.7 specification: philosophy, design decisions, technical requirements, validation and conformance.',
    byline: 'A web design specification by C J Tyrer and Claude (Anthropic). Version 1.7, September 2026. Licensed CC BY-SA 4.0.',
    body: () => fromDoc(docs.standard, 'first-heading'), download: docs.standard, type: 'WebPage',
  },
  {
    path: '/accessibility/', nav: 'Accessibility', h1: 'Accessibility statement',
    title: `Accessibility statement — ${SITE}`,
    description: 'How charli-jo.com is built to Zero Information Casualty v1.7, how AI agents are served, and how to report a barrier.',
    llms: 'How this site meets ZIC v1.7, its agent surface, and how to report a barrier.',
    body: () => read('src/accessibility.html'), type: 'WebPage',
  },
];

function read(p) { return readFileSync(p, 'utf8'); }

function fromDoc(name, strip) {
  let html = execFileSync('pandoc', [`src/${name}.docx`, '-t', 'html5', '--wrap=none'], { encoding: 'utf8' });
  if (strip === 'leading-paras') html = html.slice(html.indexOf('<h1'));
  if (strip === 'first-heading') html = html.replace(/^\s*<h1[^>]*>.*?<\/h1>\s*/s, '');
  // The page owns the single h1, so document headings move down one level.
  html = html.replace(/<(\/?)h([1-5])(\b[^>]*)>/g, (_, s, n, rest) => `<${s}h${+n + 1}${rest}>`);
  html = html.replace(/<th(?![^>]*scope)/g, '<th scope="col"');
  return html;
}

const navHtml = (current) => pages.map(p =>
  `<li><a href="${p.path}"${p.path === current ? ' aria-current="page"' : ''}>${p.nav}</a></li>`).join('\n');

function jsonLd(p) {
  const url = ORIGIN + p.path;
  const person = { '@type': 'Person', name: 'Charli-Jo Tyrer', url: ORIGIN + '/', email: 'mailto:hello@charli.io',
    jobTitle: 'Accessible service designer', knowsAbout: ['Accessibility', 'AI agents', 'Systems analysis', 'Service design'] };
  const base = p.type === 'WebSite'
    ? { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE, url, description: p.description, license: LICENCE_URL, author: person, about: person }
    : { '@context': 'https://schema.org', '@type': 'WebPage', name: p.h1, url, description: p.description, license: LICENCE_URL,
        isPartOf: { '@type': 'WebSite', name: SITE, url: ORIGIN + '/' }, author: person };
  return JSON.stringify(base, null, 2).replace(/</g, '\\u003c');
}

function layout(p, main) {
  const url = ORIGIN + p.path;
  const download = p.download
    ? `<p class="download"><a href="/files/${p.download}.docx">Download ${p.h1} as a Word document</a></p>` : '';
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.description}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.description}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE}">
<link rel="stylesheet" href="/styles.css">
<link rel="alternate" type="text/markdown" href="${p.path}index.md" title="Markdown version of this page">
<script type="application/ld+json">
${jsonLd(p)}
</script>
</head>
<body>
<a class="skip" href="#main">Skip to main content</a>
<header>
<p class="site-name"><a href="/">${SITE}</a></p>
<nav aria-label="Main">
<ul>
${navHtml(p.path)}
</ul>
</nav>
</header>
<main id="main" tabindex="-1">
<h1>${p.h1}</h1>
${p.byline ? `<p class="byline">${p.byline}</p>\n` : ''}${download}
${main}
</main>
<footer>
<p>Content on this site is licensed under <a href="${LICENCE_URL}">${LICENCE_NAME}</a>.</p>
<p>This site is built to <a href="/standard/">Zero Information Casualty v1.7</a>. Read the <a href="/accessibility/">accessibility statement</a>. Information for AI agents is at <a href="/llms.txt">llms.txt</a>.</p>
</footer>
</body>
</html>
`;
}

function toMarkdown(html) {
  return execFileSync('pandoc', ['-f', 'html', '-t', 'gfm', '--wrap=none'], { input: html, encoding: 'utf8' });
}

function write(rel, content) {
  const f = join(OUT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, content);
}

// Build
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });
copyFileSync('src/styles.css', join(OUT, 'styles.css'));
for (const d of Object.values(docs)) write(`files/${d}.docx`, readFileSync(`src/${d}.docx`));

const mirrors = [];
for (const p of pages) {
  const main = p.body();
  write(`${p.path}index.html`, layout(p, main));
  const md = `# ${p.h1}\n\n${p.byline ? `*${p.byline}*\n\n` : ''}Canonical page: ${ORIGIN}${p.path}\n\n${toMarkdown(main).trim()}\n`;
  write(`${p.path}index.md`, md);
  mirrors.push(md);
}

const yesNo = b => (b ? 'yes' : 'no');
const allow = b => (b ? 'Allow' : 'Disallow');

write('llms.txt', `# ${SITE}

> Charli-Jo Tyrer designs digital services that everyone can use: directly, with assistive technology, or through an AI agent they choose. This site sets out her principle (Universal Digital Involvement), her method (Agent-First Accessible Service Design) and the standard she builds to (Zero Information Casualty).

Author: Charli-Jo Tyrer (contact: hello@charli.io).
Licence: ${LICENCE_NAME}, ${LICENCE_URL}
Sent-agent guarantee: an AI agent fetching any public page on this site on behalf of a person is welcome, and will be served the same content a person reading the page receives.
Search indexing: ${SEARCH ? 'permitted' : 'not permitted'}. Model training: ${TRAINING ? 'permitted' : 'not permitted'}. These are separate decisions, declared in /robots.txt.
This file, /llms-full.txt and the Markdown mirrors are generated from the site's pages at build time.

## Pages

${pages.map(p => `- [${p.h1}](${ORIGIN}${p.path}): ${p.llms} Markdown: ${ORIGIN}${p.path}index.md`).join('\n')}

## Optional

- [Full text of the site](${ORIGIN}/llms-full.txt): every page in one Markdown file.
`);

write('llms-full.txt', `# ${SITE}: full text\n\nGenerated from the site's pages at build time. Licence: ${LICENCE_NAME}.\n\n` + mirrors.join('\n\n---\n\n'));

write('robots.txt', `# ZIC robots.txt for charli-jo.com (Zero Information Casualty v1.7)

# Mandatory sent-agent service.
# A person asked, and is waiting. These agents are welcome on every public page.
User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Perplexity-User
Allow: /

# Search indexing: publisher decision, search=${yesNo(SEARCH)}.
User-agent: OAI-SearchBot
${allow(SEARCH)}: /

User-agent: Claude-SearchBot
${allow(SEARCH)}: /

User-agent: PerplexityBot
${allow(SEARCH)}: /

# Mixed-use crawlers: Google, Microsoft and Apple's base crawlers are treated as search.
# Google and Apple separate training through Google-Extended and Applebot-Extended, declared below.
# Bingbot has no separate training control; the search declaration governs it.
User-agent: Googlebot
${allow(SEARCH)}: /

User-agent: Bingbot
${allow(SEARCH)}: /

User-agent: Applebot
${allow(SEARCH)}: /

# Model training: a separate publisher decision, ai-train=${yesNo(TRAINING)}.
# This is independent of search, and never affects service to sent agents.
User-agent: GPTBot
${allow(TRAINING)}: /

User-agent: ClaudeBot
${allow(TRAINING)}: /

User-agent: Google-Extended
${allow(TRAINING)}: /

User-agent: Applebot-Extended
${allow(TRAINING)}: /

User-agent: CCBot
${allow(TRAINING)}: /

User-agent: Meta-ExternalAgent
${allow(TRAINING)}: /

User-agent: *
Allow: /

Content-Signal: search=${yesNo(SEARCH)}, ai-input=yes, ai-train=${yesNo(TRAINING)}

Sitemap: ${ORIGIN}/sitemap.xml
`);

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${ORIGIN}${p.path}</loc></url>`).join('\n')}
</urlset>
`);

console.log(`Built ${pages.length} pages into ${OUT}/`);
