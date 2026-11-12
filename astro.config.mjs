import { defineConfig } from "astro/config";
import remarkCjkFriendly from "remark-cjk-friendly";

export default defineConfig({
  output: "static",
  markdown: {
    // 中文紧贴 ** 时，CommonMark 判定不了闭合，页面会残留字面星号。
    // 这个插件按 CJK 规则修正强调边界，正文不需要手改。
    remarkPlugins: [remarkCjkFriendly],
  },
});
