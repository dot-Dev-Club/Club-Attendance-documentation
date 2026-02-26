import { SectionHeading, InlineCode } from '../ui';

export default function Introduction() {
  return (
    <section>
      <SectionHeading id="introduction">Introduction</SectionHeading>
      <p className="mb-3.5">
        <strong>Club Attendance Management System</strong> is a full-stack web application built for{' '}
        <strong>Karunya Institute of Technology and Sciences</strong>. It enables campus clubs (DotDev,
        Unbiased Club, etc.) to manage sessions, students, and attendance through dedicated per-club
        dashboards. Admins and tutors can mark attendance with <InlineCode>Present</InlineCode> /{' '}
        <InlineCode>Late</InlineCode> / <InlineCode>Absent</InlineCode> statuses, and every change is
        automatically synced to <strong>Google Sheets</strong> — replacing manual paper-based tracking with
        a real-time, cloud-backed workflow.
      </p>
      <p>
        The system features role-based access (Admin &amp; Tutor), per-club data isolation, a rich analytics
        dashboard with charts, full attendance history, and a responsive dark/light UI.
      </p>
    </section>
  );
}
