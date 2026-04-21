import { useState, useEffect } from 'react'
import AdminLogin from '../components/admin/AdminLogin'
import AdminBlog from '../components/admin/AdminBlog'
import AdminProjects from '../components/admin/AdminProjects'

export default function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem('admin_token'))
  const [activeTab, setActiveTab] = useState('blog')

  const handleLogin = (receivedToken) => {
    localStorage.setItem('admin_token', receivedToken)
    setToken(receivedToken)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setToken(null)
  }

  if (!token) return <AdminLogin onLogin={handleLogin} />

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Admin <span className="text-yellow-400">Dashboard</span>
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors text-sm"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          {['blog', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-semibold capitalize transition-colors ${
                activeTab === tab
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'blog' && <AdminBlog token={token} />}
        {activeTab === 'projects' && <AdminProjects token={token} />}

      </div>
    </div>
  )
}