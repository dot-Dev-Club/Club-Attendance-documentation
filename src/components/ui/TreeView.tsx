interface TreeViewProps {
  children: string;
}

export default function TreeView({ children }: TreeViewProps) {
  return (
    <div className="bg-[#0d1117] border border-slate-600 rounded-[10px] px-6 py-5 font-mono text-[13px] leading-[1.8] whitespace-pre overflow-x-auto my-3 mb-6">
      {children}
    </div>
  );
}
