interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 sm:p-6">
      <h4 className="text-[15px] font-semibold text-blue-400 mb-2">{title}</h4>
      <p className="text-sm text-slate-400 m-0">{children}</p>
    </div>
  );
}
