# Wisland Monorepo

一个完整的monorepo工程，包含2个Next.js+TypeScript项目和2个Vite+React+TypeScript项目，支持公共组件共享，并使用Docker配置开发和生产环境。

## 🏗️ 项目结构

```
wisland/
├── apps/                    # 应用目录
│   ├── nextjs-app1/        # Next.js应用1 (端口: 3001)
│   ├── nextjs-app2/        # Next.js应用2 (端口: 3002)
│   ├── vite-app1/          # Vite应用1 (端口: 4001)
│   └── vite-app2/          # Vite应用2 (端口: 4002)
├── packages/               # 共享包目录
│   ├── ui/                # UI组件库
│   └── utils/             # 工具函数库
├── nginx/                 # Nginx配置
│   ├── dev/              # 开发环境配置
│   └── prod/             # 生产环境配置
├── docker-compose.dev.yml  # 开发环境Docker配置
├── docker-compose.prod.yml # 生产环境Docker配置
└── README.md
```

## 🚀 快速开始

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 构建共享包：
```bash
npm run build --workspace=@wisland/ui
npm run build --workspace=@wisland/utils
```

3. 启动开发服务器：
```bash
# 启动所有应用
npm run dev

# 或者单独启动某个应用
npm run dev --workspace=nextjs-app1
npm run dev --workspace=nextjs-app2
npm run dev --workspace=vite-app1
npm run dev --workspace=vite-app2
```

### Docker开发环境

1. 启动开发环境：
```bash
npm run docker:dev
```

2. 访问应用：
- Next.js App 1: http://localhost:3001
- Next.js App 2: http://localhost:3002
- Vite App 1: http://localhost:4001
- Vite App 2: http://localhost:4002

### Docker生产环境

1. 构建并启动生产环境：
```bash
npm run docker:prod
```

2. 访问应用：
- 通过Nginx反向代理访问各个应用

## 📦 共享包

### @wisland/ui

UI组件库，包含以下组件：
- Button - 按钮组件
- Card - 卡片组件
- Input - 输入框组件
- Modal - 模态框组件
- Badge - 徽章组件
- Avatar - 头像组件
- Loading - 加载组件

### @wisland/utils

工具函数库，包含以下功能：
- 字符串处理 (capitalize, toCamelCase, toKebabCase等)
- 日期处理 (formatDate, getRelativeTime等)
- 存储工具 (LocalStorage, SessionStorage)
- 验证工具 (isValidEmail, validatePassword等)
- 格式化工具 (formatNumber, formatCurrency等)

## 🔧 技术栈

- **构建工具**: Turbo, Vite, Next.js
- **框架**: React 18, Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **包管理**: npm workspaces
- **容器化**: Docker, Docker Compose
- **反向代理**: Nginx

## 🐳 Docker配置

### 开发环境特性
- 热更新支持
- 源码映射
- 实时重载
- 开发工具集成

### 生产环境特性
- 多阶段构建
- 静态资源优化
- 缓存策略
- 安全配置

## 📝 可用脚本

```bash
# 开发
npm run dev              # 启动所有应用的开发服务器
npm run build            # 构建所有应用
npm run start            # 启动所有应用的生产服务器
npm run lint             # 运行代码检查
npm run type-check       # 运行类型检查
npm run clean            # 清理构建文件

# Docker
npm run docker:dev       # 启动开发环境
npm run docker:prod      # 启动生产环境
npm run docker:down      # 停止所有容器
```

## 🌐 访问地址

### 开发环境
- Next.js App 1: http://localhost:3001
- Next.js App 2: http://localhost:3002
- Vite App 1: http://localhost:4001
- Vite App 2: http://localhost:4002

### 生产环境
- 通过Nginx反向代理访问，默认端口80

## 🔄 热更新

所有应用都支持热更新：
- Next.js应用：自动支持Fast Refresh
- Vite应用：自动支持HMR (Hot Module Replacement)
- 共享包：通过tsup的watch模式实现实时构建

## 📚 文档

更多详细信息请参考各应用的README文件：
- [Next.js App 1](./apps/nextjs-app1/README.md)
- [Next.js App 2](./apps/nextjs-app2/README.md)
- [Vite App 1](./apps/vite-app1/README.md)
- [Vite App 2](./apps/vite-app2/README.md)

## 🤝 贡献

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
