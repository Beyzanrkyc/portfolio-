export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-slate-950/50 border-t border-white/10 py-12 px-4">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio</h3>
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
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
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
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Your Name. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                title="GitHub"
              >
                <span className="text-xl">🐙</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                title="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                title="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                title="Email"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>

            {/* Made with love */}
            <p className="text-slate-500 text-xs text-center md:text-right">
              Made with ❤️ by Your Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}