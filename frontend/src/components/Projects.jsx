import { useEffect, useState } from "react";
import { ExternalLink, Github, Code2, Zap, Award, TrendingUp } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "MediFlow - AI Healthcare Workflow System",
      desc: "An intelligent healthcare workflow management system powered by AI. Automates patient data processing, appointment scheduling, and medical record analysis using machine learning.",
      fullDesc: "Built with React, Django, PostgreSQL, and TensorFlow. Features real-time data processing, secure patient information handling, and AI-driven insights for healthcare professionals.",
      tech: ["React", "Django", "PostgreSQL", "TensorFlow", "Python"],
      link: "#",
      github: "#",
      featured: true,
      image: "🏥"
    },
    {
      title: "AI Resume Analyzer",
      desc: "Intelligent resume analysis tool that uses NLP and machine learning to evaluate resumes and provide actionable feedback.",
      fullDesc: "Processes resumes in multiple formats, extracts key information, scores applicants based on job requirements, and generates detailed improvement suggestions.",
      tech: ["React", "Python", "Django", "OpenAI", "NLP"],
      link: "#",
      github: "#",
      featured: true,
      image: "📄"
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack online store with secure payments, inventory management, and admin dashboard for store operations.",
      fullDesc: "Complete e-commerce solution with user authentication, product catalog, shopping cart, payment processing, order tracking, and admin controls.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      link: "#",
      github: "#",
      featured: false,
      image: "🛒"
    },
    {
      title: "ChatGPT Clone",
      desc: "Real-time AI chat application with streaming responses, conversation history, and multiple AI models support.",
      fullDesc: "Built with React for the frontend and Node.js backend. Integrates with OpenAI API for real-time streaming responses and maintains conversation context.",
      tech: ["React", "Node.js", "OpenAI API", "Tailwind", "WebSocket"],
      link: "#",
      github: "#",
      featured: false,
      image: "💬"
    },
    {
      title: "Facial Expression Recognition System",
      desc: "CNN-based deep learning project for real-time facial expression detection and emotion classification.",
      fullDesc: "Uses convolutional neural networks trained on facial expression datasets. Provides real-time emotion detection with high accuracy.",
      tech: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
      link: "#",
      github: "#",
      featured: false,
      image: "😊"
    },
    {
      title: "Multi-Agent Simulation Platform",
      desc: "Distributed system simulating multiple autonomous agents interacting in a shared environment with complex behaviors.",
      fullDesc: "Educational platform demonstrating multi-agent systems, reinforcement learning, and emergent behavior patterns in simulated environments.",
      tech: ["Python", "PyTorch", "Matplotlib", "Numpy", "Reinforcement Learning"],
      link: "#",
      github: "#",
      featured: false,
      image: "🤖"
    }
  ];

  const coreCompetencies = [
    { title: 'Full-Stack Development', icon: Code2 },
    { title: 'AI/ML Integration', icon: Zap },
    { title: 'Scalable Architecture', icon: TrendingUp },
    { title: 'Problem Solving', icon: Award }
  ]

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section 
      className="relative min-h-screen flex items-start justify-center overflow-hidden px-6 lg:px-24"
      style={{ paddingTop: '200px' }}
    >
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-4xl">

        {/* HEADER */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`} 
          style={{ marginBottom: '6rem' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-yellow-400">Projects</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            A selection of projects where I combine full-stack development with AI 
            to build scalable and impactful applications. From healthcare automation 
            to intelligent resume analysis, each project demonstrates my expertise 
            in modern technologies.
          </p>
        </div>

        {/* CORE COMPETENCIES */}
        <div 
          className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ marginBottom: '6rem' }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">What I Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <h3 className="text-white font-semibold text-sm">{comp.title}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-10">Featured Projects</h2>
          <div className="space-y-0">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/5 border border-yellow-500/20 rounded-2xl overflow-hidden transition-all duration-1000 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 200}ms`, marginBottom: '6rem' }}
              >
                {/* FEATURED BADGE */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full">
                    <span className="text-yellow-400 font-semibold text-sm">⭐ Featured</span>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  {/* TITLE & IMAGE */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl flex-shrink-0">{project.image}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {project.fullDesc}
                      </p>
                    </div>
                  </div>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                    >
                      View Code
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER PROJECTS */}
        {otherProjects.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="text-3xl font-bold text-white mb-10">Other Projects</h2>
            <div className="space-y-0">
              {otherProjects.map((project, i) => (
                <div
                  key={i}
                  className={`group bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/30 hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(featuredProjects.length + i) * 150}ms`, marginBottom: '6rem' }}
                >
                  <div className="p-8">
                    {/* TITLE & IMAGE */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl flex-shrink-0">{project.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* TECH TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* LINKS */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-yellow-400 font-semibold transition-colors"
                      >
                        Code
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
      `}</style>
    </section>
  );
}