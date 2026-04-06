# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with the **Tailwind Next.js Starter Blog** template. It's a feature-rich Next.js application using:

- **Next.js 15** with App Router
- **Contentlayer** for MDX content management
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Pliny** library for analytics, search, and comments

## Key Commands

```bash
# Development
yarn start                  # Start yarn dev
yarn dev                    # Start development server
yarn build                  # Build for production (includes RSS generation)
yarn serve                  # Start production server
yarn lint                   # Run ESLint with auto-fix

# Analysis
yarn analyze                # Bundle analysis with ANALYZE=true
```

## Architecture

### Content Management

- **Blog posts**: Stored in `data/blog/` as MDX files
- **Authors**: Stored in `data/authors/` as MDX files
- **Contentlayer**: Processes MDX files and generates typed content objects
- **Frontmatter**: Follows Hugo standards (title, date, tags, summary, etc.)

### Key Directories

- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components
- `layouts/` - Post and page layout templates
- `data/` - Content files (blog posts, authors, site config)
- `public/static/` - Static assets (images, favicons)

### Styling System

- **Primary color**: Custom "Toss Blue" (#0064ff) defined in `tailwind.config.js`
- **Typography**: Uses Inter font via `next/font/google`
- **Dark mode**: Supported via `next-themes`

### Content Processing

- **MDX plugins**: Math (KaTeX), syntax highlighting (Prism), citations
- **Computed fields**: Reading time, table of contents, structured data
- **Search index**: Auto-generated for kbar search

## Site Configuration

The main site configuration is in `data/siteMetadata.js`:

- Site title, description, and URLs
- Author information and social links
- Analytics (Umami), comments (Giscus)
- Search provider configuration

## Security

- Content Security Policy configured in `next.config.js`
- Security headers applied globally
- Restricted domains for external resources

## Development Notes

- Content is Korean-focused (`ko-kr` language, `ko-KR` locale)
- Uses Yarn as package manager
- Lint-staged and Husky configured for pre-commit hooks
- Bundle analysis available via `ANALYZE=true yarn build`

## Content Creation

Blog posts should be created in `data/blog/` with proper frontmatter:

```yaml
---
title: 'Post Title'
date: '2023-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: 'Brief description'
---
```

## 현재 진행 중인 작업: MCP 서비스별 블로그 글 작성

MCP 시리즈 블로그 글을 서비스별로 개별 작성하는 작업입니다. 각 채팅 세션에서 1개씩 담당합니다.

### 데이터 소스

각 서비스의 노션 페이지에서 콘텐츠를 읽어와서 블로그 글로 변환합니다.
노션 MCP 도구(`notion_retrieve_block_children`)로 해당 페이지 ID의 하위 블록을 읽어 콘텐츠를 파악하세요.

### 작성 완료

| 서비스 | 파일명 | 노션 페이지 ID | 상태 |
|--------|--------|---------------|------|
| Notion | `data/blog/mcp-server-notion.mdx` | - | ✅ 완료 |
| Context7 | `data/blog/mcp-server-context7.mdx` | - | ✅ 완료 |
| Figma | `data/blog/mcp-server-figma.mdx` | `205c2d42-0326-80e6-9183-e68feb97abda` | ✅ 완료 |
| GitHub | `data/blog/mcp-server-github.mdx` | `20dc2d42-0326-813f-a74a-e61d57125c9b` | ✅ 완료 |
| Filesystem | `data/blog/mcp-server-filesystem.mdx` | `20ec2d42-0326-819b-84ae-f16e1fc14262` | ✅ 완료 |
| Sequential-thinking | `data/blog/mcp-server-sequential-thinking.mdx` | `20ec2d42-0326-8164-8743-e5bb3b4f20e7` | ✅ 완료 |
| Memory | `data/blog/mcp-server-memory.mdx` | `20fc2d42-0326-8096-b9d1-f0e40988e185` | ✅ 완료 |
| Playwright | `data/blog/mcp-server-playwright.mdx` | `20ec2d42-0326-8066-b2a2-fdc26a867cbf` | ✅ 완료 |

### 작성 규칙

1. **노션 콘텐츠 읽기**: 노션 MCP로 해당 페이지 ID의 하위 블록을 읽어 콘텐츠를 파악
2. **스타일 참고**: `data/blog/mcp-server-notion.mdx` 파일의 톤과 구조를 참고
3. **언어**: 한국어, 존댓말 사용
4. **파일 위치**: `data/blog/` 디렉토리에 직접 생성 (worktree 사용하지 않음)

### Frontmatter 템플릿

```yaml
---
title: 'MCP 서버 연결 가이드 - {서비스명}'
date: '{위 표의 date 값}'
tags: ['AI', 'MCP', 'Claude', '{서비스 태그}']
draft: false
summary: '{1줄 요약}'
images: []
authors: ['default']
---
```

### 본문 구조

```
[인트로] - 이 서비스가 무엇이고 왜 MCP로 연결했는지 (2~3문장)
---
## ⚙️ 설정 방법 (또는 설치 및 설정)
## 🛠️ 주요 기능
## 💻 사용 경험 (또는 실제 활용 사례)
---
## 📚 참고 자료
```

- 이모지 헤딩 사용
- `<b>` 태그로 핵심 키워드 강조
- `---` 구분선으로 섹션 구분
- 코드 블록에 언어 태그 (json, bash 등)
- 작성 후 커밋하지 않음 (사용자가 직접 확인 후 커밋)
