import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com' // TODO: Replace with your actual domain
  
  // Comprehensive sitemap with all pages and proper SEO priorities
  const pages = [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },

    // Service pages with high SEO value
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/services/seo-optimization`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.87,
    },
    {
      url: `${baseUrl}/services/cloud-devops`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.86,
    },
    {
      url: `${baseUrl}/services/ai-ml-solutions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.84,
    },
    {
      url: `${baseUrl}/services/branding-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/services/e-commerce-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.89,
    },
    {
      url: `${baseUrl}/services/social-media-management`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.83,
    },

    // Blog posts - Add your actual blog posts here
    {
      url: `${baseUrl}/blog/web-development-trends-2025`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ui-ux-design-best-practices`,
      lastModified: new Date('2024-11-28'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/seo-optimization-guide-2025`,
      lastModified: new Date('2024-11-25'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/mobile-app-development-guide`,
      lastModified: new Date('2024-11-22'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/digital-marketing-strategies`,
      lastModified: new Date('2024-11-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },

    // Blog categories
    {
      url: `${baseUrl}/blog/category/web-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/category/mobile-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/category/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/category/seo-optimization`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/category/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },

    // Future project pages (ready for when you add them)
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
  ]
  
  return pages
}