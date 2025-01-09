"use client";
import React, { useState } from "react";
import { useToggleStore, useProductStore } from "../store/store";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const { addProduct } = useProductStore();
  const { setshowmodal } = useToggleStore();

  const handleAddProduct = () => {
    if (title && description && price) {
      const newProduct = {
        id: Date.now(),
        title,
        description,
        price: price,
      };
      addProduct(newProduct);
      setTitle("");
      setDescription("");
      setPrice(0);
    } else alert("put values in all the boxes");
    setshowmodal();
  };

  return (
    <>
      <h1 className="text-2xl">Add Products</h1>
      <div className="flex justify-center items-end gap-4 mt-6">
        <div className="flex flex-col">
          <label htmlFor="">Product name</label>
          <input
            className="pl-2 border-2 py-2 outline-none focus:border-orange-500 rounded "
            type="text"
            placeholder="product name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Product description</label>
          <input
            className="pl-2 border-2 py-2 outline-none focus:border-orange-500 rounded "
            type="text"
            placeholder="product description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Product price</label>
        <input
          className="pl-2 border-2 py-2 outline-none focus:border-orange-500 rounded "
          type="number"
          placeholder="product price..."
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
          required
        />
      </div>
      <div className="space-x-4">
        <button
          onClick={setshowmodal}
          className="mt-4 border-2 rounded px-4 py-2 min-w-[100]"
        >
          Close
        </button>
        <button
          className="rounded bg-black text-white min-w-[100] py-2 px-4"
          onClick={handleAddProduct}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default AddProducts;
