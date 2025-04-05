# 个人博客网站

这是我的个人博客网站，使用Jekyll构建，托管在GitHub Pages上。



## 网站内容

这个博客主要包含以下内容：

1. **编程笔记**：记录我学习C/C++、算法等编程知识的心得和笔记
2. **英语学习**：分享英语学习经验和翻译技巧
3. **生活日记**：记录个人成长和学习过程中的感悟

## 网站结构

- `_posts/`：存放博客文章
- `_layouts/`：存放页面布局模板
- `assets/`：存放CSS、JavaScript和图片等资源
- `_config.yml`：网站配置文件

## 本地运行

如果你想在本地运行这个网站，需要按照以下步骤操作：

1. 安装Ruby和Jekyll

   ```
   gem install bundler jekyll
   ```

2. 克隆仓库

   ```
   git clone https://github.com/你的用户名/你的仓库名.git
   cd 你的仓库名
   ```

3. 安装依赖

   ```
   bundle install
   ```

4. 启动本地服务器

   ```
   bundle exec jekyll serve
   ```

5. 在浏览器中访问 `http://localhost:4000`

## 添加新文章

要添加新的博客文章，只需在 `_posts` 目录下创建一个新的Markdown文件，文件名格式为：`YYYY-MM-DD-title.md`。

文章头部需要包含以下Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: YYYY-MM-DD
categories: [分类]
tags: [标签1, 标签2]
---
```

## 自定义样式

网站的自定义样式位于 `assets/css/style.scss` 文件中。你可以修改这个文件来自定义网站的外观。

## 部署

这个网站使用GitHub Pages自动部署。每次推送到main分支时，GitHub Actions会自动构建并部署网站。

## 许可证

MIT License

## 联系方式

如果你有任何问题或建议，欢迎通过以下方式联系我：

- Bilibili：[我的Bilibili主页](https://space.bilibili.com/你的ID)
- GitHub：[我的GitHub主页](https://github.com/你的用户名) 
