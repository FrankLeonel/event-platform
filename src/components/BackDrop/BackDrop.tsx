import classNames from "classnames";

interface BackDropProps {
  show: boolean;
  onClick: () => void;
}

const BackDrop = ({ show, onClick }: BackDropProps) => (
  <div
    className={classNames(
      "fixed block lg:hidden w-full h-full top-[73px] right-0 z-50 bg-gray-700 ease-in-out duration-300 transition-all overflow-x-hidden overflow-y-hidden",
      {
        visible: show,
        hidden: !show,
        "opacity-80": show,
        "opacity-0": !show,
      }
    )}
    onClick={onClick}
  />
);

export default BackDrop;
