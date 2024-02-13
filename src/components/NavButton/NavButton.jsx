const NavButton = ({ customFunc, icon, color, dotColor, messages }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-2xl text-white rounded-full p-2 hover:bg-[#3F8AD8]"
  >
    <span
      style={{ background: dotColor }}
      className="absolute flex items-center justify-center rounded-full h-5 text-xs w-6 -right-1.5 top-0"
    >
      {messages}
    </span>
    {icon}
  </button>
);

export default NavButton;
