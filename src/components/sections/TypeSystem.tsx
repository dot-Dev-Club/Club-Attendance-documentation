import { SectionHeading, CodeBlock, Table, InlineCode } from '../ui';

export default function TypeSystem() {
  return (
    <section>
      <SectionHeading id="type-system">Type System</SectionHeading>
      <p className="mb-3.5">
        TypeScript ensures strong type safety and clear interface contracts across the frontend.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        Core Types <InlineCode>frontend/src/types/index.ts</InlineCode>
      </h3>
      <CodeBlock>{`type UserRole = 'admin' | 'tutor';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  clubId: string;
  clubName?: string;
  clubColor?: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  registerNo?: string;
  clubId: string;
  enrollmentDate: string;
}

interface Session {
  id: string;
  name: string;
  date: string;
  time: string;
  clubId: string;
  createdBy: string;
  createdAt: string;
  sheetSavedAt?: string | null;
}

interface AttendanceRecord {
  id: string;
  sessionId: string;
  studentId: string;
  status: 'present' | 'absent' | 'late';
  markedBy: string;
  markedAt: string;
}`}</CodeBlock>

      <h3 className="text-xl font-semibold mt-8 mb-3">Backend Schemas (Pydantic)</h3>
      <Table headers={['Schema', 'Purpose']}>
        {[
          ['LoginPayload', 'Login request (email + password)'],
          ['UserOut', 'User response with club info'],
          ['StudentOut / StudentCreate / StudentUpdate', 'Student CRUD schemas'],
          ['SessionOut / SessionCreate / SessionUpdate', 'Session CRUD schemas'],
          ['AttendanceItem / AttendanceSave / AttendanceOut', 'Attendance marking & response'],
          ['SheetsSave', 'Google Sheets save payload'],
          ['ClubOut', 'Club info response'],
        ].map(([schema, purpose]) => (
          <tr key={schema}>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{schema}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">{purpose}</td>
          </tr>
        ))}
      </Table>

      <h3 className="text-xl font-semibold mt-8 mb-3">Database Models (SQLAlchemy)</h3>
      <Table headers={['Model', 'Table', 'Key Fields']}>
        {[
          ['Club', 'clubs', 'id, name, description, color'],
          ['User', 'users', 'id, name, email, password_hash, role, club_id'],
          ['Student', 'students', 'id, name, email, register_no, club_id, enrollment_date'],
          ['Session', 'sessions', 'id, name, date, time, club_id, created_by, created_at, sheet_saved_at'],
          ['AttendanceRecord', 'attendance_records', 'id, session_id, student_id, status, marked_by, marked_at'],
        ].map(([model, table, fields]) => (
          <tr key={model}>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{model}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{table}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">{fields}</td>
          </tr>
        ))}
      </Table>

      <h4 className="text-base font-semibold mt-6 mb-2 text-slate-400">Benefits</h4>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Compile-time error checking (TypeScript strict mode)</li>
        <li>IntelliSense &amp; autocomplete in IDEs</li>
        <li>Consistent, validated data structures across frontend and backend</li>
        <li>Pydantic ensures runtime validation on all API requests</li>
      </ul>
    </section>
  );
}
