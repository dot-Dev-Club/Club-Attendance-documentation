import { SectionHeading, InlineCode } from '../ui';

export default function SheetsStructure() {
  return (
    <section>
      <SectionHeading id="sheets-structure">Google Sheets Structure</SectionHeading>
      <p className="mb-3.5">
        For each club, two spreadsheets are created automatically in the authenticated Google account's Drive:
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        <InlineCode>{'{ClubName}'} Sessions</InlineCode>
      </h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>
          One worksheet per year (e.g., <InlineCode>2026</InlineCode>)
        </li>
        <li>
          Columns: <InlineCode>SessionID | Week | Name | Date | Day | Time | CreatedBy | CreatedAt</InlineCode>
        </li>
        <li>
          Attendance stored in <InlineCode>Week {'{n}'} Attendance</InlineCode> tabs
        </li>
        <li>
          Attendance columns:{' '}
          <InlineCode>SessionID | SessionName | StudentID | StudentName | Status | MarkedBy | MarkedAt</InlineCode>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        <InlineCode>{'{ClubName}'} Students</InlineCode>
      </h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>
          Single <InlineCode>Students</InlineCode> worksheet
        </li>
        <li>
          Columns: <InlineCode>StudentID | Name | Email | RegisterNo | JoinedDate</InlineCode>
        </li>
      </ul>

      <h4 className="text-base font-semibold mt-6 mb-2 text-slate-400">Sheet Formatting</h4>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Bold, colored header rows (blue background, white text)</li>
        <li>Alternating row shading for readability</li>
        <li>Light borders on all cells</li>
        <li>Auto-adjusted column widths</li>
        <li>Frozen header row</li>
      </ul>
    </section>
  );
}
