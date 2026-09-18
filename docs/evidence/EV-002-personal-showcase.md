---
id: EV-002
doc_kind: evidence
feature_refs: [docs/features/F002-personal-showcase.md]
scope: personal-showcase
created: 2026-09-18
---

# EV-002: 个人橱窗升级验证

## Supports Claim

F002 的首页、项目、关于与 Now 页面已在现有 Astro 静态站点中实现，且保留原有写作路径与 GitHub Pages 发布方式。

## Verification Scope

- 首页的信息层级，以及“阅读文章 / 查看项目”双入口。
- 项目页的公开仓库链接与外部链接属性。
- Now 页面和主导航。
- 子页面的返回首页路径，以及文章详情的返回文章列表路径。
- 390px 宽度下的首页可读性。
- Astro 静态类型检查。

## Commands

```text
<bundled-node> node_modules/astro/astro.js check
<bundled-node> node_modules/astro/astro.js build
浏览器：本地首页、/projects、/now；390 × 844 首页视口
```

## Results

- Pass：Astro 检查覆盖 14 个文件，结果为 0 errors、0 warnings、0 hints。
- Pass：静态构建输出包含首页、`/projects`、`/now` 和既有 `/writing` 页面。
- Pass：浏览器实测首页保留“阅读文章 / 查看项目”双入口，主导航可进入项目和 Now 页面；项目页展示 AgentMentor，并包含指向公开 GitHub 仓库的 `target="_blank"` 链接。
- Pass：390 × 844 视口下，首页导航、标题、行动按钮和关注方向区均可读，未观察到横向溢出。
- Pass：浏览器实测项目页有「← 首页」并指向首页；文章详情有「← 文章列表」并指向写作列表。写作、Now、关于页面使用同一返回首页模式。

## Artifacts

- `src/pages/index.astro`
- `src/pages/projects.astro`
- `src/pages/about.astro`
- `src/pages/now.astro`
- `src/styles/global.css`
- `dist/index.html`
- `dist/projects/index.html`
- `dist/now/index.html`

## Notes

- 公开信息仅覆盖用户提供的在职背景、技能方向和一个项目；后续应在新增可公开案例后补充项目页。
- 本证据验证本地站点。2026-09-18 尝试 `git push origin main` 时连接持续卡住，尚未能确认 GitHub Actions 与公网页面更新。
