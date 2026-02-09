import Link from '@/components/Link'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

const RECENT_POSTS_COUNT = 3

export default function NotFound() {
  const recentPosts = allCoreContent(sortPosts(allBlogs)).slice(0, RECENT_POSTS_COUNT)

  return (
    <div className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center">
      <div className="flex flex-col items-start py-14 md:flex-row md:items-center md:justify-center md:space-x-8">
        <h1 className="text-primary-500 text-6xl leading-9 font-extrabold tracking-tight md:border-r-2 md:border-gray-200 md:pr-8 md:text-8xl md:leading-14 md:dark:border-gray-700">
          404
        </h1>
        <div className="mt-6 md:mt-0">
          <p className="text-xl font-bold text-gray-900 md:text-2xl dark:text-gray-100">
            페이지를 찾을 수 없습니다
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Link
            href="/"
            className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 mt-5 inline-block rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors duration-150"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
      {recentPosts.length > 0 && (
        <div className="w-full border-t border-gray-200 pt-12 dark:border-gray-700">
          <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">최신 글</h3>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentPosts.map((post) => (
              <li key={post.slug} className="py-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between"
                >
                  <p className="group-hover:text-primary-500 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {post.title}
                  </p>
                  <time
                    className="ml-4 shrink-0 text-xs text-gray-500 dark:text-gray-400"
                    dateTime={post.date}
                  >
                    {formatDate(post.date, siteMetadata.locale)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
