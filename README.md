# Tang Hui 的个人博客

一个以 Markdown 写作、Astro 构建、GitHub Pages 免费部署的个人网站。它目前使用 `https://<GitHub 用户名>.github.io`，在作品成熟后再绑定自定义域名。

## 本地运行

请使用 Node.js 22 LTS。

```bash
npm install
npm run dev
```

访问终端显示的本地地址。发布前运行：

```bash
npm run check
npm run build
```

## 发布到 GitHub Pages

1. 新建公开仓库，名称必须是 `<你的 GitHub 用户名>.github.io`。
2. 将本项目推送到 `main` 分支。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。
4. 工作流会在每次推送 `main` 后自动构建并发布。

## 写文章

在 `src/content/blog/` 新建一个 `.md` 文件。文件头需要包含：

```md
---
title: "文章标题"
description: "一句明确说明读者能获得什么。"
pubDate: 2026-08-31
tags: ["工程实践"]
draft: false
---
```

`draft: true` 的文章不会显示或发布。

### 系列文章

首页的「Claude Code 源码解剖」卡片是一个自动聚合的系列：只要文章的 `tags` 里带 `Claude Code`，它就会进入系列，并按发布时间自动获得 `01`、`02`…… 编号。系列的显示名称在 `src/config.ts` 的 `series` 里改。新增后续篇目不需要动任何页面代码。

## 视觉与字体

设计规范见 `DESIGN.md`。等宽字体 IBM Plex Mono 已自托管在 `public/fonts/`（仅拉丁子集，4 个字重共 64KB），不要改成 Google Fonts 之类的远程引用——国内访问不稳定，也会让首屏多一次外部请求。

## 发布前替换

编辑 `src/config.ts` 中的 GitHub 链接和邮箱。留空的字段不会显示在页面上。
