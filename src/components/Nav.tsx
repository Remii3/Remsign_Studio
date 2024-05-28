"use client";

import { Link } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { tabs } from "../data/tabs";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="flex z-30 border animate-fade-in-nav-desktop border-zinc-200 lg:rounded-3xl rounded-full shadow md:px-2 px-1 py-1 bg-white fixed top-10 md:left-1/2 md:-translate-x-1/2 max-md:right-10"
    >
      <ul className="md:flex items-center hidden">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              to={`${tab.id}`}
              href="#"
              spy={true}
              smooth={true}
              duration={600}
              className="text-nowrap inline-block rounded-3xl text-lg text-zinc-800 px-4 py-2 hover:text-sky-500/60 transition-colors ease-out"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <SheetTrigger className="md:hidden block p-2">
          <AlignJustify className="block w-[28px] h-[28px] text-zinc-800" />
        </SheetTrigger>
        <SheetContent className="pt-14">
          <ul className="justify-center flex-col items-stretch gap-2 flex">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Link
                  to={`${tab.id}`}
                  href="#"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className="text-lg rounded-3xl hover:bg-sky-500/5 text-zinc-800 px-8 py-4 block transition ease-out"
                  onClick={() => setIsOpen(false)}
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;
