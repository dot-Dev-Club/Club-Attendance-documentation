interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-[26px] font-bold mt-8 sm:mt-12 mb-3 sm:mb-4 pb-2 border-b border-slate-600 text-white scroll-mt-20 lg:scroll-mt-6"
    >
      {children}
    </h2>
  );
}
