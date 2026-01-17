# 许可证选择向导

一个简单易用的HTML工具，帮助开发者和创作者选择合适的开源许可证。

## 功能特性

- **选择向导**：通过简单的问题引导，推荐最适合的许可证
- **许可证列表**：展示所有主流开源许可证的详细信息
- **许可证比较**：支持选择多个许可证进行并排比较
- **许可证下载**：自定义并下载许可证文本
- **自定义许可证**：创建和管理自己的自定义许可证

## 支持的许可证

### 软件许可证
- MIT License
- BSD 2-Clause License
- BSD 3-Clause License
- Apache License 2.0
- GNU GPL v2.0
- GNU GPL v3.0
- GNU LGPL v2.1
- GNU LGPL v3.0
- GNU AGPL v3.0
- Mozilla Public License 2.0
- Eclipse Public License 1.0
- Eclipse Public License 2.0

### 公共领域许可证
- CC0 1.0 Universal
- Unlicense

### 知识共享许可证
- CC BY 4.0
- CC BY-SA 4.0
- CC BY-NC 4.0
- CC BY-NC-SA 4.0
- CC BY-ND 4.0
- CC BY-NC-ND 4.0

## 如何使用

### 本地使用

1. 克隆或下载本项目
2. 在项目根目录下启动本地服务器：
   ```bash
   # 使用Python 3
   python -m http.server 8000
   
   # 或使用Node.js
   npx http-server -p 8000
   
   # 或使用PHP
   php -S localhost:8000
   ```
3. 在浏览器中访问 `http://localhost:8000`

### GitHub Pages部署

1. 将项目推送到GitHub仓库
2. 进入仓库设置
3. 在"GitHub Pages"部分，选择"main"分支作为源
4. 点击"Save"，GitHub Pages将自动部署
5. 访问 `https://your-username.github.io/your-repo-name`

## 项目结构

```
├── index.html              # 主页面
├── css/                    # 样式文件夹
│   └── styles.css          # 主样式文件
├── js/                     # JavaScript文件夹
│   ├── app.js              # 主应用逻辑
│   └── licenses.js         # 许可证数据
├── icons/                  # 图标文件夹
│   └── *.svg               # 许可证SVG图标
├── README.md               # 项目说明
└── 许可证列表.md           # 许可证详细信息
```

## 技术实现

- **HTML5**：语义化标签，响应式设计
- **CSS3**：Flexbox和Grid布局，现代化UI设计
- **JavaScript**：原生JS，无框架依赖
- **SVG**：矢量图标，支持高分辨率显示

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

本项目采用 [MIT License](LICENSE.txt) 进行许可。
