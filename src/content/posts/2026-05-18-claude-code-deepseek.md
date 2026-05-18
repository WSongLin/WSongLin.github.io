---
title: "Claude Code 配置 DeepSeek 模型全攻略：不用魔法，国内直接用"
description: "手把手教你将 DeepSeek V4 Pro 接入 Claude Code，享受 1M 上下文和 Max 思考等级，无需科学上网，中国大陆直连可用。"
date: 2026-05-18
tags: ["claude-code", "deepseek", "vibe-coding", "ai-tools"]
---

## 为什么要用 DeepSeek + Claude Code？

Claude Code 是目前体验最好的 AI 编程终端工具之一，交互流畅、理解能力强。但它有两个门槛：需要付费订阅，以及网络访问限制。

DeepSeek 完美解决了这两个问题：

- **国内直连**：无需科学上网，中国大陆直接使用
- **1M 上下文**：足以容纳整个 iOS 项目代码
- **Max 思考等级**：复杂的架构设计和 Bug 修复不在话下
- **价格实惠**：API 按量计费，比订阅 Claude 便宜很多

把 DeepSeek 模型接入 Claude Code，等于用 Claude Code 的交互体验 + DeepSeek 的模型能力，是中国大陆开发者进行 Vibe Coding 的最佳方案。

## 准备条件

开始之前，你需要准备以下内容：

### 1. DeepSeek API Key

前往 [DeepSeek 开放平台](https://platform.deepseek.com/) 注册账号，在「API Keys」页面创建一个 Key 并保存好。

新用户通常有免费额度，足够日常使用。

### 2. Node.js 环境

Claude Code 需要 Node.js 环境。在终端输入以下命令确认是否已安装：

```bash
node --version
# 应该显示 v18 或以上版本
```

如果没有安装，前往 [Node.js 官网](https://nodejs.org/) 下载安装。

### 3. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

安装完成后验证：

```bash
claude --version
```

## 配置步骤

### 步骤一：创建配置文件

Claude Code 的配置通过环境变量或配置文件实现。在你的 home 目录下创建或编辑 `~/.claude.json` 文件：

```bash
cd ~ && touch .claude.json
```

### 步骤二：写入 DeepSeek 配置

编辑 `~/.claude.json`，写入以下内容：

```json
{
  "model": "deepseek-chat",
  "apiKey": "你的DeepSeek API Key",
  "baseURL": "https://api.deepseek.com",
  "maxTokens": 1000000,
  "thinking": {
    "type": "enabled",
    "budgetTokens": 32000
  }
}
```

> **注意**：将 `apiKey` 的值替换为你自己的 DeepSeek API Key。

### 步骤三：配置 Max 思考等级

如果你的 DeepSeek 账号支持 Max 思考模式，可以增强推理能力。在上述配置中设置 `thinking.budgetTokens` 为 32000（最大值）。

### 步骤四：验证配置

在终端中启动 Claude Code：

```bash
claude
```

输入一个简单的问题测试：

> 「用 Swift 写一个带弹簧动画的按钮组件」

如果能正常返回代码，说明配置成功。

## 常见问题

### Q: 提示 "API key invalid" 怎么办？

检查 API Key 是否正确复制，注意不要有多余的空格或换行。

### Q: 响应速度慢？

DeepSeek 在国内的响应速度通常很快。如果遇到延迟，检查网络环境，或尝试切换 API 域名。

### Q: 上下文不够用？

DeepSeek V4 Pro 支持 1M 上下文，在配置中将 `maxTokens` 设为 1000000 即可。

## 总结

Claude Code + DeepSeek 的组合，让中国大陆开发者无需魔法就能享受顶级 AI 编程体验。配置过程不到 5 分钟，之后就进入了「说需求 → 出代码」的 Vibe Coding 模式。

欢迎在评论区分享你的配置体验和遇到的问题。
