import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// 获取当前分支 commitId
let commitId = "";
if (existsSync(".git")) {
  try {
    commitId = execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    commitId = "";
  }
}

const buildTime = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Shanghai", // 使用中国时区
}).format(new Date());

export default defineConfig({
  plugins: [vue()],
  define: {
    __COMMITID__: JSON.stringify(commitId),
    __BUILDTIME__: JSON.stringify(buildTime),
  },
});
