import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      {/* background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-5 items-center gap-12 lg:gap-16">

          {/* LEFT */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-yellow-400">
                Beyzanur Kayaci!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Software Engineer & AI Developer building full-stack,
              data-driven applications and intelligent systems using
              Python, SQL, Django, React, and modern generative AI technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => navigate('/projects')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 text-center"
              >
                View My Work
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              >
                Get in Touch
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`lg:col-span-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <img
              src="/C12.png"
              alt="Hero"
              className="w-full max-w-sm lg:max-w-md animate-float drop-shadow-[0_20px_60px_rgba(250,204,21,0.35)]"
            />
          </div>

        </div>
      </div>

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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}