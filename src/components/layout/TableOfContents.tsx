const tocItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'System Architecture', href: '#architecture' },
  { label: 'Features & User Roles', href: '#features' },
  { label: 'Technology Stack', href: '#tech-stack' },
  { label: 'Project Structure', href: '#structure' },
  { label: 'Setup & Deployment', href: '#setup' },
  { label: 'Docker Deployment', href: '#docker' },
  { label: 'Google Sheets Setup', href: '#google-sheets' },
  { label: 'API Reference', href: '#api' },
  { label: 'Type System', href: '#type-system' },
  { label: 'Environment Variables', href: '#env-vars' },
  { label: 'Google Sheets Structure', href: '#sheets-structure' },
  { label: 'Development Guidelines', href: '#guidelines' },
  { label: 'Testing', href: '#testing' },
  { label: 'Contributing', href: '#contributing' },
  { label: 'Support & Licensing', href: '#support' },
];

export default function TableOfContents() {
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-xl px-8 py-6 my-6 mb-10">
      <h3 className="text-base font-semibold mb-3">Contents</h3>
      <ol className="list-decimal pl-5 space-y-1">
        {tocItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-blue-400 text-sm hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
