export const site = {
  title: "Tang Hui",
  description: "AI、Agent 与工程实践的长期记录。",
  role: "企业级 AI / Agent 工程师",
  location: "Shenzhen, CN",
  since: 2022,
  github: "https://github.com/TangHui-Best",
  email: "btanghui@163.com",
};

/**
 * 首页把一个 tag 下的文章聚成「系列」。
 * 新文章只要带上这个 tag，就会自动进入系列并按时间追加编号，不需要改任何页面。
 */
export const series = {
  tag: "Claude Code",
  label: "Claude Code 源码解剖",
};

export const featuredProject = {
  index: "01",
  name: "AgentMentor",
  sub: "给编码 Agent 的工程记忆框架",
  description:
    "面向 Codex、Claude Code 等编码 Agent：把功能目标、设计取舍、已验证事实与可复用经验留在代码库里，减少长期迭代中「只看到代码、看不到为什么」的信息损失。",
  stack: ["AI Agent", "Skills", "Engineering workflow"],
  href: "https://github.com/TangHui-Best/ai-coding-harness",
  keeps: [
    { label: "功能目标", en: "INTENT" },
    { label: "设计取舍", en: "TRADEOFF" },
    { label: "已验证事实", en: "EVIDENCE" },
    { label: "可复用经验", en: "REUSE" },
  ],
};

export function formatDate(date: Date, style: "dotted" | "zh" = "dotted") {
  if (style === "zh") {
    return date.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });
  }
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export function formatMonth(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${y}.${m}`;
}
