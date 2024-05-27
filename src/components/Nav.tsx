"use client";

import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import { AlignJustify, Menu } from "lucide-react";

const tabs = [
  { id: "o-nas", title: "O nas", path: "#" },
  { id: "oferta", title: "Oferta", path: "#" },
  { id: "realizacja", title: "Realizacja", path: "#" },
  { id: "home", title: "Home", path: "#" },
  { id: "standard-stron", title: "Standard stron", path: "#" },
  { id: "faq", title: "FAQ", path: "#" },
  { id: "kontakt", title: "Kontakt", path: "#" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm fixed top-0 left-0 right-0 bg-white">
      <nav
        aria-label="Main navigation"
        className={`${
          isOpen && "pr-4"
        } max-w-screen-lg mx-auto flex items-center justify-between`}
      >
        <a href={`/`} className="text-xl text-zinc-800 px-8 py-4 block ">
          Remsign Studio
        </a>
        <ul className="justify-center gap-1 items-center lg:flex hidden">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link
                to={`${tab.id}`}
                spy={true}
                smooth={true}
                duration={500}
                className="text-xl text-zinc-800 px-8 py-4 block hover:text-zinc-800/70 transition-colors ease-in-out cursor-pointer"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
        <Sheet open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
          <SheetTrigger className="lg:hidden block p-4">
            <AlignJustify className="block w-7 h-7" />
          </SheetTrigger>
          <SheetContent className="lg:hidden block pt-12">
            <ul className="justify-center flex-col items-stretch gap-1 flex">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <Link
                    to={`${tab.id}`}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-xl rounded hover:bg-zinc-800/5 lg:hover:bg-white  text-zinc-800 px-8 py-4 block lg:hover:text-zinc-800/70 transition ease-in-out cursor-pointer"
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
    </header>
  );
};

export default Nav;
