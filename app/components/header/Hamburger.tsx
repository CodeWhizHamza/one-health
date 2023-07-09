"use client";
import { FaBars, FaTimes } from "react-icons/fa";

function Hamburger({
  onClick,
  menuState,
  className
}: {
  onClick: () => void;
  menuState: boolean;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`z-50 ${className}`}>
      {menuState ? (
        <FaTimes className="text-2xl" />
      ) : (
        <FaBars className="text-2xl" />
      )}
    </button>
  );
}

export default Hamburger;
