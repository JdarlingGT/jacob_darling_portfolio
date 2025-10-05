import React from "react"
import Link from "next/link"
import fs from "fs"
import path from "path"

interface CaseStudy {
  slug: string
  title: string
  description: string
  heroImage: string
  badges: string[]
  results: string[]
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  const caseStudiesDir = path.join(process.cwd(), 'content', 'case-studies')
  const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.json'))

  const caseStudies = files.map(file => {
    const filePath = path.join(caseStudiesDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content) as CaseStudy
  })

  return caseStudies
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`}>
            <div className="glass p-6 hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
              <p className="text-muted-foreground mb-4">{study.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.badges.map((badge) => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
              <ul className="text-sm text-muted-foreground">
                {study.results.map((result, index) => (
                  <li key={index}>• {result}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
