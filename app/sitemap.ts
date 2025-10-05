import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'

  const caseStudiesDir = path.join(process.cwd(), 'content', 'case-studies')
  const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.json'))

  const caseStudyUrls = files.map(file => ({
    url: `${baseUrl}/case-studies/${file.replace('.json', '')}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
    },
    ...caseStudyUrls,
  ]
}
