import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webboostpartner.nl';
  const currentDate = new Date();

  const routes = [
    '',
    '/website-laten-maken-rotterdam',
    '/nextjs-website-rotterdam',
    '/nextjs-developer-rotterdam',
    '/seo-rotterdam',
    '/nextjs-vs-wordpress',
    '/wordpress-naar-nextjs',
    '/core-web-vitals',
    '/nextjs-specialist',
    '/pakketten',
    '/over-mij',
    '/contact',
    '/demo',
    '/pagespeed',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
