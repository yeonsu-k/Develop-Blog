import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import type { Project } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'PostSimple'
const layouts = {
  PostSimple,
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) {
    return
  }

  const publishedAt = new Date(project.date).toISOString()
  const modifiedAt = new Date(project.lastmod || project.date).toISOString()
  let imageList = [siteMetadata.socialBanner]
  if (project.images) {
    imageList = typeof project.images === 'string' ? [project.images] : project.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      siteName: siteMetadata.title,
      locale: 'ko_KR',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allProjects))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const project = allProjects.find((p) => p.slug === slug) as Project
  const mainContent = coreContent(project)
  const jsonLd = project.structuredData

  const Layout = layouts[project.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer code={project.body.code} components={components} toc={project.toc} />
      </Layout>
    </>
  )
}
