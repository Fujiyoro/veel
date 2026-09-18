
const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 16h4M16 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Boards that move at your speed',
    body: 'Plan sprints and track tasks without hunting through spreadsheets. Kanban, list, or timeline — switch views in one click.',
    accent: '#FF5F3D',
    iconBg: 'rgba(255,95,61,0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 10h10M4 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 15h3M17 13.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Threads, not another inbox',
    body: 'Keep project conversations attached to the work itself. No context-switching, no lost threads, no more Slack archaeology.',
    accent: '#6366F1',
    iconBg: 'rgba(99,102,241,0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 12h2M10 12h6M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'One timeline for the whole team',
    body: "Every deadline and milestone in one shared view. See what's shipping, what's blocked, and what's next — at a glance.",
    accent: '#4ADE80',
    iconBg: 'rgba(74,222,128,0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 15l-4 4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Works the way you already do',
    body: "Import from Trello, Asana, or a spreadsheet in minutes. Your team's history comes with you — nothing gets left behind.",
    accent: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.08)',
  },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-glow" />

      <div className="features-inner">
        <div className="features-head" data-aos="fade-up">
          <div className="features-label">Features</div>
          <h2 className="features-heading">
            Everything your team needs.
            <br />
            <em>Nothing it doesn't.</em>
          </h2>
          <p className="features-sub">
            Designed for small teams who hate overhead. Every feature earns its place.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
        
            <div key={feature.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <article
                className="feature-card"
                style={{ '--accent': feature.accent, '--icon-bg': feature.iconBg }}
              >
                <span className="feature-card-topglow" />
                <span className="feature-card-corner" />

                <div className="feature-card-icon">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-body">{feature.body}</p>

                <span className="feature-card-baseline" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
