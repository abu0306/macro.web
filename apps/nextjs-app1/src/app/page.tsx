'use client'

import { Button, Card, Badge, Avatar, Loading } from '@wisland/ui'
import { formatDate, capitalize, formatNumber } from '@wisland/utils'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('common.appName')}</h1>
          <div className="mb-4">
            <Button variant="outline" onClick={() => i18n.changeLanguage(i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN')}>
              {i18n.language}
            </Button>
          </div>
          <p className="text-xl text-gray-600">
            使用共享UI组件和工具函数的Next.js应用
          </p>
          <Badge variant="info" className="mt-4">
            当前时间: {formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')}
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* UI组件展示 */}
          <Card>
            <h3 className="text-lg font-semibold mb-4">按钮组件</h3>
            <div className="space-y-3">
              <Button variant="primary">主要按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="outline">轮廓按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">徽章组件</h3>
            <div className="space-y-3">
              <Badge variant="default">默认</Badge>
              <Badge variant="success">成功</Badge>
              <Badge variant="warning">警告</Badge>
              <Badge variant="error">错误</Badge>
              <Badge variant="info">信息</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">头像组件</h3>
            <div className="space-y-3">
              <Avatar size="sm" fallback="A" />
              <Avatar size="md" fallback="B" />
              <Avatar size="lg" fallback="C" />
              <Avatar size="xl" fallback="D" />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">加载组件</h3>
            <div className="space-y-3">
              <Loading size="sm" />
              <Loading size="md" />
              <Loading size="lg" />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">工具函数演示</h3>
            <div className="space-y-2 text-sm">
              <p>首字母大写: {capitalize('hello world')}</p>
              <p>数字格式化: {formatNumber(1234567.89)}</p>
              <p>日期格式化: {formatDate(new Date())}</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">应用信息</h3>
            <div className="space-y-2 text-sm">
              <p>应用名称: Next.js App 1</p>
              <p>端口: 3001</p>
              <p>框架: Next.js 14</p>
              <p>语言: TypeScript</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
