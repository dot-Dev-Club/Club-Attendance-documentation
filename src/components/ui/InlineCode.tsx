interface InlineCodeProps {
  children: React.ReactNode;
}

export default function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="bg-[#0d1117] px-1.5 py-0.5 rounded text-[13px] border border-slate-600 font-mono">
      {children}
    </code>
  );
}
