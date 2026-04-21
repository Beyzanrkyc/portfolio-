import { useState, useEffect } from 'react'

const API = 'http://localhost:3000'

export default function AdminProjects({ token }) {
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({
    title: '', description: '', coverImage: '', githubUrl: '', liveUrl: '', technologies: '', published: true
  })

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const fetchProjects = async () => {
    const res = await fetch(`${API}/projects/all`, { headers })
    const data = await res.json()
    setProjects(data)
  }

  useEffect(() => { fetchProjects() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      ...form,
      technologies: form.technologies.split(',').map((t) => t.trim()).filter(Boolean),
    }

    if (editing) {
      await fetch(`${API}/projects/${editing}`, { method: 'PUT', headers, body: JSON.stringify(body) })
    } else {
      await fetch(`${API}/projects`, { method: 'POST', headers, body: JSON.stringify(body) })
    }

    setForm({ title: '', description: '', coverImage: '', githubUrl: '', liveUrl: '', technologies: '', published: true })
    setEditing(null)
    setShowForm(false)
    fetchProjects()
  }

  const handleEdit = (project) => {
    setForm({ ...project, technologies: project.technologies?.join(', ') || '' })
    setEditing(project.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return
    await fetch(`${API}/projects/${id}`, { method: 'DELETE', headers })
    fetchProjects()
  }

  const handleCancel = () => {
    setForm({ title: '', description: '', coverImage: '', githubUrl: '', liveUrl: '', technologies: '', published: true })
    setEditing(null)
    setShowForm(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Projects ({projects.length})</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg text-sm font-semibold transition-colors"
          >
            + New Project
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 space-y-4">
          <h3 className="text-lg font-semibold text-yellow-400">{editing ? 'Edit Project' : 'New Project'}</h3>

          <div>
            <label className="text-sm text-slate-400 mb-1 block">Title</label>
            <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-1 block">Description</label>
            <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Cover Image URL</label>
              <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Technologies (comma separated)</label>
              <input value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                placeholder="React, NestJS, PostgreSQL"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">GitHub URL</label>
              <input value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Live URL</label>
              <input value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
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
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-3">
        {projects.length === 0 && <p className="text-slate-400 text-sm">No projects yet. Create your first one!</p>}
        {projects.map((project) => (
          <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-medium">{project.title}</h3>
              <p className="text-slate-400 text-xs mt-1">
                {project.technologies?.join(', ')} • {project.published ? <span className="text-green-400">Published</span> : <span className="text-yellow-400">Draft</span>}
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(project)} className="px-3 py-1 border border-yellow-500/30 text-yellow-400 rounded-lg text-xs hover:bg-yellow-500/10 transition-colors">Edit</button>
              <button onClick={() => handleDelete(project.id)} className="px-3 py-1 border border-red-500/30 text-red-400 rounded-lg text-xs hover:bg-red-500/10 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}