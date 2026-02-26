interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="text-[26px] font-bold mt-12 mb-4 pb-2 border-b border-slate-600 text-white scroll-mt-6"
    >
      {children}
    </h2>
  );
}
