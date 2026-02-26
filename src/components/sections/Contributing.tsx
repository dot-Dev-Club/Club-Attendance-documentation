import { SectionHeading, Card, CardGrid, InlineCode } from '../ui';

export default function Contributing() {
  return (
    <section>
      <SectionHeading id="contributing">Contributing</SectionHeading>
      <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Fork the repository</li>
        <li>
          Create a feature branch (<InlineCode>git checkout -b feature/amazing-feature</InlineCode>)
        </li>
        <li>Commit changes with clear, descriptive messages</li>
        <li>Test across both roles (Admin &amp; Tutor)</li>
        <li>Push and open a Pull Request</li>
      </ol>

      <h4 className="text-base font-semibold mt-6 mb-2 text-slate-400">Contribution Areas</h4>
      <CardGrid>
        <Card title="🐛 Bug Fixes">Find and fix issues in the codebase</Card>
        <Card title="✨ New Features">Add new functionality or endpoints</Card>
        <Card title="📖 Documentation">Improve docs, READMEs, and comments</Card>
        <Card title="🎨 UI/UX">Improve design, accessibility, responsiveness</Card>
        <Card title="🔒 Security">Strengthen auth, input validation, CORS</Card>
        <Card title="⚡ Performance">Optimize queries, bundle size, caching</Card>
      </CardGrid>
    </section>
  );
}
