import { SectionHeading, CodeBlock, InlineCode } from '../ui';

export default function Setup() {
  return (
    <section>
      <SectionHeading id="setup">Setup &amp; Deployment</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Prerequisites</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li><strong className="text-blue-400">Node.js</strong> ≥ 18</li>
        <li><strong className="text-blue-400">Python</strong> ≥ 3.10</li>
        <li><strong className="text-blue-400">npm</strong> (comes with Node.js)</li>
        <li><strong className="text-blue-400">Git</strong></li>
        <li><strong className="text-blue-400">Google Cloud</strong> project with Sheets API enabled (optional, for Sheets sync)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Backend Setup</h3>
      <CodeBlock>{`# Navigate to backend
cd backend

# Create virtual environment
python -m venv .venv

# Activate (Windows)
.\\.venv\\Scripts\\activate
# Activate (macOS/Linux)
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Seed the database with clubs and users
python seed.py

# Start the backend server
uvicorn app.main:app --reload --port 8000`}</CodeBlock>
      <p className="mb-3.5">
        The API will be available at <InlineCode>http://localhost:8000</InlineCode>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Frontend Setup</h3>
      <CodeBlock>{`# From the project root
cd frontend
npm install
npm run dev`}</CodeBlock>
      <p>
        The frontend runs at <InlineCode>http://localhost:5173</InlineCode> and connects to the API at{' '}
        <InlineCode>http://localhost:8000</InlineCode>.
      </p>
    </section>
  );
}
