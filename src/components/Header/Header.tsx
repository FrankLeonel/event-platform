import BurguerIcon from "../BurguerIcon/BurguerIcon";
import Drawer from "../Drawer";
import useToggle from "../hooks/useToogle";
import { Logo } from "../Logo/Logo";

const Header = () => {
  const [showMenu, onToggleMenu] = useToggle();
  return (
    <header className="w-full py-5 px-6 flex items-center justify-between md:justify-center md:py-5 bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="flex items-center gap-2 md:hidden">
        <span>Aulas</span>
        <BurguerIcon />
      </div>

      <Drawer />
    </header>
  );
};

export default Header;
