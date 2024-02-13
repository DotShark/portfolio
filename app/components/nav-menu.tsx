"use client";

import { MutableRefObject, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FiHome, FiMenu } from "react-icons/fi";
import { Section } from "../lib/section";
import Link from "next/link";

type NavMenuProps = {
  sections: Section[]
};

export function NavMenu({sections}: NavMenuProps) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => setDisplayMenu(!displayMenu);
  const closeMenu = () => setDisplayMenu(false);

  const handleNavClick = (ref: MutableRefObject<HTMLDivElement | null>) => {
    closeMenu();
    ref.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <nav className="fixed z-10 w-screen flex flex-col items-center">
        <div className="w-full bg-[#2C2848] flex flex-row drop-shadow-lg">
          <Link href="/" className="px-4">
            <div className="p-4 rounded-full hover:bg-gray-500/30 transition-colors">
              <FiHome size={24} />
            </div>
          </Link>
          <div className="grow"></div>
          <button className="px-4">
            <div className="p-4 rounded-full hover:bg-gray-500/30 transition-colors" onClick={toggleMenu}>
              <FiMenu size={24} />
            </div>
          </button>
        </div>
        <div className={`w-screen ${displayMenu ? "h-32" : "h-0"} transition-all bg-gray-900/60 px-8 backdrop-blur overflow-hidden flex flex-col justify-center`}>
          <ul className="flex flex-col">
            {
              sections.map((section) => (
                <li key={section.title} className="py-2 hover:text-cyan-200 transition-colors">
                  <button className="w-full text-left" onClick={() => handleNavClick(section.ref)}>{section.title}</button>
                </li>  
              ))
            }
          </ul>
        </div>
      </nav>
    </ClickAwayListener>
  );
}