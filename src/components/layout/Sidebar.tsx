import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

/** All section IDs in document order */
const allIds = [
  'introduction', 'architecture', 'features', 'tech-stack', 'structure',
  'setup', 'docker', 'google-sheets',
  'api', 'type-system', 'env-vars', 'sheets-structure',
  'guidelines', 'testing', 'contributing', 'support',
];

const sections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Introduction', href: '#introduction' },
      { label: 'System Architecture', href: '#architecture' },
      { label: 'Features & User Roles', href: '#features' },
      { label: 'Technology Stack', href: '#tech-stack' },
      { label: 'Project Structure', href: '#structure' },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { label: 'Setup & Deployment', href: '#setup' },
      { label: 'Docker Deployment', href: '#docker' },
      { label: 'Google Sheets Setup', href: '#google-sheets' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { label: 'API Reference', href: '#api' },
      { label: 'Type System', href: '#type-system' },
      { label: 'Environment Variables', href: '#env-vars' },
      { label: 'Sheets Structure', href: '#sheets-structure' },
    ],
  },
  {
    title: 'Development',
    items: [
      { label: 'Development Guidelines', href: '#guidelines' },
      { label: 'Testing', href: '#testing' },
      { label: 'Contributing', href: '#contributing' },
      { label: 'Support & Licensing', href: '#support' },
    ],
  },
];

export default function Sidebar() {
  const [active, setActive] = useState('#introduction');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry);
        });

        // Pick the first visible section in document order
        for (const id of allIds) {
          const entry = visibleSections.get(id);
          if (entry?.isIntersecting) {
            setActive(`#${id}`);
            return;
          }
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navContent = (
    <>
      {/* Brand */}
      <div className="px-6 pb-5 border-b border-slate-600 mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-[15px] text-blue-500 tracking-[1.5px] uppercase font-semibold">CA</h2>
          <p className="text-xl font-bold text-slate-200 mt-1">Club Attendance</p>
        </div>
        {/* Close button — mobile only */}
        <button
          className="lg:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-3">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="text-[11px] uppercase tracking-[1.2px] text-slate-400 px-4 pt-4 pb-1.5 font-semibold">
              {section.title}
            </div>
            {section.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm transition-all mb-0.5 ${
                  active === item.href
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-slate-400 hover:bg-blue-500/15 hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* ── Mobile top bar ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-slate-800/95 backdrop-blur border-b border-slate-600 flex items-center px-4 h-14">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-slate-300 hover:text-white"
          aria-label="Open navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-3 text-sm font-semibold text-slate-200 truncate">Club Attendance Docs</span>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`sidebar-overlay fixed inset-0 bg-black/50 z-40 lg:hidden ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`sidebar-drawer fixed top-0 left-0 w-[280px] max-w-[85vw] h-screen bg-slate-800 border-r border-slate-600 overflow-y-auto z-50 py-6 lg:hidden ${mobileOpen ? 'open' : ''}`}
      >
        {navContent}
      </aside>

      {/* ── Desktop sidebar ── */}
      <aside className="fixed top-0 left-0 w-[280px] h-screen bg-slate-800 border-r border-slate-600 overflow-y-auto z-50 py-6 hidden lg:block">
        {navContent}
      </aside>
    </>
  );
}
