import { useEffect, useRef, useState } from 'react'

export default function Skills() {
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

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 85 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'UI/UX Design', level: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills & Expertise
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 150}ms` : '0ms',
              }}
            >
              <div className="card-glass p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: isVisible ? `${categoryIndex * 150 + 200}ms` : '0ms',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div
            className={`card-glass p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? '450ms' : '0ms',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">What I Offer</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Custom web application development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Responsive & mobile-first design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Performance optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Full-stack development support</span>
              </li>
            </ul>
          </div>

          <div
            className={`card-glass p-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? '600ms' : '0ms',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 font-semibold">Senior Developer</h4>
                <p className="text-slate-400 text-sm">Tech Company | 2022 - Present</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold">Full Stack Developer</h4>
                <p className="text-slate-400 text-sm">Startup Inc | 2020 - 2022</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold">Junior Developer</h4>
                <p className="text-slate-400 text-sm">Dev Studio | 2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}