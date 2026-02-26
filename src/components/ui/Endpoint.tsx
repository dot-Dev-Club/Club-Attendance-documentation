interface EndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  children: React.ReactNode;
}

const methodStyles: Record<string, string> = {
  GET: 'bg-emerald-900 text-emerald-300',
  POST: 'bg-blue-900/60 text-blue-400',
  PUT: 'bg-yellow-900/60 text-yellow-300',
  DELETE: 'bg-red-900/60 text-red-400',
  PATCH: 'bg-purple-900/60 text-purple-400',
};

export default function Endpoint({ method, path, description, children }: EndpointProps) {
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-xl px-4 sm:px-6 py-4 sm:py-5 my-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3">
        <span
          className={`inline-block px-2.5 sm:px-3 py-1 rounded-md text-xs font-bold font-mono tracking-wide min-w-[56px] sm:min-w-[64px] text-center shrink-0 ${methodStyles[method]}`}
        >
          {method}
        </span>
        <span className="font-mono text-[13px] sm:text-[15px] font-semibold break-all min-w-0">{path}</span>
      </div>
      <p className="text-sm text-slate-400 mb-2">{description}</p>
      {children}
    </div>
  );
}
