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
    <footer className="w-full bg-[#0b0b0f] border-t border-yellow-500/10 py-12">

      {/* FULL WIDTH CONTENT */}
      <div className="w-full px-8">

        <div className="grid md:grid-cols-3 gap-8 mb-12 w-620">

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
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
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
                className="flex-1 px-4 py-2 bg-white/10 border border-yellow-500/20 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-500"
              />

              <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-medium transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/10 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-620">

            <p className="text-slate-400 text-sm">
              © {currentYear} Foxic Universe. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span className="text-slate-400 hover:text-yellow-400 cursor-pointer">🐙</span>
              <span className="text-slate-400 hover:text-yellow-400 cursor-pointer">💼</span>
              <span className="text-slate-400 hover:text-yellow-400 cursor-pointer">𝕏</span>
              <span className="text-slate-400 hover:text-yellow-400 cursor-pointer">📧</span>
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