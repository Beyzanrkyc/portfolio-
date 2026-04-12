import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  return (
    <section id="about" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="card-glass h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                <p className="text-slate-400">Your Photo Here</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a passionate developer with 5+ years of experience building web applications. I love creating beautiful, user-friendly interfaces that solve real-world problems.
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</span>
                <span className="text-slate-300">Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</span>
                <span className="text-slate-300">React & Modern JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</span>
                <span className="text-slate-300">UI/UX Design & Responsive Layout</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</span>
                <span className="text-slate-300">Database Design & Backend APIs</span>
              </div>
            </div>

            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}