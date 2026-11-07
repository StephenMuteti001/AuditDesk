import { useEffect } from 'react';

type SeoOptions = {
	title: string;
	description: string;
	path: string;
	keywords?: string;
	image?: string;
	jsonLd?: unknown;
};

const JSON_LD_ID = 'auditdesk-jsonld';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
	let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement('meta');
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
	let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
	if (!el) {
		el = document.createElement('link');
		el.setAttribute('rel', 'canonical');
		document.head.appendChild(el);
	}
	el.setAttribute('href', href);
}

/**
 * Applies per-route metadata, Open Graph / Twitter cards and optional JSON-LD.
 * The SPA has static fallbacks in index.html for crawlers that do not execute JS.
 */
export function useSEO({ title, description, path, keywords, image = '/og-image.jpeg', jsonLd }: SeoOptions) {
	useEffect(() => {
		const origin = typeof window === 'undefined' ? '' : window.location.origin;
		const url = `${origin}${path}`;

		document.title = title;
		upsertMeta('name', 'description', description);
		if (keywords) upsertMeta('name', 'keywords', keywords);

		upsertMeta('property', 'og:title', title);
		upsertMeta('property', 'og:description', description);
		upsertMeta('property', 'og:type', 'website');
		upsertMeta('property', 'og:url', url);
		upsertMeta('property', 'og:image', image);
		upsertMeta('name', 'twitter:card', 'summary_large_image');
		upsertMeta('name', 'twitter:title', title);
		upsertMeta('name', 'twitter:description', description);
		upsertMeta('name', 'twitter:image', image);
		upsertCanonical(url);

		document.getElementById(JSON_LD_ID)?.remove();
		if (jsonLd) {
			const script = document.createElement('script');
			script.id = JSON_LD_ID;
			script.type = 'application/ld+json';
			script.textContent = JSON.stringify(jsonLd);
			document.head.appendChild(script);
		}

		return () => {
			document.getElementById(JSON_LD_ID)?.remove();
		};
	}, [title, description, path, keywords, image, jsonLd]);
}
