import { SectionHeading, CodeBlock } from '../ui';

export default function Support() {
  return (
    <section>
      <SectionHeading id="support">Support &amp; Licensing</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Support</h3>
      <p className="mb-3.5">
        Open an issue on the repository or contact the <strong>Dot Dev Club</strong> team.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Authors</h3>
      <div className="bg-slate-800 border border-slate-600 rounded-xl p-6 mb-4">
        <h4 className="text-[15px] font-semibold text-blue-400 mb-2">Team — Dot Dev Club</h4>
        <ul className="list-disc pl-6 space-y-1 text-[15px]">
          <li>Vishwa V</li>
        
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">License</h3>
      <p className="mb-3.5">
        This project is for internal use at <strong>Karunya Institute of Technology and Sciences</strong>.
      </p>

      <p className="text-center mt-10 text-slate-400 text-[13px]">
        By <strong>Dot Dev Club</strong> — Karunya Institute of Technology and Sciences
      </p>

      <hr className="border-slate-600 my-10" />

      <h3 className="text-xl font-semibold mt-8 mb-3">Quick Start Commands</h3>
      <CodeBlock>{`# Clone the repository
git clone <repo-url>
cd project

# Backend
cd backend
python -m venv .venv
.\\.venv\\Scripts\\activate          # Windows
pip install -r requirements.txt
python seed.py
uvicorn app.main:app --reload --port 8000

# Frontend (new terminal)
cd frontend
npm install
npm run dev

# Docker (alternative)
docker-compose up --build -d`}</CodeBlock>
    </section>
  );
}
