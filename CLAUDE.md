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
