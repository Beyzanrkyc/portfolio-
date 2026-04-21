import { useState, useEffect } from 'react'

const API = 'http://localhost:3000'

export default function AdminBlog({ token }) {
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
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

    setForm({ title: '', slug: '', summary: '', content: '', coverImage: '', tags: '', published: false })
    setEditing(null)
    setShowForm(false)
    fetchPosts()
  }

  const handleEdit = (post) => {
    setForm({ ...post, tags: post.tags?.join(', ') || '' })
    setEditing(post.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return
    await fetch(`${API}/blog/${id}`, { method: 'DELETE', headers })
    fetchPosts()
  }

  const handleCancel = () => {
    setForm({ title: '', slug: '', summary: '', content: '', coverImage: '', tags: '', published: false })
    setEditing(null)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Blog Posts ({posts.length})</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg text-sm font-semibold transition-colors"
          >
            + New Post
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 space-y-4">
          <h3 className="text-lg font-semibold text-yellow-400">{editing ? 'Edit Post' : 'New Post'}</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Title</label>
              <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Slug</label>
              <input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="my-post-title"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-1 block">Summary</label>
            <input required value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-1 block">Content</label>
            <textarea required rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Cover Image URL</label>
              <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Tags (comma separated)</label>
              <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder="react, nestjs, typescript"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            <span className="text-sm text-slate-300">Published</span>
          </label>

          <div className="flex gap-3">
            <button type="submit" className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg text-sm font-semibold transition-colors">
              {editing ? 'Update' : 'Create'}
            </button>
            <button type="button" onClick={handleCancel} className="px-6 py-2 border border-white/10 text-slate-400 rounded-lg text-sm hover:bg-white/5 transition-colors">
              Cancel
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Read Time (minutes)</label>
              <input
                type="number"
                value={form.readTime || 5}
                onChange={(e) => setForm({ ...form, readTime: +e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                checked={form.featured || false}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              />
              <span className="text-sm text-slate-300">Featured post</span>
            </div>
          </div>
        </form>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {posts.length === 0 && <p className="text-slate-400 text-sm">No posts yet. Create your first one!</p>}
        {posts.map((post) => (
          <div key={post.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-medium">{post.title}</h3>
              <p className="text-slate-400 text-xs mt-1">{post.slug} • {post.published ? <span className="text-green-400">Published</span> : <span className="text-yellow-400">Draft</span>}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(post)} className="px-3 py-1 border border-yellow-500/30 text-yellow-400 rounded-lg text-xs hover:bg-yellow-500/10 transition-colors">Edit</button>
              <button onClick={() => handleDelete(post.id)} className="px-3 py-1 border border-red-500/30 text-red-400 rounded-lg text-xs hover:bg-red-500/10 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}