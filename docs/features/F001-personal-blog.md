---
id: F001
doc_kind: feature
status: done
created: 2026-08-31
updated: 2026-08-31
---

# F001: 免费个人博客与作品入口

## Goal

建立一个可公开访问、以技术文章和项目证据为核心的个人网站，使招聘方能快速理解作者的能力，而不增加服务器与域名的初期维护成本。

## Vision Anchor

- 原始请求或来源：用户确认采用 Astro、GitHub Pages 和免费 `github.io` 地址，待作品成熟后再购买并绑定个人域名。
- 用户痛点或工程问题：需要一个简洁、稳定、可持续写作且能证明工程能力的简历入口。
- 期望结果：Markdown 写作推送到 GitHub 后自动构建发布；首页、文章、项目、关于页面可直接使用。
- 非目标或边界：本期不购买域名、不使用服务器、不引入数据库、评论系统、登录或分析脚本。
- Exit Gate 对照来源：本文件的验收标准和当前对话中已确认的免费优先方案。

## Current Status

Done：GitHub Pages 已通过 GitHub Actions 发布，公开入口可访问。

## Links

- `README.md`
- `.github/workflows/deploy.yml`
- https://github.com/TangHui-Best/TangHui-Best.github.io
- [EV-001：免费博客基础站点验证](../evidence/EV-001-blog-foundation.md)

## Acceptance Criteria

- [x] `npm run check` 等效的 Astro 类型检查通过。
- [x] `npm run build` 等效的 Astro 静态构建生成站点。
- [x] Markdown 文章可在列表页和详情页正确呈现，草稿不发布。
- [x] 首页、文章、项目、关于页面在桌面与移动端可读。
- [x] 推送 `main` 时 GitHub Actions 能部署到 GitHub Pages。
- [x] README 说明本地运行、写作和首次部署步骤。

## Patch History

None yet

| Patch | Date | Commit | Symptom | Root Cause | Protection | Status |
| --- | --- | --- | --- | --- | --- | --- |

## Evidence

参见 `docs/evidence/EV-001-blog-foundation.md`。

## Next Step

新增真实文章、项目或联系信息时，遵循 README 的本地预览与推送流程。
