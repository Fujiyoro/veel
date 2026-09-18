import { useState } from 'react'

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Changelog', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

const RESOURCE_LINKS = [
  { label: 'Guides', href: '#' },
  { label: 'Help center', href: '#' },
  { label: 'Documentation', href: '#' },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[11px] font-mono font-normal text-[#7f827c] uppercase tracking-[0.08em] mt-[3px] mb-[15px]">
        {title}
      </h4>
      <ul className="list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.label} className="text-[13px] mb-[10px] text-[#b8bbb4]">
            <a href={link.href} className="hover:text-off-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer className="bg-dark text-off-white pt-[65px] pb-[25px]" id="pricing">
      <div className="wrap">
        <div className="grid grid-cols-1 min-[601px]:grid-cols-2 min-[801px]:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-[35px]">
          <div className="min-[601px]:col-span-2 min-[801px]:col-span-1">
            <div className="text-[25px] font-bold tracking-[-0.06em]">
              Novi<span className="text-accent">.</span>
            </div>
            <div className="text-[#8e918b] text-[13px] leading-[1.5] max-w-[180px] mt-[13px]">
              A calmer place for teams to get things done.
            </div>
          </div>
          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <div className="min-[601px]:col-span-2 min-[801px]:col-span-1">
            <h4 className="text-[11px] font-mono font-normal text-[#7f827c] uppercase tracking-[0.08em] mt-[3px] mb-[15px]">
              Stay in the loop
            </h4>
            <p className="text-[13px] text-[#9da099] leading-[1.5] m-0 mb-3">Occasional product notes. No noise.</p>
            <form className="flex border border-[#464945] rounded-lg p-1" onSubmit={handleSubmit}>
              <input
                aria-label="Email address"
                type="email"
                placeholder="you@company.com"
                required
                className="bg-transparent border-0 outline-none text-white min-w-0 p-[9px] text-xs flex-1"
              />
              <button
                className="bg-accent text-accent-ink font-semibold border-0 rounded-[5px] px-3 cursor-pointer text-[11px]"
                type="submit"
              >
                Join
              </button>
            </form>
            {submitted && <p className="text-[11px] text-accent mt-2 mb-0">Thanks — you're on the list.</p>}
          </div>
        </div>
        <div className="border-t border-[#393c38] mt-[55px] pt-5 flex justify-between max-[800px]:flex-col max-[800px]:gap-[15px] text-[#70736d] text-[11px]">
          <span>© 2026 Novi, Inc.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-off-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-off-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-off-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
