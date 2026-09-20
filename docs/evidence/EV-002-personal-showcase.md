---
id: EV-002
doc_kind: evidence
feature_refs: [docs/features/F002-personal-showcase.md]
scope: personal-showcase
created: 2026-09-18
---

# EV-002: 个人橱窗升级验证

## Supports Claim

F002 的首页、项目、写作与 About Me 页面已在现有 Astro 静态站点中实现，About Me 同时承载个人介绍与当前关注，并保留原有写作路径与 GitHub Pages 发布方式。

## Verification Scope

- 首页的信息层级，以及“阅读文章 / 查看项目”双入口。
- 项目页的公开仓库链接与外部链接属性。
- About Me 与主导航。
- 子页面的返回首页路径，以及文章详情的返回文章列表路径。
- 390px 宽度下的首页可读性。
- Astro 静态类型检查。

## Commands

```text
<bundled-node> node_modules/astro/astro.js check
<bundled-node> node_modules/astro/astro.js build
浏览器：本地首页、/projects、/about；390 × 844 首页视口
```

## Results

- Pass：Astro 检查覆盖 14 个文件，结果为 0 errors、0 warnings、0 hints。
- Pass：Astro 检查覆盖 13 个文件，结果为 0 errors、0 warnings、0 hints；GitHub Pages 已完成本次构建并发布，公网 About Me 页面可访问。
- Pass：浏览器实测首页保留“阅读文章 / 查看项目”双入口，主导航可进入项目、写作和 About Me；项目页展示 AgentMentor，并包含指向公开 GitHub 仓库的 `target="_blank"` 链接。
- Pass：390 × 844 视口下，首页导航、标题、行动按钮和关注方向区均可读，未观察到横向溢出。
- Pass：浏览器实测项目页有「← 首页」并指向首页；文章详情有「← 文章列表」并指向写作列表。写作与 About Me 页面使用同一返回首页模式。
- Pass：浏览器实测 About Me 同时展示个人介绍、联系方式与三个当前关注主题；本地 `/now` 返回 404，不再保留重复页面。
- Pass：2026-09-19 本地浏览器访问 `/about`，确认新的工程定位、职业表达、Now 与“工作以外”区块均可见，且只保留 GitHub 与邮箱两种联系方式；Astro 检查结果为 0 errors、0 warnings、0 hints。
- Conditional：本机 `astro build` 在 Vite 客户端阶段退出前未生成 `dist/about/index.html`，因此未将其计为本机构建通过；此前同一环境出现过该现象，待 GitHub Pages 云端构建与发布结果作为最终静态构建验证。
- Pass：2026-09-19 本地浏览器访问新版 `/about`，桌面与 390 × 844 视口均可读。页面展示近四年华为 AI / Agent 工程背景、深圳 / 28 岁 / 硕士、三项工程能力和 RPA Agent、Agent Gateway、LiveFlow；联系方式只保留 GitHub 与邮箱。
- Conditional：本机 `astro check` 本次无输出挂起，未将其记为通过；本地 Astro 开发服务器已成功编译并渲染新版页面，待 GitHub Pages 云端构建与公网页面确认作为最终发布验证。
- Pass：提交 `9250b3a` 与 `56ad3d5` 推送后，公网 `https://tanghui-best.github.io/about` 返回 HTTP 200，且页面正文已出现 `Agent Gateway`，确认 GitHub Pages 已完成新版发布。
- Pass：2026-09-20 本地浏览器访问重构后的 `/about`，桌面与 390 × 844 视口均可读、无横向溢出；页面仅渲染 1 张用户授权的职业照、2 条代表系统案例与 3 条工程判断，浏览器控制台无 error / warning。
- Pass：2026-09-20 `npm run build` 完整通过，生成 `dist/about/index.html`；本机构建总耗时约 78 秒，其中 Vite 客户端依赖转换约 72 秒。
- Pass：提交 `423c8c8` 推送后，公网 `https://tanghui-best.github.io/about/` 返回 HTTP 200，且响应中包含“让 AI 进入”、`RPA Agent` 与 `tang-hui-headshot` 资源引用，确认 GitHub Pages 已发布本轮 About Me 改造。
- Pass：2026-09-20 针对 F002.5 本地浏览器复核：桌面页恢复大 `Tang Hui`、深色人物档案面板与横向三列案例档案；390 × 844 视口无横向溢出，页面仅有 1 张职业照、2 条案例，浏览器控制台无 error / warning。
- Pass：2026-09-20 `npm run build` 通过，生成新的 `dist/about/index.html`，构建耗时 45.99 秒。
- Pass：提交 `7bf1779` 推送后，公网 `https://tanghui-best.github.io/about/` 返回 HTTP 200；响应中包含“参与过的系统与问题”、`Tang Hui` 与 `tang-hui-headshot`，且不再包含旧标题“从一个真实问题开始”，确认 GitHub Pages 已发布本轮视觉重构。
- Pass：2026-09-21 本地浏览器复核职业照修正：桌面页以完整比例展示用户授权的职业照，照片不再裁切放大；390 × 844 视口无横向溢出。
- Pass：提交 `a353108` 推送后，公网 `https://tanghui-best.github.io/about/` 返回 HTTP 200；线上 `about` 样式表包含 `object-fit: contain` 与原始照片比例规则，确认 GitHub Pages 已发布职业照修正。

## Artifacts

- `src/pages/index.astro`
- `src/pages/projects.astro`
- `src/pages/about.astro`
- `src/styles/global.css`
- `src/assets/tang-hui-headshot.jpg`
- `dist/index.html`
- `dist/projects/index.html`
- `dist/about/index.html`

## Notes

- 公开信息仅覆盖用户提供的在职背景、技能方向和一个项目；后续应在新增可公开案例后补充项目页。
- 2026-09-18 经 Git Credential Manager 重新认证后，提交 `3fd0aad` 已推送至 `main`；通过公网 `https://tanghui-best.github.io/projects` 确认「← 首页」已可见。
- 提交 `70f8709` 已推送至 `main`；通过公网 `https://tanghui-best.github.io/about` 确认 About Me 与当前关注内容可见，`https://tanghui-best.github.io/now` 返回 HTTP 404。
