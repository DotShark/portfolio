"use client";

import { montserratMedium } from "../lib/fonts";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FiMenu, FiSun } from "react-icons/fi";

export function NavMenu() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => setDisplayMenu(!displayMenu);
  const closeMenu = () => setDisplayMenu(false);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <nav className="fixed z-10 w-screen flex flex-col items-center">
        <div className="w-full bg-[#2C2848] flex flex-row drop-shadow-lg">
          <button className="px-8 py-4 grow flex flex-row gap-4 hover:text-indigo-300 transition-colors" onClick={toggleMenu}>
            <FiMenu size={24} />
            <h1 className={`${montserratMedium.className} text-lg`}>Résumé</h1>
          </button>
          <button className="px-4">
            <div className="p-4 rounded-full hover:bg-gray-500/30 transition-colors">
              <FiSun size={24} />
            </div>
          </button>
        </div>
        <div className={`w-screen ${displayMenu ? "h-32" : "h-0"} transition-all bg-gray-900/60 px-8 backdrop-blur overflow-hidden flex flex-col justify-center`}>
          <ul className="flex flex-col">
            <li className="p-2"><a href="/">Résumé</a></li>
            <li className="p-2">Mes compétences</li>
            <li className="p-2">Mes projets</li>
          </ul>
        </div>
      </nav>
    </ClickAwayListener>
  );
}