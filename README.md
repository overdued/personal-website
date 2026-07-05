# 赵宇航 Yuhang Zhao - 个人学术主页

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?logo=github)](https://overdued.github.io/personal-website)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **具身智能研究者 | 全链路闭环创新**  
> 中山大学 · 电子与通信工程学院 2026届本科  
> 香港中文大学（深圳）· Embodied AI PhD 录取

---

## 项目简介

这是一个学术风格的个人主页，用于展示我的教育背景、研究方向、论文成果、科研项目、获奖荣誉与联系方式。网站采用纯静态技术栈（HTML + CSS + JavaScript），设计简洁、现代、国际化，适配桌面端、平板与手机。

**在线预览：** [https://overdued.github.io/personal-website](https://overdued.github.io/personal-website) *(部署后生效)*

---

## 项目结构

```
personal-website/
├── index.html          # 主页面（单页滚动式）
├── css/
│   └── style.css       # 全局样式与响应式布局
├── js/
│   └── script.js       # 交互逻辑（导航、滚动动画、返回顶部）
├── images/
│   ├── avatar.jpg      # 证件照（头像）
│   └── photo.jpg       # 个人照（相册展示）
└── README.md           # 本文件
```

---

## 页面模块

| 模块 | 说明 |
|------|------|
| **Hero** | 首页全屏展示，姓名、学校、研究方向标签、快速入口 |
| **About Me** | 个人简介 + 证件照 + 核心数据统计 |
| **Education** | 时间线形式展示本科与博士录取信息 |
| **Research** | 六大研究方向卡片（VLA / WAM / 人类视频 / LLM / 边缘AI / 高效推理） |
| **Publications** | 论文与专利列表，含投稿状态、作者身份、摘要标签 |
| **Projects** | 8个核心项目卡片，含技术栈、角色、时间、链接 |
| **Awards** | 12项获奖与荣誉网格展示 |
| **Presentations** | 3份学术报告/文献综述 |
| **Gallery** | 图片相册（现有照片 + 占位提示） |
| **Contact** | 邮箱、电话、GitHub、地址信息 |

---

## 技术特点

- **纯静态**：无需后端，直接部署到 GitHub Pages
- **响应式**：自适应桌面 / 平板 / 手机
- **现代排版**：Inter + Noto Serif SC 字体，良好留白与层次
- **交互动画**：滚动渐显、导航高亮、返回顶部、卡片悬停效果
- **打印友好**：支持打印为 PDF 简历
- **无障碍**：语义化 HTML 标签与 ARIA 属性

---

## GitHub Pages 部署指南

### 方法一：通过 GitHub Web 界面部署（推荐新手）

1. **创建仓库**
   - 访问 [https://github.com/new](https://github.com/new)
   - 仓库名称填写：`personal-website`（或 `overdued.github.io` 如果你想直接用自己的用户名作为域名）
   - 选择 **Public**（公开仓库，GitHub Pages 免费要求）
   - 勾选 **Add a README file**（可选）
   - 点击 **Create repository**

2. **上传文件**
   - 进入新建的仓库页面
   - 点击 **Add file → Upload files**
   - 将本项目的所有文件（`index.html`、`css/`、`js/`、`images/`）拖拽到上传区域
   - 点击 **Commit changes**

3. **开启 GitHub Pages**
   - 进入仓库的 **Settings** 标签
   - 左侧菜单选择 **Pages**
   - 在 **Build and deployment** 区域：
     - **Source** 选择 **Deploy from a branch**
     - **Branch** 选择 `main`（或 `master`），文件夹选择 `/ (root)`
     - 点击 **Save**

4. **访问主页**
   - 等待 1-3 分钟，GitHub 会生成站点
   - 页面顶部会显示你的访问链接，例如：
     - `https://overdued.github.io/personal-website`（如果仓库名是 personal-website）
     - `https://overdued.github.io`（如果仓库名是 overdued.github.io）

### 方法二：通过 Git 命令行部署

```bash
# 1. 确保已安装 Git，并在项目文件夹内
cd personal-website

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交（首次提交）
git commit -m "Initial commit: academic personal website"

# 5. 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main

# 7. 进入 GitHub 仓库 Settings → Pages → 选择 main 分支 → Save
```

### 方法三：通过 GitHub Desktop（图形界面）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 选择 **File → Add local repository**，选择 `personal-website` 文件夹
3. 填写 Summary（如 `Initial commit`），点击 **Commit to main**
4. 点击 **Publish repository**，确保选择 **Public**
5. 发布后，进入 GitHub 网页 → Settings → Pages → 开启 main 分支

---

## 自定义与维护

### 修改个人信息

直接编辑 `index.html` 中的对应文本即可。所有内容均使用语义化标签，搜索模块名称（如 `about`、`education`）可快速定位。

### 替换图片

- 将新图片放入 `images/` 文件夹
- 在 `index.html` 中搜索 `images/` 替换路径
- **建议尺寸**：头像 3:4，项目展示图 16:9，相册图不限

### 添加新论文/项目/奖项

复制现有的 `.pub-item` / `.project-card` / `.award-card` 结构，粘贴到对应列表中即可。

### 更换主题色

编辑 `css/style.css` 顶部的 `:root` 变量：

```css
:root {
    --primary: #1e3a5f;      /* 主色：深蓝 */
    --accent: #c9a227;        /* 强调色：金色 */
    --teal: #0f766e;          /* 次色：青色 */
    /* ... */
}
```

### 更新年份

页脚年份由 JavaScript 自动获取当前年份，无需手动修改。

---

## 常见问题

**Q: 页面样式没有加载？**  
A: 检查 `index.html` 中 CSS 路径是否为 `./css/style.css`（相对路径），确保文件大小写正确。GitHub Pages 区分大小写。

**Q: 图片不显示？**  
A: 检查 `images/` 文件夹是否已上传，图片路径是否正确。建议使用英文命名以避免编码问题。

**Q: 如何绑定自定义域名？**  
A: 在仓库根目录创建 `CNAME` 文件，内容为你的域名（如 `www.yuhangzhao.com`），然后在域名 DNS 设置中添加 CNAME 记录指向 `overdued.github.io`。

**Q: 页面更新后没有变化？**  
A: GitHub Pages 有缓存，通常需要 1-5 分钟生效。可尝试 `Ctrl + F5` 强制刷新。

---

## 安全提示

- **不要在任何公开文件中写入 GitHub Token 或个人密码**
- 如需本地操作使用 GitHub Token，请通过环境变量或 Git Credential Manager 管理，不要提交到仓库
- 本项目的 `github.txt` 文件仅供本地参考，不应上传至 GitHub

---

## 许可证

本项目采用 [MIT License](LICENSE) 开源。你可以自由修改、使用，但请保留原作者信息。

---

## 联系作者

- **邮箱**：1176030928@qq.com
- **GitHub**：[@overdued](https://github.com/overdued)
- **地址**：中国 · 广东省 · 深圳市

---

*Built with passion for Embodied AI · Designed for academic excellence*
