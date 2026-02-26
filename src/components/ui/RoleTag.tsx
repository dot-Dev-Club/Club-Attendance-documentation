interface RoleTagProps {
  role: 'admin' | 'tutor';
}

const styles = {
  admin: 'bg-blue-500/15 text-blue-400',
  tutor: 'bg-emerald-500/15 text-emerald-300',
};

export default function RoleTag({ role }: RoleTagProps) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mr-1.5 ${styles[role]}`}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </span>
  );
}
