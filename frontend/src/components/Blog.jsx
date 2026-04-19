import { useEffect, useState, useRef } from 'react'
import { Search, Calendar, Clock, Tag, ArrowRight, TrendingUp, Code, Brain, Lightbulb } from 'lucide-react'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isVisible, setIsVisible] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState([])
  const articlesRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { name: 'All', color: 'yellow' },
    { name: 'AI & ML', color: 'purple', icon: Brain },
    { name: 'Web Dev', color: 'blue', icon: Code },
    { name: 'Insights', color: 'pink', icon: Lightbulb }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Building Intelligent Healthcare Systems with AI',
      excerpt: 'Exploring how machine learning and neural networks can revolutionize healthcare diagnosis and patient monitoring.',
      content: 'Deep dive into the architecture and implementation of AI-powered healthcare systems...',
      category: 'AI & ML',
      date: '2025-03-15',
      readTime: 8,
      image: '🏥',
      tags: ['AI', 'Healthcare', 'Python', 'TensorFlow'],
      featured: true
    },
    {
      id: 2,
      title: 'React Performance Optimization: Beyond the Basics',
      excerpt: 'Advanced techniques for optimizing React applications for production-level performance.',
      content: 'Learn memoization, code splitting, lazy loading, and more...',
      category: 'Web Dev',
      date: '2025-03-10',
      readTime: 12,
      image: '⚡',
      tags: ['React', 'Performance', 'JavaScript'],
      featured: false
    },
    {
      id: 3,
      title: 'The Future of AI: Multimodal Models and Beyond',
      excerpt: 'Analyzing the latest breakthroughs in multimodal AI and what it means for the future.',
      content: 'Understanding vision-language models, audio processing, and unified AI architectures...',
      category: 'AI & ML',
      date: '2025-03-05',
      readTime: 10,
      image: '🤖',
      tags: ['AI', 'Multimodal', 'Deep Learning'],
      featured: true
    },
    {
      id: 4,
      title: 'Full-Stack Development: From Backend to Frontend',
      excerpt: 'A comprehensive guide to building end-to-end applications with Django and React.',
      content: 'Setting up APIs, database design, state management, and deployment...',
      category: 'Web Dev',
      date: '2025-02-28',
      readTime: 15,
      image: '🔧',
      tags: ['Django', 'React', 'Full-Stack', 'PostgreSQL'],
      featured: false
    },
    {
      id: 5,
      title: 'Computer Vision: From Theory to Real-World Applications',
      excerpt: 'Practical implementation of CNN-based computer vision systems for real-world use cases.',
      content: 'Building image classification, object detection, and facial recognition systems...',
      category: 'AI & ML',
      date: '2025-02-20',
      readTime: 11,
      image: '👁️',
      tags: ['Computer Vision', 'CNN', 'OpenCV'],
      featured: false
    },
    {
      id: 6,
      title: 'Lessons Learned: Building MediFlow',
      excerpt: 'Key insights from developing an AI-powered healthcare workflow platform.',
      content: 'Architecture decisions, challenges faced, and solutions implemented...',
      category: 'Insights',
      date: '2025-02-15',
      readTime: 9,
      image: '💡',
      tags: ['Project', 'Architecture', 'Lessons'],
      featured: true
    },
    {
      id: 7,
      title: 'Understanding Transformers: The Architecture Behind Modern AI',
      excerpt: 'A deep dive into transformer architecture that powers models like GPT and BERT.',
      content: 'Attention mechanisms, positional encoding, and how it all works together...',
      category: 'AI & ML',
      date: '2025-02-10',
      readTime: 13,
      image: '🧠',
      tags: ['Transformers', 'NLP', 'Deep Learning'],
      featured: false
    },
    {
      id: 8,
      title: 'Building Scalable APIs with FastAPI',
      excerpt: 'Best practices for building high-performance, production-ready APIs.',
      content: 'Async/await, dependency injection, validation, and deployment strategies...',
      category: 'Web Dev',
      date: '2025-02-05',
      readTime: 10,
      image: '🚀',
      tags: ['FastAPI', 'Python', 'APIs'],
      featured: false
    }
  ]

  useEffect(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchQuery, selectedCategory])

  const featuredPost = blogPosts.find(post => post.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-24 py-20 mt-20">

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-6xl">

        {/* HEADER */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400">Thoughts</span> & Insights
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Sharing knowledge about AI, full-stack development, and lessons learned from building real-world applications.
          </p>
        </div>

        {/* SEARCH & FILTER */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* SEARCH BAR */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search articles by title or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300"
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.name
                    ? `bg-${cat.color}-500 text-black`
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.icon && <cat.icon size={16} />}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED POST */}
        {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
          <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/5 border border-yellow-500/20 rounded-2xl overflow-hidden group hover:border-yellow-400/40 transition-all duration-300">
              
              {/* FEATURED BADGE */}
              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full">
                  <TrendingUp className="text-yellow-400" size={16} />
                  <span className="text-yellow-400 font-semibold text-sm">Featured</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* META INFO */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(featuredPost.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime} min read
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* READ MORE BUTTON */}
                <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300">
                  Read Article
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div ref={articlesRef}>
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    style={{
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    {/* CATEGORY BADGE & IMAGE */}
                    <div className="relative h-48 bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center text-6xl overflow-hidden">
                      {post.image}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* META INFO */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}m
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-400 text-lg mb-4">No articles found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className={`mt-24 bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 border border-yellow-500/20 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to get notified when new articles are published. No spam, just insights.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-all"
              />
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes blob {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(30px,-50px) scale(1.1);}
          66%{transform:translate(-20px,20px) scale(0.9);}
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </section>
  )
}