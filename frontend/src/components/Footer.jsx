import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('http://localhost:3000/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.status === 409) {
        setStatus('duplicate')
      } else if (!res.ok) {
        setStatus('error')
      } else {
        setStatus('success')
        setEmail('')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="w-full bg-[#0b0b0f] border-t border-yellow-500/10 py-12">

      {/* FULL WIDTH CONTENT */}
      <div className="w-full px-8">

        <div className="grid md:grid-cols-3 gap-8 mb-12 w-full">

          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Portfolio
            </h3>
            <p className="text-slate-400 text-sm">
              A creative developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to my newsletter for latest updates.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 px-4 py-2 bg-white/10 border border-yellow-500/20 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-medium transition-colors duration-300 text-sm disabled:opacity-50"
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-xs mt-2">✓ Subscribed! Check your inbox.</p>
              )}
              {status === 'duplicate' && (
                <p className="text-yellow-400 text-xs mt-2">You're already subscribed!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/10 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">

            <p className="text-slate-400 text-sm">
              © {currentYear} Foxic Universe. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/Beyzanrkyc" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-xl">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/beyzanurkayaci/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-xl">
                💼
              </a>
              <a href="https://www.instagram.com/beyzanrkycc/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-xl">
                📸
              </a>
              <a href="mailto:beyzanurkyc.bk@gmail.com"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-xl">
                📧
              </a>
            </div>

            <p className="text-slate-500 text-xs">
              Made with ❤️ by Beyzanur Kayaci
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}