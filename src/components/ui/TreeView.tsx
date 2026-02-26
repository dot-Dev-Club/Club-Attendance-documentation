interface TreeViewProps {
  children: string;
}

export default function TreeView({ children }: TreeViewProps) {
  return (
    <div className="bg-[#0d1117] border border-slate-600 rounded-[10px] px-3 sm:px-6 py-4 sm:py-5 font-mono text-[11px] sm:text-[13px] leading-[1.8] whitespace-pre overflow-x-auto my-3 mb-6">
      {children}
    </div>
  );
}
