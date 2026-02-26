import { Sidebar, TableOfContents } from './components/layout';
import {
  Introduction,
  Architecture,
  Features,
  TechStack,
  ProjectStructure,
  Setup,
  DockerDeployment,
  GoogleSheetsSetup,
  ApiReference,
  TypeSystem,
  EnvVars,
  SheetsStructure,
  Guidelines,
  Testing,
  Contributing,
  Support,
} from './components/sections';

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="lg:ml-[280px] flex-1 px-4 sm:px-6 lg:px-14 pt-20 lg:pt-10 py-6 lg:py-10 pb-20 max-w-[960px] mx-auto min-w-0">
        <h1 className="text-2xl sm:text-[32px] font-extrabold text-white mb-2">
          Club Attendance Management System
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-1">Full Project Documentation</p>
        <p className="text-[13px] text-slate-400">Last updated: February 26, 2026</p>

        <TableOfContents />

        <hr className="border-slate-600 my-10" />
        <Introduction />
        <hr className="border-slate-600 my-10" />
        <Architecture />
        <hr className="border-slate-600 my-10" />
        <Features />
        <hr className="border-slate-600 my-10" />
        <TechStack />
        <hr className="border-slate-600 my-10" />
        <ProjectStructure />
        <hr className="border-slate-600 my-10" />
        <Setup />
        <hr className="border-slate-600 my-10" />
        <DockerDeployment />
        <hr className="border-slate-600 my-10" />
        <GoogleSheetsSetup />
        <hr className="border-slate-600 my-10" />
        <ApiReference />
        <hr className="border-slate-600 my-10" />
        <TypeSystem />
        <hr className="border-slate-600 my-10" />
        <EnvVars />
        <hr className="border-slate-600 my-10" />
        <SheetsStructure />
        <hr className="border-slate-600 my-10" />
        <Guidelines />
        <hr className="border-slate-600 my-10" />
        <Testing />
        <hr className="border-slate-600 my-10" />
        <Contributing />
        <hr className="border-slate-600 my-10" />
        <Support />
      </main>
    </div>
  );
}

export default App;
