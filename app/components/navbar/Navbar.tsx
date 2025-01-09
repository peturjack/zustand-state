"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ModalButton from "../buttons/ModalButton";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/app/utils/navLinks";
import { useToggleStore } from "@/app/store/store";
import { IoCloseOutline } from "react-icons/io5";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const pathName = usePathname();
  const { showNav, setShowNav, setshowmodal } = useToggleStore();
  return (
    <>
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <div>
          <Link href={"/"} className="text-2xl cursor-pointer">
            Adro
          </Link>
        </div>
        <div>
          <ul className={`flex items-center gap-4 max-md:hidden `}>
            {navLinks.map((navLink) => (
              <div key={navLink.id}>
                <Link
                  className={` hover:bg-black p-2 hover:text-white duration-200 ${
                    pathName === navLink.href
                      ? "border-b-4 border-orange-500"
                      : ""
                  }`}
                  href={navLink.href}
                >
                  {navLink.name}
                </Link>
              </div>
            ))}

            <ModalButton className={""} onClick={setshowmodal} />
          </ul>
          {!showNav && (
            <CiMenuFries
              onClick={setShowNav}
              className="size-6 md:hidden visible"
            />
          )}
          {showNav && (
            <IoCloseOutline
              onClick={setShowNav}
              className="size-8 z-10 md:hidden relative"
            />
          )}
        </div>
      </nav>
      {showNav && <SideMenu />}
    </>
  );
};

export default Navbar;
