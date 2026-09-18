---
id: F002
doc_kind: feature
status: in_progress
index_summary: 将既有博客升级为以 AI / Agent 工程实践为主线的个人橱窗，保留写作与 GitHub Pages 发布流程。
created: 2026-09-18
updated: 2026-09-18
---

# F002: 个人橱窗升级

## Goal

让招聘方或潜在合作方在首次访问时，能快速了解 Tang Hui 的当前方向、代表性工程实践、持续写作和公开联系入口，而不牺牲原有博客的阅读体验。

## Vision Anchor

- 原始请求或来源：用户明确希望将个人网站打造为展示“方方面面”的个人橱窗，并确认以科技感、温暖且有个人气质为视觉方向。
- 用户痛点或工程问题：现有网站具备博客基础，但首次访问时无法高效识别个人方向、代表作品与联系入口。
- 期望结果：首页、项目、写作、关于和 Now 形成清晰路径，保留免费 GitHub Pages 和 Markdown 发布流程。
- 非目标或边界：不虚构履历或项目成果；不引入服务端、数据库、登录、评论、分析脚本或新托管平台。
- Exit Gate 对照来源：本文件验收标准和用户在当前对话提供的公开信息。

## Scope

### In Scope

- 首页保留“阅读文章 / 查看项目”双入口，并以明确定位和精选写作补充个人信息。
- 项目页展示 `ai-coding-harness` 的问题、贡献重点与可验证的 GitHub 链接。
- 关于页补充在职背景、关注方向与公开联系方式。
- 新增 `Now` 页面，展示当前关注主题与长期兴趣。
- 在现有 Astro 静态站点、GitHub Pages 和 Markdown 写作流程内完成。

### Non-goals

- 不添加服务端、数据库、登录、评论、分析脚本或新托管平台。
- 不虚构岗位、项目成果、量化指标、联系方式或客户信息。
- 不将网站改造成冗长简历或复制 GitHub README。

## Specification

### Behavior

- 访客从首页可通过双入口进入项目和写作，并可从主导航进入关于和 Now 页面。
- 首页以文章阅读为默认主路径，项目作为同级的另一条探索路径。
- 项目页的仓库链接在新标签页打开，并标注为外部链接。
- 内容保持中文优先，英文仅作为项目原有名称或必要术语。

### Rules and Constraints

- 公开背景仅使用用户明确提供的“在职、华为”；不推断岗位或业务归属。
- 视觉方向为科技感与温暖、具有个人气质；以排版和色彩建立识别，而非无关装饰图。
- 保持移动端可读、导航可达和键盘可访问。

### Interfaces / Data Contract

- 站点配置继续由 `src/config.ts` 维护通用站点信息和联系链接。
- 写作继续由 `src/content/blog/` 下的 Markdown 内容集合驱动。

### Failure Behavior

- 未提供额外项目时，网站仅展示现有公开项目，不渲染虚假的项目占位条目。
- 未提供外部社交资料时，页面只展示 GitHub 与已配置邮箱。

## Acceptance Criteria

- AC-01：访客进入首页时，能在首屏理解网站主题，并能通过“阅读文章 / 查看项目”进入两条核心路径，以及通过主导航进入关于和 Now。
  - 自动化验证：静态构建成功；人工检查首页导航链接。
- AC-02：访客进入项目页时，能了解 `ai-coding-harness` 的用途并打开公开仓库。
  - 自动化验证：静态构建成功；人工检查外部链接属性。
- AC-03：访客在移动端阅读任一新页面时，文字和导航没有横向溢出。
  - 自动化验证：浏览器 390px 宽度人工检查。
- AC-04：原有写作列表和文章详情仍可构建、访问和展示。
  - 自动化验证：Astro 检查与静态构建通过。
- AC-05：访客在项目、写作、Now、关于页面可明确返回首页；在文章详情可明确返回文章列表。
  - 自动化验证：浏览器人工检查返回链接目标。

## Verification Strategy

此功能以静态构建、浏览器桌面/移动端检查和已发布页面访问作为验证方式；视觉与信息表达不适合用单元测试覆盖。

## Current Status

实现与本地验证已完成；GitHub 推送连接在发布时持续卡住，公网页面更新待完成推送后复查。

## Decision Context

### Why

保留同一站点作为个人线上总部，并延续用户已确认的“阅读文章 / 查看项目”双入口，让写作与项目成为平行而清晰的两条访问路径。

### Why Not

不引入图片墙、动态简历、数据看板或独立作品集应用：当前缺少能支撑这些模块的真实素材，且会削弱招聘方的阅读路径。

### If Modifying This Area, Check

- 不删除或破坏 `src/content/blog/` 的 Markdown 发布路径。
- 不修改 GitHub Actions 与 GitHub Pages 部署方式，除非发布验证明确失败。
- 新增公开履历或联系信息前，先确认用户愿意公开。

## Links

### ADRs
- None.

### Lessons
- None.

### Evidence
- [EV-002：个人橱窗升级验证](../evidence/EV-002-personal-showcase.md)

### Related Features
- [F001：免费个人博客与作品入口](F001-personal-blog.md)

### External Context
- https://github.com/TangHui-Best/ai-coding-harness

## Patch History

None yet

| Patch | Date | Commit | Symptom | Root Cause | Protection | Status |
| --- | --- | --- | --- | --- | --- | --- |

## Evidence

参见 [EV-002：个人橱窗升级验证](../evidence/EV-002-personal-showcase.md)。

## Next Step

先完成 `git push origin main` 并确认 GitHub Actions 发布；之后在有新的可公开项目、明确岗位方向或外部职业资料时，补充项目案例和关于页即可。
