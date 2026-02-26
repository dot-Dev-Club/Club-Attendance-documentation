import { SectionHeading, TreeView } from '../ui';

const tree = `Club Attendance System
├── 🖥️  Frontend (React + TypeScript)
│   ├── Login Page
│   ├── Dashboard (Charts & Stats)
│   ├── Sessions Management
│   ├── Students Management
│   ├── Attendance Marking
│   └── Attendance History
├── 🔧  Backend API (FastAPI + Python)
│   ├── Authentication (bcrypt password hashing)
│   ├── CRUD Operations (Sessions, Students, Attendance)
│   ├── Google Sheets Sync Engine
│   └── OAuth2 Flow for Google API
├── 🗄️  Database (SQLite + SQLAlchemy ORM)
│   ├── Clubs
│   ├── Users (Admins & Tutors)
│   ├── Students
│   ├── Sessions
│   └── Attendance Records
└── ☁️  Google Sheets (Cloud Sync)
    ├── {ClubName} Sessions  — yearly worksheets
    ├── {ClubName} Students  — flat roster
    └── Week {n} Attendance  — per-week tabs`;

export default function Architecture() {
  return (
    <section>
      <SectionHeading id="architecture">System Architecture</SectionHeading>
      <TreeView>{tree}</TreeView>
    </section>
  );
}
