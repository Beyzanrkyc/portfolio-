import { useEffect, useRef, useState } from 'react'
import { Code2, Brain, Database, Zap, Award, TrendingUp } from 'lucide-react'

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const categoriesRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryName = entry.target.getAttribute('data-category')
            setVisibleCategories(prev => ({
              ...prev,
              [categoryName]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-category]').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      name: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', desc: 'Primary language for AI/ML' },
        { name: 'JavaScript', desc: 'Frontend & backend' },
        { name: 'React', desc: 'Component-based UI' },
        { name: 'TypeScript', desc: 'Type safety' },
        { name: 'SQL', desc: 'Database queries' },
        { name: 'HTML/CSS', desc: 'Web fundamentals' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow/Keras', desc: 'Deep learning framework' },
        { name: 'PyTorch', desc: 'Neural networks' },
        { name: 'Scikit-learn', desc: 'ML algorithms' },
        { name: 'NLP (BERT, Transformers)', desc: 'Text processing' },
        { name: 'Computer Vision (CNN)', desc: 'Image processing' },
        { name: 'Data Analysis (Pandas)', desc: 'Data manipulation' }
      ]
    },
    {
      name: 'Backend & Databases',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Django', desc: 'Python web framework' },
        { name: 'FastAPI', desc: 'Modern API development' },
        { name: 'PostgreSQL', desc: 'Relational database' },
        { name: 'MongoDB', desc: 'NoSQL database' },
        { name: 'REST APIs', desc: 'API design' },
        { name: 'Docker', desc: 'Containerization' }
      ]
    },
    {
      name: 'Tools & Technologies',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git/GitHub', desc: 'Version control' },
        { name: 'Linux/Terminal', desc: 'Command line' },
        { name: 'VS Code', desc: 'Code editor' },
        { name: 'Jupyter Notebook', desc: 'Data science' },
        { name: 'Figma', desc: 'UI/UX Design' },
        { name: 'Postman', desc: 'API testing' }
      ]
    }
  ]

  const coreCompetencies = [
    { title: 'Full-Stack Development', icon: Code2 },
    { title: 'AI/ML Integration', icon: Brain },
    { title: 'Scalable Architecture', icon: TrendingUp },
    { title: 'Data-Driven Solutions', icon: Database },
    { title: 'Problem Solving', icon: Award },
    { title: 'Fast Learner', icon: Zap }
  ]

  return (
    <section 
      className="relative min-h-screen flex items-start justify-center overflow-hidden px-6 lg:px-24"
      style={{ paddingTop: '200px' }}
    >

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-6xl">

        {/* HEADER */}
        <div className={`max-w-3xl mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '6rem' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-yellow-400">Skills</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            A comprehensive toolkit built through hands-on experience. I combine cutting-edge AI technologies 
            with solid full-stack development practices to create intelligent, scalable applications.
          </p>
        </div>

        {/* CORE COMPETENCIES */}
        <div className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {coreCompetencies.map((comp, i) => {
              const Icon = comp.icon
              return (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 group-hover:bg-yellow-500/20 rounded-lg transition-colors">
                      <Icon className="text-yellow-400" size={20} />
                    </div>
                    <h3 className="text-white font-semibold">{comp.title}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="space-y-20" style={{ marginBottom: '6rem' }}>
          {skillCategories.map((category, categoryIdx) => {
            const Icon = category.icon
            const isVisible = visibleCategories[category.name]

            return (
              <div
                key={categoryIdx}
                data-category={category.name}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* CATEGORY HEADER */}
                <div className="flex items-center gap-3 mb-10">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                </div>

                {/* SKILLS GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: '6rem' }}>
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-400/20 transition-all duration-300"
                      style={{
                        animationDelay: `${skillIdx * 0.1}s`
                      }}
                    >
                      {/* SKILL NAME & DESCRIPTION */}
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-300 transition-colors">{skill.name}</h3>
                        <p className="text-slate-400 text-sm">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* LEARNING & GROWTH */}
        <div className={`mt-24 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/5 border border-yellow-500/20 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '6rem' }}>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg flex-shrink-0">
              <TrendingUp className="text-yellow-400" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm constantly evolving my skillset. Currently exploring advanced areas like multimodal AI, 
                edge computing, and distributed systems. I believe in staying ahead of the curve and adapting 
                to emerging technologies that create real impact.
              </p>
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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Stagger animation for skill cards */
        [data-category] div:nth-child(n+3) {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>

    </section>
  )
}