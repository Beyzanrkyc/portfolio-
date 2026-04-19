import { useState, useRef, useEffect } from 'react'
import { Mail, Linkedin, Github, Twitter, Send, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'beyzanurkyc.bk@gmail.com',
      href: 'beyzanurkyc.bk@gmail.com',
      desc: 'Direct message'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/beyzanurkayaci/',
      href: 'https://www.linkedin.com/in/beyzanurkayaci/',
      desc: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Beyzanrkyc',
      href: 'https://github.com/Beyzanrkyc',
      desc: 'Code & projects'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@yourtwitter',
      href: 'https://twitter.com/yourtwitter',
      desc: 'Latest updates'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-24 py-20 mt-20">

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-6xl">

        {/* HEADER */}
        <div className={`max-w-2xl mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ marginBottom: '3rem' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to chat about tech, AI, and creative ideas?
            I'm always interested in connecting with brilliant minds. Drop me a message and let's create something amazing together.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* CONTACT FORM */}
          <div ref={formRef} className={`transition-all duration-1000 delay-300 opacity-0 ${isVisible ? 'opacity-100' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME INPUT */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* EMAIL INPUT */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* SUBJECT INPUT */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project collaboration"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or just say hi!"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading || submitted}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500 hover:bg-yellow-600 text-black border border-yellow-500'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

          {/* CONTACT METHODS & INFO */}
          <div className={`transition-all duration-1000 delay-500 opacity-0 ${isVisible ? 'opacity-100' : ''}`}>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mb-12" style={{ marginBottom: '1rem' }}>
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <Icon className="text-yellow-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{method.label}</h3>
                        <p className="text-slate-400 text-sm mb-2">{method.desc}</p>
                        <p className="text-yellow-400 font-medium text-sm">{method.value}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* RESPONSE TIME */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-slate-300 text-sm">
                I typically respond to messages within <span className="text-yellow-400 font-semibold">24 hours</span>. 
                Whether you have a project proposal, collaboration idea, or just want to connect, I'm excited to hear from you!
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
        .animate-blob{animation:blob 7s infinite;}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}

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

        .animate-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        input:focus,
        textarea:focus {
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.1);
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 6px;
        }

        textarea::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: rgba(250, 204, 21, 0.3);
          border-radius: 10px;
        }

        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(250, 204, 21, 0.5);
        }
      `}</style>

    </section>
  )
}