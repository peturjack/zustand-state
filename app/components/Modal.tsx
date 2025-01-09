"use client";
import React from "react";
import { useToggleStore } from "../store/store";
import AddProducts from "./AddProducts";

const Modal = () => {
  const { setshowmodal, showodal } = useToggleStore();
  return (
    <>
      {showodal && (
        <>
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-40"
            onClick={setshowmodal}
          ></div>

          <div
            className="absolute w-fit h-fit inset-1/2
           transform -translate-x-1/2 -translate-y-1/2
            bg-white rounded-lg shadow-lg p-6 z-50"
          >
            <AddProducts />
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
