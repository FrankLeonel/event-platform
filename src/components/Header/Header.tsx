import { List, X } from "phosphor-react";
import { Logo } from "../Logo/Logo";

interface SideBarProps {
  show: boolean;
  onToggleSidebar: () => void;
}

const Header = ({ show, onToggleSidebar }: SideBarProps) => {
  return (
    <header className="fixed top-0 left-0 z-10 lg:relative w-full py-5 px-6 flex items-center justify-between lg:justify-center lg:py-5 bg-gray-700 border-b border-gray-600">
      <Logo />
      {!show ? (
        <div
          className="flex items-center cursor-pointer gap-2 lg:hidden"
          onClick={onToggleSidebar}
        >
          <span>Aulas</span>
          <List size={32} color="#81d8f7" />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer gap-2 lg:hidden"
          onClick={onToggleSidebar}
        >
          <span>Aulas</span>
          <X size={32} color="#81d8f7" />
        </div>
      )}
    </header>
  );
};

export default Header;
