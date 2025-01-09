"use client";
import React from "react";
import { useProductStore } from "../store/store";
import { FaTrash } from "react-icons/fa";
import SecondaryButton from "./buttons/SecondaryButton";
import Modal from "./Modal";

const DisplayProduct = () => {
  const { products, removeProduct } = useProductStore();

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="border rounded w-full h-[300]">
              <div className="bg-black rounded-t h-1/2"></div>
              <div className=" p-4">
                <h2>Title: {product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <SecondaryButton onClick={() => removeProduct(product.id)}>
                  <FaTrash />
                </SecondaryButton>
              </div>
            </div>
          );
        })}
      </div>
      <Modal />
    </>
  );
};
export default DisplayProduct;
