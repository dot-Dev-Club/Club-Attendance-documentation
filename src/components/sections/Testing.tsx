import { SectionHeading, CodeBlock, Table, RoleTag, InlineCode } from '../ui';

export default function Testing() {
  return (
    <section>
      <SectionHeading id="testing">Testing</SectionHeading>

      <h3 className="text-xl font-semibold mt-8 mb-3">Manual Testing</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15px]">
        <li>Test login with Admin and Tutor accounts</li>
        <li>Create, edit, and delete sessions</li>
        <li>Add, update, and remove students</li>
        <li>Mark attendance (Present / Late / Absent)</li>
        <li>Save attendance to Google Sheets</li>
        <li>Verify dashboard charts update correctly</li>
        <li>Check attendance history page</li>
        <li>Test dark/light theme toggle</li>
        <li>Test on mobile viewports</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">API Testing</h3>
      <p className="mb-3.5">
        Use <strong>Postman</strong>, <strong>cURL</strong>, or the built-in <strong>FastAPI Swagger UI</strong>:
      </p>
      <CodeBlock>{`# FastAPI auto-generated docs
http://localhost:8000/docs      # Swagger UI
http://localhost:8000/redoc     # ReDoc`}</CodeBlock>

      <h3 className="text-xl font-semibold mt-8 mb-3">Seeded Test Accounts</h3>
      <Table headers={['Name', 'Email', 'Role', 'Club']}>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Dharshan Kumar</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <InlineCode>dharshankumarjeyakumar@karunya.edu.in</InlineCode>
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><RoleTag role="admin" /></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">DotDev</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Danish Prabhu</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <InlineCode>Danishprabhu@karunya.edu.in</InlineCode>
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><RoleTag role="admin" /></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">DotDev</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Varsha T</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <InlineCode>varshat@karunya.edu.in</InlineCode>
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><RoleTag role="tutor" /></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">DotDev</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Arvind</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <InlineCode>arvind@karunya.edu.in</InlineCode>
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><RoleTag role="admin" /></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Unbiased Club</td>
        </tr>
        <tr>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Ronnie A</td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">
            <InlineCode>ronniea@karunya.edu.in</InlineCode>
          </td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50"><RoleTag role="admin" /></td>
          <td className="px-3.5 py-2.5 border border-slate-600/40 bg-slate-800/50">Unbiased Club</td>
        </tr>
      </Table>
    </section>
  );
}
