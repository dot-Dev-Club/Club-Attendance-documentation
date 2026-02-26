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

  return (
    <aside className="fixed top-0 left-0 w-[280px] h-screen bg-slate-800 border-r border-slate-600 overflow-y-auto z-50 py-6 hidden lg:block">
      {/* Brand */}
      <div className="px-6 pb-5 border-b border-slate-600 mb-4">
        <h2 className="text-[15px] text-blue-500 tracking-[1.5px] uppercase font-semibold">CA</h2>
        <p className="text-xl font-bold text-slate-200 mt-1">Club Attendance</p>
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
    </aside>
  );
}
