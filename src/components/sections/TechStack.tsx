import { SectionHeading, Table } from '../ui';

export default function TechStack() {
  return (
    <section>
      <SectionHeading id="tech-stack">Technology Stack</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Frontend</h3>
      <Table headers={['Technology', 'Purpose']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">React 18</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">UI framework</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">TypeScript</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Type safety</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Vite 5</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Build tool &amp; dev server</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Tailwind CSS 3</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Utility-first styling</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Framer Motion</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Animations &amp; transitions</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Recharts</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Dashboard charts &amp; graphs</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Lucide React</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Icon library</td>
        </tr>
      </Table>

      <h3 className="text-xl font-semibold mt-8 mb-3">Backend</h3>
      <Table headers={['Technology', 'Purpose']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">FastAPI</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">REST API framework (Python)</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">SQLAlchemy</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">ORM / database layer</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">SQLite</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Embedded database (default)</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Pydantic</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Request/response validation &amp; serialization</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Passlib + bcrypt</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Secure password hashing</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">gspread</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Google Sheets API client</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">google-auth / google-auth-oauthlib</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Google OAuth2 authentication</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Uvicorn</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">ASGI server</td>
        </tr>
      </Table>

      <h3 className="text-xl font-semibold mt-8 mb-3">Infrastructure</h3>
      <Table headers={['Technology', 'Purpose']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Docker &amp; Docker Compose</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Containerized deployment</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Nginx</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Frontend static file serving &amp; reverse proxy</td>
        </tr>
      </Table>
    </section>
  );
}
