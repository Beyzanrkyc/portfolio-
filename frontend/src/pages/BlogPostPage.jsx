import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

const API = import.meta.env.VITE_API_URL

export default function BlogPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    fetch(`${API}/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoading(false)
        setTimeout(() => setIsVisible(true), 50)
      })
      .catch(() => setLoading(false))
  }, [id])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  if (loading) return (
    <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-400">Loading article...</p>
      </div>
    </div>
  )

  if (!post) return (
    <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-400 text-lg mb-4">Article not found.</p>
        <button
          onClick={() => navigate('/blog')}
          className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
        >
          ← Back to Blog
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
          onClick={() => navigate('/blog')}
          className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300"
          style={{ marginBottom: '48px' }}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Back to Blog</span>
        </button>

        {/* TAGS */}
        {post.tags?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {post.tags.map((tag, i) => (
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
                #{tag}
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
          {post.title}
        </h1>

        {/* META */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          fontSize: '14px',
          color: '#94a3b8',
          marginBottom: '32px',
          paddingBottom: '32px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={15} color="#eab308" opacity={0.6} />
            {formatDate(post.createdAt)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={15} color="#eab308" opacity={0.6} />
            {post.readTime || 5} min read
          </div>
        </div>

        {/* SUMMARY */}
        <div style={{
          background: 'rgba(234,179,8,0.05)',
          borderLeft: '4px solid #eab308',
          borderRadius: '0 12px 12px 0',
          padding: '20px 24px',
          marginBottom: '40px',
        }}>
          <p style={{
            fontSize: '18px',
            color: '#e2e8f0',
            lineHeight: 1.7,
            fontStyle: 'italic',
            margin: 0,
          }}>
            {post.summary}
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
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
            onClick={() => navigate('/blog')}
            className="group flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Back to Blog</span>
          </button>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {post.tags?.map((tag, i) => (
              <span key={i} style={{ fontSize: '12px', color: '#64748b' }}>#{tag}</span>
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