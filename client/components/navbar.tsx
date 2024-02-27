import Avatar from "./avatar";

function Navbar({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-2 w-full bg-[#001F8B] text-white font-medium">
      <Avatar name={name} color={color} />
      {name}
    </div>
  );
}

export default Navbar;
