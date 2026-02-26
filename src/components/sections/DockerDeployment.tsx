import { SectionHeading, CodeBlock, Table, InlineCode } from '../ui';

export default function DockerDeployment() {
  return (
    <section>
      <SectionHeading id="docker">Docker Deployment</SectionHeading>
      <p className="mb-3.5">
        The project includes a <InlineCode>docker-compose.yml</InlineCode> for one-command deployment:
      </p>
      <CodeBlock>{`# Build and start all services
docker-compose up --build -d

# Backend  → http://localhost:8000
# Frontend → http://localhost:80`}</CodeBlock>

      <h4 className="text-base font-semibold mt-6 mb-2 text-slate-400">Services</h4>
      <Table headers={['Service', 'Container', 'Port', 'Description']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><InlineCode>backend</InlineCode></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">club_backend</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">8000</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">FastAPI / Uvicorn API server</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><InlineCode>frontend</InlineCode></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">club_frontend</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">80</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">React app served by Nginx</td>
        </tr>
      </Table>

      <h4 className="text-base font-semibold mt-6 mb-2 text-slate-400">Volumes &amp; Networks</h4>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>
          <strong className="text-blue-400">db_data</strong> — persists the SQLite database (
          <InlineCode>club_attendance.db</InlineCode>) across restarts
        </li>
        <li>
          <strong className="text-blue-400">club_attendance_net</strong> — bridge network connecting frontend ↔ backend
        </li>
        <li>Google credential files are mounted read-only into the backend container</li>
      </ul>
    </section>
  );
}
