import { notFound } from 'next/navigation'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  // TODO: Projects 페이지 준비되면 아래 notFound() 제거
  notFound()

  const projects = allCoreContent(sortPosts(allProjects))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          진행한 프로젝트를 소개합니다
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projects.map((d) => (
            <Card
              key={d.slug}
              title={d.title}
              description={d.summary || ''}
              imgSrc={d.images?.[0]}
              href={`/projects/${d.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
