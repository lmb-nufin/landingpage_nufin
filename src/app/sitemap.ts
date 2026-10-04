import type { MetadataRoute } from 'next';

const BASE = 'https://nufin.com.mx';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/aviso-de-privacidad`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terminos-y-condiciones`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/derechos-arco`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
