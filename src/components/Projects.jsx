import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '✓',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard showing real-time weather data with beautiful visualizations.',
      technologies: ['React', 'API', 'Chart.js', 'Axios'],
      image: '🌤️',
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Social Network',
      description: 'A social networking platform with user profiles, messaging, and feed functionality.',
      technologies: ['React', 'Django', 'PostgreSQL', 'WebSocket'],
      image: '👥',
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with data visualization and reporting tools.',
      technologies: ['React', 'D3.js', 'Express', 'MySQL'],
      image: '📊',
      link: '#',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support and SEO optimization.',
      technologies: ['Next.js', 'Markdown', 'Prisma', 'PostgreSQL'],
      image: '📝',
      link: '#',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group card-glass overflow-hidden transition-all duration-1000 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Project Image Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-white/10 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/40 transition-colors text-center text-sm font-medium"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="flex-1 px-4 py-2 bg-slate-600/20 text-slate-300 rounded-lg hover:bg-slate-600/40 transition-colors text-center text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}