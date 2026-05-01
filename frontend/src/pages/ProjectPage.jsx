import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

const API = 'http://localhost:3000'

export default function ProjectPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    fetch(`${API}/projects/${id}`)
      .then(res => res.json())
      .then(data => {
        setProject(data)
        setLoading(false)
        setTimeout(() => setIsVisible(true), 50)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-400">Loading project...</p>
      </div>
    </div>
  )

  if (!project) return (
    <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-400 text-lg mb-4">Project not found.</p>
        <button
          onClick={() => navigate('/projects')}
          className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b0b0f', overflowX: 'hidden' }}>

      {/* BACKGROUND BLOBS */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5 animate-blob pointer-events-none"></div>
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-5 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div
        style={{
          maxWidth: '1250px',
          margin: '0 auto',
          padding: '160px 48px 96px 48px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate('/projects')}
          className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300"
          style={{ marginBottom: '48px' }}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Back to Projects</span>
        </button>

        {/* TECHNOLOGIES */}
        {project.technologies?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                style={{
                  padding: '4px 12px',
                  background: 'rgba(234,179,8,0.15)',
                  border: '1px solid rgba(234,179,8,0.3)',
                  color: '#fde68a',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* TITLE */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '24px',
          lineHeight: 1.2,
        }}>
          🚀 {project.title}
        </h1>

        {/* LINKS */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: '#eab308',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              View Live <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              View Code <Github size={16} />
            </a>
          )}
        </div>

        {/* DESCRIPTION — rendered as HTML */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: project.description }}
          style={{
            color: '#cbd5e1',
            lineHeight: 1.8,
            fontSize: '16px',
          }}
        />

        {/* BOTTOM */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => navigate('/projects')}
            className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Back to Projects</span>
          </button>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies?.map((tech, i) => (
              <span key={i} style={{ fontSize: '12px', color: '#64748b' }}>{tech}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }

        .prose-content h1 { font-size: 28px; font-weight: 700; color: #eab308; margin: 24px 0 12px; }
        .prose-content h2 { font-size: 22px; font-weight: 700; color: #fde047; margin: 20px 0 10px; }
        .prose-content h3 { font-size: 18px; font-weight: 600; color: #fef08a; margin: 16px 0 8px; }
        .prose-content p { margin: 0 0 14px; }
        .prose-content ul { list-style: disc; padding-left: 24px; margin: 12px 0; }
        .prose-content ol { list-style: decimal; padding-left: 24px; margin: 12px 0; }
        .prose-content li { margin: 6px 0; color: #cbd5e1; }
        .prose-content blockquote { border-left: 3px solid #eab308; padding-left: 16px; margin: 16px 0; color: #94a3b8; font-style: italic; }
        .prose-content code { background: rgba(234,179,8,0.1); color: #fde047; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 13px; }
        .prose-content pre { background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px; margin: 16px 0; overflow-x: auto; }
        .prose-content pre code { background: none; color: #86efac; padding: 0; }
        .prose-content a { color: #eab308; text-decoration: underline; }
        .prose-content strong { color: white; font-weight: 700; }
        .prose-content em { color: #e2e8f0; }
        .prose-content s { color: #64748b; }
      `}</style>
    </div>
  )
}