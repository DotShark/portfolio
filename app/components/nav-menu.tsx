"use client";

import { MutableRefObject, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { FiHome, FiMenu } from "react-icons/fi";
import { Section } from "../lib/section";
import Link from "next/link";
import { montserratMedium } from "../lib/fonts";

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
        <div className="w-full bg-[#2C2848] drop-shadow-lg max-md:hidden flex flex-row justify-center">
          <div className="grow md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-row justify-center relative">
            <Link href="/" replace={true} aria-label="Accueil">
              <div className="absolute left-4 top-0 bottom-0 p-3 rounded-full hover:bg-gray-500/30 transition-colors">
                <FiHome size={24} />
              </div>
            </Link>
            <ul className="p-3 flex flex-row gap-6">
              {
                sections.reduce((sectionsElements: JSX.Element[], section, index) => {
                  sectionsElements.push(
                    <li className={`${montserratMedium.className} text-lg uppercase hover:text-cyan-200 transition-colors`}>
                      <button onClick={() => handleNavClick(section.ref)}>{section.title}</button>
                    </li>
                  );
                  if (index < sections.length - 1) sectionsElements.push(<li className={`${montserratMedium.className} text-xl uppercase`}>•</li>)
                  return sectionsElements;
                }, [])
              }
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#2C2848] drop-shadow-lg flex flex-row justify-center md:hidden">
          <div className="grow max-w-md sm:max-w-screen-sm flex flex-row">
            <Link href="/" replace={true} className="px-4" aria-label="Accueil">
              <div className="p-4 rounded-full hover:bg-gray-500/30 transition-colors">
                <FiHome size={24} />
              </div>
            </Link>
            <div className="grow"></div>
            <button className="px-4" aria-label="Menu">
              <div className="p-4 rounded-full hover:bg-gray-500/30 transition-colors" onClick={toggleMenu}>
                <FiMenu size={24} />
              </div>
            </button>
          </div>
        </div>
        <div className={`w-screen ${displayMenu ? "h-32" : "h-0"} transition-all bg-gray-900/60 backdrop-blur-sm overflow-hidden flex flex-row justify-center md:hidden`}>
          <ul className="grow max-w-md sm:max-w-screen-sm px-8 flex flex-col">
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