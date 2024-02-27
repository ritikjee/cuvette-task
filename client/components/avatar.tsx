function Avatar({ name, color }: { name: string; color: string }) {
  const nameInitials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center `}
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-semibold">{nameInitials}</span>
    </div>
  );
}

export default Avatar;
