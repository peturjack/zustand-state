import { useToggleStore } from "@/app/store/store";
import { navLinks } from "@/app/utils/navLinks";
import Link from "next/link";
import React from "react";
import ModalButton from "../buttons/ModalButton";

const SideMenu = () => {
  const { setShowNav, setshowmodal } = useToggleStore();
  const handleShowModal = () => {
    /* makes the modal popup and the sidebar dissappear */
    setShowNav();
    setshowmodal();
  };
  return (
    <>
      {/* overlay */}

      <>
        <div
          onClick={setShowNav}
          className="absolute bg-black bg-opacity-50 inset-0 md:hidden "
        ></div>
        {/* showmenu */}
        <div
          className={`fixed right-0 top-0 bottom-0 bg-white w-1/2 md:hidden`}
        >
          <div className="flex-col flex gap-6 w-full h-full justify-center items-center">
            {navLinks.map((navLink) => {
              return (
                <Link
                  className="text-xl"
                  onClick={setShowNav}
                  key={navLink.id}
                  href={navLink.href}
                >
                  {navLink.name}
                </Link>
              );
            })}
            <ModalButton
              className="bg-black border-none text-white"
              onClick={handleShowModal}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default SideMenu;
