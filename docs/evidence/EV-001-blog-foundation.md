---
id: EV-001
doc_kind: evidence
scope: project
feature_refs: [docs/features/F001-personal-blog.md]
created: 2026-09-01
---

# EV-001: 免费博客基础站点验证

## Scope

验证 F001 的本地静态站点实现：内容集合、草稿过滤、页面路由、响应式首页和 GitHub Pages 构建工作流文件。未验证真实 GitHub 仓库推送和云端部署。

## Commands

```text
npm ci --loglevel=error
<bundled-node> node_modules/astro/astro.js check
<bundled-node> node_modules/astro/astro.js build
```

## Results

Pass：Astro 类型检查结果为 0 errors、0 warnings、0 hints；静态构建成功生成 6 个页面；检查确认 `dist/writing/index.html` 不包含 `draft-template`。

Pass：本地浏览器验证首页导航可进入 `/writing`，文章详情 URL 为 `/writing/starting-here`；390px 宽视口没有横向溢出，首页标题、导航与文章列表可读。

Pass：初始版本已推送至 `https://github.com/TangHui-Best/TangHui-Best.github.io`，GitHub Pages 已发布。2026-09-01 通过公网请求验证 `https://tanghui-best.github.io/` 返回 HTTP 200，页面标题为 `Tang Hui`。

## AgentMentor Validation

已执行 `knowledge_check.py --root E:\Self-Project\Blog --docs-path docs --strict`，最终结果为 2 个知识工件、0 errors、0 warnings。

## Artifacts

- `dist/index.html`
- `dist/writing/index.html`
- `dist/writing/starting-here/index.html`
- `.github/workflows/deploy.yml`

## Notes

项目声明 Node 22 LTS 运行时，并在 GitHub Actions 中固定使用 Node 22。当前本地默认 Node 运行器与 Astro 构建的交互不稳定，验证使用桌面环境提供的 Node 24.19.0 完成；真实 Node 22 云端工作流仍待首次推送后确认。

查询公开 GitHub Actions API 时曾遇到匿名 API 速率限制，未将其当作工作流失败；最终以用户确认和公网 HTTP 200 验证作为部署证据。
