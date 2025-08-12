import { useState } from 'react'
import { Button, Card, Badge, Avatar, Loading, Modal } from '@wisland/ui'
import { formatDate, capitalize, formatNumber, formatFileSize, formatCurrency } from '@wisland/utils'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vite App 1
          </h1>
          <p className="text-xl text-gray-600">
            使用共享UI组件和工具函数的Vite应用
          </p>
          <Badge variant="warning" className="mt-4">
            当前时间: {formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')}
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Button onClick={handleLoadingDemo} disabled={isLoading}>
                {isLoading ? <Loading size="sm" /> : '演示加载'}
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">工具函数演示</h3>
            <div className="space-y-2 text-sm">
              <p>首字母大写: {capitalize('hello world')}</p>
              <p>数字格式化: {formatNumber(1234567.89)}</p>
              <p>文件大小: {formatFileSize(1024 * 1024)}</p>
              <p>货币格式化: {formatCurrency(1234.56)}</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">模态框演示</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(true)}
              >
                打开模态框
              </Button>
              <p className="text-sm text-gray-600">
                点击按钮打开模态框演示。
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">应用信息</h3>
            <div className="space-y-2 text-sm">
              <p>应用名称: Vite App 1</p>
              <p>端口: 4001</p>
              <p>框架: Vite + React</p>
              <p>语言: TypeScript</p>
              <p>特色: 快速开发、热更新</p>
            </div>
          </Card>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Vite应用模态框"
        >
          <div className="space-y-4">
            <p>这是Vite应用中的模态框组件演示。</p>
            <p>Vite提供了极快的开发体验和热更新功能。</p>
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
              >
                关闭
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  alert('Vite应用功能演示！')
                  setIsModalOpen(false)
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default App
