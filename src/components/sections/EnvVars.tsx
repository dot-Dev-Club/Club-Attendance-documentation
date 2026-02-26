import { SectionHeading, Table, InlineCode } from '../ui';

export default function EnvVars() {
  return (
    <section>
      <SectionHeading id="env-vars">Environment Variables</SectionHeading>
      <Table headers={['Variable', 'Default', 'Description']}>
        {[
          ['DATABASE_URL', 'sqlite:///./db.sqlite', 'Database connection string'],
          ['FRONTEND_ORIGIN', '*', 'CORS allowed origin'],
          ['VITE_API_BASE', 'http://localhost:8000', 'API base URL (frontend, build-time)'],
          ['GOOGLE_SERVICE_ACCOUNT_FILE', '—', 'Path to service account JSON'],
          ['GOOGLE_OAUTH_CLIENT_SECRETS', 'backend/client_secret.json', 'Path to OAuth client secrets'],
          ['GOOGLE_OAUTH_TOKEN_FILE', 'backend/oauth_token.json', 'Path to OAuth token file'],
          ['OAUTH_REDIRECT_URI', 'http://localhost:8000/sheets/oauth/callback', 'OAuth redirect URI'],
        ].map(([variable, def, desc]) => (
          <tr key={variable}>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{variable}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{def}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">{desc}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
