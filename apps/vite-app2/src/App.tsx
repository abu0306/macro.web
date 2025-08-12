import { useState } from 'react'
import { Button, Card, Input, Modal, Badge, Loading } from '@wisland/ui'
import { formatDate, isValidEmail, validatePassword, formatNumber, formatPercentage } from '@wisland/utils'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !isValidEmail(value)) {
      setEmailError('请输入有效的邮箱地址')
    } else {
      setEmailError('')
    }
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value) {
      const validation = validatePassword(value)
      setPasswordError(validation.message)
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('表单提交成功！')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vite App 2
          </h1>
          <p className="text-xl text-gray-600">
            表单验证和数据处理演示应用
          </p>
          <Badge variant="error" className="mt-4">
            当前时间: {formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')}
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">表单验证演示</h3>
            <div className="space-y-4">
              <Input
                label="邮箱地址"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="请输入邮箱地址"
                error={emailError}
              />
              <Input
                label="密码"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="请输入密码"
                error={passwordError}
              />
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={!!emailError || !!passwordError || isLoading}
              >
                {isLoading ? <Loading size="sm" /> : '提交表单'}
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">模态框演示</h3>
            <div className="space-y-4">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(true)}
              >
                打开模态框
              </Button>
              <p className="text-sm text-gray-600">
                点击按钮打开模态框，展示模态框组件的功能。
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">数据格式化演示</h3>
            <div className="space-y-2 text-sm">
              <p>数字格式化: {formatNumber(1234567.89)}</p>
              <p>百分比格式化: {formatPercentage(0.75)}</p>
              <p>日期格式化: {formatDate(new Date())}</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">应用信息</h3>
            <div className="space-y-2 text-sm">
              <p>应用名称: Vite App 2</p>
              <p>端口: 4002</p>
              <p>框架: Vite + React</p>
              <p>语言: TypeScript</p>
              <p>特色: 表单验证、数据处理</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">功能特性</h3>
            <div className="space-y-2">
              <Badge variant="info">邮箱验证</Badge>
              <Badge variant="info">密码强度检测</Badge>
              <Badge variant="info">模态框组件</Badge>
              <Badge variant="info">表单验证</Badge>
              <Badge variant="info">数据格式化</Badge>
              <Badge variant="info">加载状态</Badge>
            </div>
          </Card>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Vite应用2模态框"
        >
          <div className="space-y-4">
            <p>这是Vite应用2中的模态框组件演示。</p>
            <p>该应用专注于表单验证和数据处理功能。</p>
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
              >
                取消
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  alert('Vite应用2功能演示！')
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
