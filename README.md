# Code & Growth

실제 적용한 개발 내용을 기록하는 개인 블로그입니다.

**URL**: https://develop-blog-ten.vercel.app

## 기술 스택

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Contentlayer2** (MDX 콘텐츠 관리)
- **TypeScript**
- **Pliny** (분석, 검색, 댓글)

## 주요 기능

- MDX 기반 블로그 포스팅
- 다크모드 / 라이트모드 / 시스템 테마
- kbar 검색
- Giscus 댓글
- Umami Analytics
- RSS 피드, 사이트맵, SEO

## 시작하기

```bash
# 의존성 설치
yarn

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn serve

# 린트
yarn lint
```

## 프로젝트 구조

```
app/          - Next.js 페이지 및 API
components/   - React 컴포넌트
layouts/      - 포스트/페이지 레이아웃
data/
  blog/       - MDX 블로그 글
  authors/    - 저자 정보
  siteMetadata.js - 사이트 설정
public/static/ - 이미지, 파비콘, 폰트
css/          - Tailwind CSS 설정
```

## 블로그 글 작성

`data/blog/` 디렉토리에 MDX 파일을 생성합니다:

```yaml
---
title: '글 제목'
date: '2025-01-01'
tags: ['태그1', '태그2']
draft: false
summary: '글 요약'
---
```

## 배포

Vercel에서 자동 배포됩니다.

## 기반 템플릿

[Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) v2.4.0 기반

## 라이선스

[MIT](LICENSE) © [Timothy Lin](https://www.timlrx.com)
