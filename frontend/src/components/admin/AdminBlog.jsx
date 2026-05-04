import { useState, useEffect } from 'react'
import RichTextEditor from './RichTextEditor'

const API = import.meta.env.VITE_API_URL

export default function AdminBlog({ token }) {
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title: '', slug: '', summary: '', content: '',
    coverImage: '', tags: '', published: false,
    featured: false, readTime: 5
  })

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const fetchPosts = async () => {
    const res = await fetch(`${API}/blog/all`, { headers })
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => { fetchPosts() }, [])

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch(`${API}/upload/image`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
    const data = await res.json()
    setForm(prev => ({ ...prev, coverImage: data.url }))
    setUploading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      ...form,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    }

    if (editing) {
      await fetch(`${API}/blog/${editing}`, { method: 'PUT', headers, body: JSON.stringify(body) })
    } else {
      await fetch(`${API}/blog`, { method: 'POST', headers, body: JSON.stringify(body) })
    }

    setForm({ title: '', slug: '', summary: '', content: '', coverImage: '', tags: '', published: false, featured: false, readTime: 5 })
    setEditing(null)
    setShowForm(false)
    fetchPosts()
  }

  const handleEdit = (post) => {
    setForm({ ...post, tags: post.tags?.join(', ') || '', featured: post.featured || false, readTime: post.readTime || 5 })
    setEditing(post.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return
    await fetch(`${API}/blog/${id}`, { method: 'DELETE', headers })
    fetchPosts()
  }

  const handleCancel = () => {
    setForm({ title: '', slug: '', summary: '', content: '', coverImage: '', tags: '', published: false, featured: false, readTime: 5 })
    setEditing(null)
    setShowForm(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    color: 'rgba(148,163,184,1)',
    marginBottom: '6px',
    fontWeight: '500',
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Blog Posts ({posts.length})</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            style={{
              padding: '8px 16px',
              background: '#eab308',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            + New Post
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '32px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#eab308', marginTop: 0, marginBottom: '20px' }}>
            {editing ? '✏️ Edit Post' : '✍️ New Post'}
          </h3>

          {/* Title & Slug */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Title</label>
              <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Slug</label>
              <input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="my-post-title" style={inputStyle} />
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Summary</label>
            <input required value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} style={inputStyle} />
          </div>

          {/* Content - Rich Text Editor */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Content</label>
            <RichTextEditor
              value={form.content}
              onChange={(html) => setForm({ ...form, content: html })}
              placeholder="Write your blog post content here..."
            />
          </div>

          {/* Cover Image & Tags */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Cover Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload}
                style={{ ...inputStyle, padding: '7px 12px' }} />
              {uploading && <p style={{ color: '#eab308', fontSize: '12px', marginTop: '4px' }}>Uploading...</p>}
              {form.coverImage && !uploading && (
                <img src={form.coverImage} alt="Preview"
                  style={{ marginTop: '8px', height: '80px', width: '100%', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
              )}
            </div>
            <div>
              <label style={labelStyle}>Tags (comma separated)</label>
              <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder="react, nestjs, typescript" style={inputStyle} />
            </div>
          </div>

          {/* Read Time & Toggles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Read Time (minutes)</label>
              <input type="number" value={form.readTime || 5}
                onChange={(e) => setForm({ ...form, readTime: +e.target.value })} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '22px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'rgba(203,213,225,1)' }}>
                <input type="checkbox" checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                Published
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'rgba(203,213,225,1)' }}>
                <input type="checkbox" checked={form.featured || false}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
                ⭐ Featured
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit" style={{
              padding: '9px 24px', background: '#eab308', color: 'black',
              border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
            }}>
              {editing ? 'Update Post' : 'Create Post'}
            </button>
            <button type="button" onClick={handleCancel} style={{
              padding: '9px 24px', background: 'transparent', color: 'rgba(148,163,184,1)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '14px', cursor: 'pointer'
            }}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Posts List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {posts.length === 0 && (
          <p style={{ color: 'rgba(100,116,139,1)', fontSize: '14px' }}>No posts yet. Create your first one!</p>
        )}
        {posts.map((post) => (
          <div key={post.id} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {post.coverImage && (
                <img src={post.coverImage} alt="" style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }} />
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: '500', fontSize: '14px', color: 'white' }}>{post.title}</span>
                  {post.featured && (
                    <span style={{
                      padding: '2px 8px', background: 'rgba(234,179,8,0.15)',
                      border: '1px solid rgba(234,179,8,0.3)', color: '#eab308',
                      borderRadius: '20px', fontSize: '11px'
                    }}>⭐ Featured</span>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(100,116,139,1)', margin: '4px 0 0' }}>
                  {post.slug} •{' '}
                  <span style={{ color: post.published ? '#4ade80' : '#eab308' }}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => handleEdit(post)} style={{
                padding: '6px 14px', background: 'transparent',
                border: '1px solid rgba(234,179,8,0.3)', color: '#eab308',
                borderRadius: '8px', fontSize: '12px', cursor: 'pointer'
              }}>Edit</button>
              <button onClick={() => handleDelete(post.id)} style={{
                padding: '6px 14px', background: 'transparent',
                border: '1px solid rgba(239,68,68,0.3)', color: 'rgba(248,113,113,1)',
                borderRadius: '8px', fontSize: '12px', cursor: 'pointer'
              }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}