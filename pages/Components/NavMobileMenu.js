import React from "react";
import Link from "next/link";
import CgClose from "@meronex/icons/cg/CgClose";

function NavMobileMenu({ navItems, showMenu, active }) {
  return (
    <div
      className={
        active
          ? "flex-col flex items-center fixed inset-0 uppercase bg-white/75 backdrop-blur-lg gap-8 justify-center p-8  md:hidden"
          : "hidden"
      }
    >
      <div>
        <CgClose
          onClick={showMenu}
          className="cursor-pointer absolute top-6 right-5 md:right-10"
          size="3em"
          style={{ color: "#43464d" }}
        />
        <ul>
          {navItems.map((navItem, _key) => (
            <Link href={navItem.path} key={navItem._key}>
              <li className="cursor-pointer font-bold text-3xl my-3">
                {navItem.copy}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavMobileMenu;
