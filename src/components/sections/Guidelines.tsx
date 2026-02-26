import { SectionHeading, InlineCode } from '../ui';

export default function Guidelines() {
  return (
    <section>
      <SectionHeading id="guidelines">Development Guidelines</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Code Standards</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li><strong className="text-blue-400">TypeScript:</strong> Strict mode enabled, no implicit any</li>
        <li><strong className="text-blue-400">Component Structure:</strong> Functional components with React hooks</li>
        <li><strong className="text-blue-400">Naming:</strong> PascalCase for components, camelCase for utilities and variables</li>
        <li><strong className="text-blue-400">Organization:</strong> Feature-based folders (pages, components, contexts, types)</li>
        <li><strong className="text-blue-400">Error Handling:</strong> Comprehensive try/catch with user-friendly toast notifications</li>
        <li><strong className="text-blue-400">State Management:</strong> React Context API (AuthContext + DataContext)</li>
        <li><strong className="text-blue-400">API Layer:</strong> Centralized fetch calls in DataContext</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Workflow</h3>
      <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Create feature branches from <InlineCode>main</InlineCode></li>
        <li>Implement features with proper types</li>
        <li>Test across both user roles (Admin &amp; Tutor)</li>
        <li>Submit Pull Requests with descriptive commits</li>
        <li>Code review before merge</li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-3">Backend Conventions</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>All endpoints defined in <InlineCode>main.py</InlineCode></li>
        <li>Database operations isolated in <InlineCode>crud.py</InlineCode></li>
        <li>
          Schemas in <InlineCode>schemas.py</InlineCode> with Pydantic alias support (
          <InlineCode>camelCase ↔ snake_case</InlineCode>)
        </li>
        <li>
          Google Sheets logic in <InlineCode>sheets.py</InlineCode> — sync failures are logged but never block API
          responses
        </li>
      </ul>
    </section>
  );
}
