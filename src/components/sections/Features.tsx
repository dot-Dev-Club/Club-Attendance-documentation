import { SectionHeading, Card, CardGrid, Table, RoleTag } from '../ui';

export default function Features() {
  return (
    <section>
      <SectionHeading id="features">Features &amp; User Roles</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Features</h3>
      <CardGrid>
        <Card title="🔐 Authentication">
          Email + password login with bcrypt hashing. Role-based access control per club.
        </Card>
        <Card title="📊 Dashboard">
          Visual analytics with Recharts — attendance rates, session history, student performance.
        </Card>
        <Card title="📅 Session Management">
          Create, edit, delete sessions. Auto-synced to Google Sheets on every change.
        </Card>
        <Card title="👥 Student Management">
          Add, edit, remove students with register numbers. Auto-synced to Sheets.
        </Card>
        <Card title="✅ Attendance Marking">
          Mark Present / Late / Absent with a 2-hour time window per session.
        </Card>
        <Card title="☁️ Google Sheets Sync">
          Per-club spreadsheets with formatted tables, auto-created yearly sheets &amp; weekly attendance tabs.
        </Card>
        <Card title="📜 Attendance History">
          Detailed per-session and per-student attendance records with filtering.
        </Card>
        <Card title="🌗 Dark / Light Mode">
          Full dark and light theme support with system preference detection.
        </Card>
        <Card title="📱 Responsive Design">
          Works on desktop and mobile with collapsible sidebar navigation.
        </Card>
      </CardGrid>

      <h3 className="text-xl font-semibold mt-8 mb-3">User Roles</h3>
      <Table headers={['Role', 'Capabilities']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <RoleTag role="admin" />
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            Full access — manage sessions, students, mark attendance, sync to Sheets, view dashboard &amp; history.
          </td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <RoleTag role="tutor" />
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            Mark attendance, view sessions &amp; students, view dashboard &amp; history for their assigned club.
          </td>
        </tr>
      </Table>
      <p>Each user is scoped to a single club. Data isolation ensures clubs cannot see each other's records.</p>
    </section>
  );
}
