import { useState } from "react";

import Link from "next/link";

import NavItem from "./components/NavItem";

const MENU_LIST = [
  {
    text: "About",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
];

export default function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <header className="navbar">
        <nav className="nav">
          <Link href={"/"}>
            <a onClick={() => setActiveIdx(0)}>
              <h1 className="logo">21 Dias De Código</h1>
            </a>
          </Link>

          <div
            onClick={() => setNavActive(!navActive)}
            className="nav__menu-bar"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={` ${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
