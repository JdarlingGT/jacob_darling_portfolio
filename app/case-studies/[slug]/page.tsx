import React from "react"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import Image from "next/image"

interface CaseStudy {
  slug: string
  title: string
  description: string
  heroImage: string
  badges: string[]
  results: string[]
  content: string
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'case-studies', `${slug}.json`)
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content) as CaseStudy
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const caseStudiesDir = path.join(process.cwd(), 'content', 'case-studies')
  const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.json'))
  
  return files.map(file => ({
    slug: file.replace('.json', ''),
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = await getCaseStudy(slug)
  
  if (!study) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
      <p className="text-xl text-muted-foreground mb-8">{study.description}</p>
      
      <div className="mb-8">
        <Image
          src={study.heroImage}
          alt={study.title}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {study.badges.map((badge) => (
          <span key={badge} className="badge">{badge}</span>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <ul className="mb-8">
        {study.results.map((result, index) => (
          <li key={index} className="mb-2">• {result}</li>
        ))}
      </ul>
      
      <div className="prose prose-invert max-w-none">
        <p>{study.content}</p>
      </div>
    </div>
  )
}
