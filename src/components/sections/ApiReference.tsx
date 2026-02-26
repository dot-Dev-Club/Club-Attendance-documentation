import { SectionHeading, Endpoint, CodeBlock, Table, InlineCode } from '../ui';

export default function ApiReference() {
  return (
    <section>
      <SectionHeading id="api">API Reference</SectionHeading>
      <p className="mb-3.5">
        Below are all API endpoints with example requests and sample responses. Replace tokens, IDs, and data
        as appropriate.
      </p>

      {/* ── Authentication ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Authentication</h3>
      <Endpoint method="POST" path="/login" description="Authenticate a user with email and password. Returns user profile with club info.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X POST http://localhost:8000/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"dharshankumarjeyakumar@karunya.edu.in","password":"Dharshan18@Clubpass"}'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "id": "user-dharshan",
  "name": "Dharshan Kumar",
  "email": "dharshankumarjeyakumar@karunya.edu.in",
  "role": "admin",
  "club_id": "club-dotdev",
  "clubName": "DotDev",
  "clubColor": "#3B82F6"
}`}</CodeBlock>
      </Endpoint>

      {/* ── Sessions ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Sessions</h3>

      <Endpoint method="GET" path="/sessions?clubId={clubId}" description="List all sessions for a club.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl http://localhost:8000/sessions?clubId=club-dotdev`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`[
  {
    "id": "session-1709000000000",
    "name": "Week 1 — Intro to Web Dev",
    "date": "2026-02-20",
    "time": "14:00",
    "clubId": "club-dotdev",
    "createdBy": "user-dharshan",
    "createdAt": "2026-02-20T10:00:00",
    "sheetSavedAt": null
  }
]`}</CodeBlock>
      </Endpoint>

      <Endpoint method="POST" path="/sessions" description="Create a new session (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X POST http://localhost:8000/sessions \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Week 2 — React Basics",
    "date": "2026-02-27",
    "time": "14:00",
    "club_id": "club-dotdev",
    "created_by": "user-dharshan"
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "id": "session-1709100000000",
  "name": "Week 2 — React Basics",
  "date": "2026-02-27",
  "time": "14:00",
  "clubId": "club-dotdev",
  "createdBy": "user-dharshan",
  "createdAt": "2026-02-27T10:00:00",
  "sheetSavedAt": null
}`}</CodeBlock>
      </Endpoint>

      <Endpoint method="PUT" path="/sessions/{session_id}" description="Update an existing session (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X PUT http://localhost:8000/sessions/session-1709100000000 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Week 2 — React Hooks",
    "time": "15:00"
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "id": "session-1709100000000",
  "name": "Week 2 — React Hooks",
  "date": "2026-02-27",
  "time": "15:00",
  "clubId": "club-dotdev",
  "createdBy": "user-dharshan",
  "createdAt": "2026-02-27T10:00:00",
  "sheetSavedAt": null
}`}</CodeBlock>
      </Endpoint>

      <Endpoint method="DELETE" path="/sessions/{session_id}" description="Delete a session and its attendance records (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X DELETE http://localhost:8000/sessions/session-1709100000000`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{ "ok": true }`}</CodeBlock>
      </Endpoint>

      {/* ── Students ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Students</h3>

      <Endpoint method="GET" path="/students?clubId={clubId}" description="List all students for a club.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl http://localhost:8000/students?clubId=club-dotdev`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`[
  {
    "id": "student-1709000000001",
    "name": "Arun Kumar",
    "email": "arunkumar@karunya.edu.in",
    "registerNo": "URK22CS1050",
    "clubId": "club-dotdev",
    "enrollmentDate": "2026-01-15"
  }
]`}</CodeBlock>
      </Endpoint>

      <Endpoint method="POST" path="/students" description="Add a new student (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X POST http://localhost:8000/students \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Priya S",
    "email": "priyas@karunya.edu.in",
    "register_no": "URK22CS1099",
    "club_id": "club-dotdev",
    "enrollment_date": "2026-02-01"
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "id": "student-1709200000000",
  "name": "Priya S",
  "email": "priyas@karunya.edu.in",
  "registerNo": "URK22CS1099",
  "clubId": "club-dotdev",
  "enrollmentDate": "2026-02-01"
}`}</CodeBlock>
      </Endpoint>

      <Endpoint method="PUT" path="/students/{student_id}" description="Update an existing student (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X PUT http://localhost:8000/students/student-1709200000000 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Priya Shanmugam",
    "registerNo": "URK22CS1100"
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "id": "student-1709200000000",
  "name": "Priya Shanmugam",
  "email": "priyas@karunya.edu.in",
  "registerNo": "URK22CS1100",
  "clubId": "club-dotdev",
  "enrollmentDate": "2026-02-01"
}`}</CodeBlock>
      </Endpoint>

      <Endpoint method="DELETE" path="/students/{student_id}" description="Delete a student (auto-syncs to Google Sheets).">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X DELETE http://localhost:8000/students/student-1709200000000`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{ "ok": true }`}</CodeBlock>
      </Endpoint>

      {/* ── Users ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Users</h3>

      <Endpoint method="GET" path="/users?clubId={clubId}" description="List all admins and tutors for a club.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl http://localhost:8000/users?clubId=club-dotdev`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`[
  {
    "id": "user-dharshan",
    "name": "Dharshan Kumar",
    "email": "dharshankumarjeyakumar@karunya.edu.in",
    "role": "admin",
    "club_id": "club-dotdev"
  },
  {
    "id": "user-varsha",
    "name": "Varsha T",
    "email": "varshat@karunya.edu.in",
    "role": "tutor",
    "club_id": "club-dotdev"
  }
]`}</CodeBlock>
      </Endpoint>

      {/* ── Attendance ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Attendance</h3>

      <Endpoint method="GET" path="/attendance/session/{session_id}" description="Get attendance records for a specific session.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl http://localhost:8000/attendance/session/session-1709000000000`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`[
  {
    "id": "att-1709000000000-student-1",
    "sessionId": "session-1709000000000",
    "studentId": "student-1709000000001",
    "status": "present",
    "markedBy": "user-dharshan",
    "markedAt": "2026-02-20T14:30:00"
  }
]`}</CodeBlock>
      </Endpoint>

      <Endpoint method="POST" path="/attendance/save" description="Save or update attendance records for a session. Upserts — existing records are updated, new ones are created.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X POST http://localhost:8000/attendance/save \\
  -H "Content-Type: application/json" \\
  -d '{
    "sessionId": "session-1709000000000",
    "markedBy": "user-dharshan",
    "items": [
      { "studentId": "student-1709000000001", "status": "present" },
      { "studentId": "student-1709000000002", "status": "late" },
      { "studentId": "student-1709000000003", "status": "absent" }
    ]
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`[
  {
    "id": "att-1709000000000-student-1709000000001",
    "sessionId": "session-1709000000000",
    "studentId": "student-1709000000001",
    "status": "present",
    "markedBy": "user-dharshan",
    "markedAt": "2026-02-20T14:30:00"
  }
]`}</CodeBlock>
      </Endpoint>

      {/* ── Sheets Sync ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Google Sheets Sync</h3>

      <Endpoint method="POST" path="/sheets/save" description='Explicitly save attendance to Google Sheets (triggered by "Save to Sheet" button). Can only be done once per session.'>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl -X POST http://localhost:8000/sheets/save \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "dharshankumarjeyakumar@karunya.edu.in",
    "sessionId": "session-1709000000000",
    "sessionName": "Week 1 — Intro to Web Dev",
    "sessionDate": "2026-02-20",
    "sessionTime": "14:00",
    "items": [
      { "studentId": "student-1", "status": "present" },
      { "studentId": "student-2", "status": "absent" }
    ]
  }'`}</CodeBlock>
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{ "ok": true }`}</CodeBlock>
        <p className="text-sm mt-2">
          <strong>Note:</strong> Returns <InlineCode>409 Conflict</InlineCode> if attendance was already saved to
          sheet for this session.
        </p>
      </Endpoint>

      <Endpoint method="GET" path="/sheets/oauth/start" description="Start the Google OAuth2 flow. Redirects to Google's consent page.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Request</h4>
        <CodeBlock>{`curl http://localhost:8000/sheets/oauth/start
# → Redirects to Google OAuth consent page`}</CodeBlock>
      </Endpoint>

      <Endpoint method="GET" path="/sheets/oauth/callback" description="OAuth callback handler. Exchanges auth code for token and saves it.">
        <h4 className="text-base font-semibold mt-4 mb-2 text-slate-400">Sample Response</h4>
        <CodeBlock>{`{
  "ok": true,
  "message": "Credentials saved to backend/oauth_token.json"
}`}</CodeBlock>
      </Endpoint>

      {/* ── Endpoint Summary Table ── */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Endpoint Summary</h3>
      <Table headers={['Method', 'Endpoint', 'Description']}>
        {[
          ['POST', '/login', 'Authenticate user (email + password)'],
          ['GET', '/sessions?clubId=', 'List sessions for a club'],
          ['POST', '/sessions', 'Create a new session (auto-syncs)'],
          ['PUT', '/sessions/{id}', 'Update a session (auto-syncs)'],
          ['DELETE', '/sessions/{id}', 'Delete a session (auto-syncs)'],
          ['GET', '/students?clubId=', 'List students for a club'],
          ['POST', '/students', 'Add a student (auto-syncs)'],
          ['PUT', '/students/{id}', 'Update a student (auto-syncs)'],
          ['DELETE', '/students/{id}', 'Delete a student (auto-syncs)'],
          ['GET', '/users?clubId=', 'List users (admins/tutors)'],
          ['GET', '/attendance/session/{id}', 'Get attendance for a session'],
          ['POST', '/attendance/save', 'Save/update attendance records'],
          ['POST', '/sheets/save', 'Explicit save attendance to Sheets'],
          ['GET', '/sheets/oauth/start', 'Start Google OAuth flow'],
          ['GET', '/sheets/oauth/callback', 'OAuth callback handler'],
        ].map(([method, endpoint, desc]) => (
          <tr key={`${method}-${endpoint}`}>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{method}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
              <InlineCode>{endpoint}</InlineCode>
            </td>
            <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">{desc}</td>
          </tr>
        ))}
      </Table>
    </section>
  );
}
