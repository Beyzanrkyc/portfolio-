import { useState } from 'react'
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
    <div style={{ display: 'flex', minHeight: '100vh', background: '#080810', color: 'white', fontFamily: 'sans-serif' }}>

      {/* SIDEBAR */}
      <div style={{
        width: '240px',
        minWidth: '240px',
        background: '#0d0d1a',
        borderRight: '1px solid rgba(234,179,8,0.12)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 50,
      }}>

        {/* Logo */}
        <div style={{ padding: '28px 24px', borderBottom: '1px solid rgba(234,179,8,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #eab308, #ca8a04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: '900', fontSize: '18px', color: 'black'
            }}>A</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: 'white' }}>Admin</div>
              <div style={{ fontSize: '11px', color: 'rgba(234,179,8,0.7)', marginTop: '2px' }}>Dashboard</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '20px 12px' }}>
          {[
            { id: 'blog', label: 'Blog Posts', icon: '✍️' },
            { id: 'projects', label: 'Projects', icon: '🗂️' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '11px 16px',
                borderRadius: '10px',
                marginBottom: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                background: activeTab === tab.id ? 'rgba(234,179,8,0.12)' : 'transparent',
                color: activeTab === tab.id ? '#eab308' : 'rgba(148,163,184,1)',
                border: activeTab === tab.id ? '1px solid rgba(234,179,8,0.25)' : '1px solid transparent',
              }}
            >
              <span style={{ fontSize: '16px' }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(234,179,8,0.1)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 16px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              color: 'rgba(248,113,113,0.9)',
              background: 'transparent',
              border: '1px solid rgba(239,68,68,0.2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: '240px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Top Bar */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 40,
          padding: '16px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(8,8,16,0.92)',
          borderBottom: '1px solid rgba(234,179,8,0.08)',
          backdropFilter: 'blur(12px)',
        }}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '700', color: 'white', margin: 0 }}>
              {activeTab === 'blog' ? '✍️ Blog Posts' : '🗂️ Projects'}
            </h1>
            <p style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', margin: '3px 0 0' }}>
              Manage your {activeTab === 'blog' ? 'articles and posts' : 'portfolio projects'}
            </p>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '6px 12px', borderRadius: '8px',
            background: 'rgba(234,179,8,0.08)',
            border: '1px solid rgba(234,179,8,0.15)',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#4ade80', boxShadow: '0 0 6px #4ade80'
            }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(234,179,8,0.8)' }}>Live</span>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: '32px', maxWidth: '960px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
          {activeTab === 'blog' && <AdminBlog token={token} />}
          {activeTab === 'projects' && <AdminProjects token={token} />}
        </main>

      </div>
    </div>
  )
}