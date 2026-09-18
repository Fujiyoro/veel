import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#resources', label: 'Resources' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

 
  const background = menuOpen ? 'bg-bg' : 'bg-bg/90 backdrop-blur-md'


  const size = scrolled
    ? 'py-3 border-b border-line shadow-[0_1px_16px_rgba(23,24,23,0.06)]'
    : 'py-5 border-b border-transparent'

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${background} ${size}`}>
      <div className="wrap">
        <nav className="h-12 flex items-center justify-between">
          <a className="text-[22px] font-bold tracking-[-0.06em]" href="#">
            Novi<span className="text-accent-strong">.</span>
          </a>
          <div className="hidden min-[801px]:flex gap-[30px] text-[#5f605c] text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className="hover:text-ink transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="hidden min-[801px]:inline-block bg-ink text-off-white border-0 rounded-full px-[18px] py-[11px] cursor-pointer transition-transform hover:-translate-y-px"
            onClick={() => alert("Can't start for free in this economy :)")}
          >
            Start free
          </button>
          <button
            className="min-[801px]:hidden bg-none border-0 text-[25px] cursor-pointer"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </nav>
        {menuOpen && (
          <div className="min-[801px]:hidden pt-[18px] pb-2 border-t border-line">
            <div className="grid gap-[14px] text-sm">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
