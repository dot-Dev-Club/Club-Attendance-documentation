import { SectionHeading, TreeView } from '../ui';

const tree = `project/
├── docker-compose.yml              # Multi-container orchestration
├── .env                            # Root env (VITE_API_BASE)
├── README.md                       # Project overview
│
├── backend/                        # FastAPI Python Backend
│   ├── app/
│   │   ├── main.py                 # FastAPI app & all API endpoints
│   │   ├── models.py               # SQLAlchemy ORM models
│   │   ├── schemas.py              # Pydantic request/response schemas
│   │   ├── crud.py                 # Database CRUD operations
│   │   ├── database.py             # DB engine & session factory
│   │   ├── sheets.py               # Google Sheets sync engine
│   │   └── sync_all_to_sheets.py   # Bulk sync utility
│   ├── seed.py                     # Seed clubs & users
│   ├── requirements.txt            # Python dependencies
│   ├── Dockerfile                  # Backend container
│   ├── client_secret.json          # Google OAuth client secrets
│   ├── oauth_token.json            # OAuth token (auto-generated)
│   └── .env                        # Backend env variables
│
├── frontend/                       # React TypeScript Frontend
│   ├── src/
│   │   ├── App.tsx                 # App root & routing
│   │   ├── main.tsx                # Entry point
│   │   ├── index.css               # Global styles (Tailwind)
│   │   ├── components/
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   │   └── ui/                 # Reusable UI components
│   │   │       ├── Button.tsx
│   │   │       ├── Card.tsx
│   │   │       ├── Input.tsx
│   │   │       ├── Loading.tsx
│   │   │       ├── Modal.tsx
│   │   │       ├── ThemeToggle.tsx
│   │   │       └── Toast.tsx
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx     # Login / logout state
│   │   │   └── DataContext.tsx     # All data fetching & mutations
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx       # Analytics & stats
│   │   │   ├── Attendance.tsx      # Mark attendance
│   │   │   ├── Sessions.tsx        # Session CRUD
│   │   │   ├── Students.tsx        # Student CRUD
│   │   │   ├── History.tsx         # Attendance history
│   │   │   └── Login.tsx           # Login page
│   │   └── types/
│   │       └── index.ts            # TypeScript type definitions
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── Dockerfile                  # Frontend container (Nginx)
│   └── nginx.conf                  # Nginx configuration
│
└── nginx/                          # Additional Nginx configs`;

export default function ProjectStructure() {
  return (
    <section>
      <SectionHeading id="structure">Project Structure</SectionHeading>
      <TreeView>{tree}</TreeView>
    </section>
  );
}
