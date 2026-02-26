import { SectionHeading, InlineCode } from '../ui';

export default function GoogleSheetsSetup() {
  return (
    <section>
      <SectionHeading id="google-sheets">Google Sheets Setup</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Option A: Service Account (recommended for production)</h3>
      <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Create a service account in <strong>Google Cloud Console</strong></li>
        <li>Download the JSON key file</li>
        <li>
          Set environment variable: <InlineCode>GOOGLE_SERVICE_ACCOUNT_FILE=/path/to/key.json</InlineCode>
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-3">Option B: OAuth2 (for development)</h3>
      <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Create OAuth 2.0 credentials in Google Cloud Console (Web application)</li>
        <li>
          Add authorized redirect URI:{' '}
          <InlineCode>http://localhost:8000/sheets/oauth/callback</InlineCode>
        </li>
        <li>
          Download <InlineCode>client_secret.json</InlineCode> and place it in{' '}
          <InlineCode>backend/</InlineCode>
        </li>
        <li>
          Start the backend and visit <InlineCode>http://localhost:8000/sheets/oauth/start</InlineCode>
        </li>
        <li>Authorize with your Google account</li>
        <li>
          Token is saved automatically to <InlineCode>backend/oauth_token.json</InlineCode>
        </li>
      </ol>
    </section>
  );
}
