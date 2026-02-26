interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="bg-[#0d1117] border border-slate-600 rounded-[10px] px-3 sm:px-6 py-4 sm:py-5 overflow-x-auto my-3 mb-6 text-[12px] sm:text-[13.5px] leading-relaxed">
      <code className="font-mono">{children}</code>
    </pre>
  );
}
