import { useRef } from "react";
import React from 'react';

const AddProduct:React.FC=() =>{
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const rating = useRef<HTMLInputElement>(null);
  const brand = useRef<HTMLInputElement>(null);
  const stock = useRef<HTMLInputElement>(null);
  const img = useRef<HTMLInputElement>(null);

// function AddProduct(title, description, category, price, rating, brand, stock,img) {
//   return
// }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold">Add Product</h2>
        <form>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={title}
              placeholder="title"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={description}
              placeholder="description"
            ></input>
            <input
              type="number"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={price}
              placeholder="price"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={rating}
              placeholder="rating"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={brand}
              placeholder="brand"
            ></input>
            <input
              type="number"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={stock}
              placeholder="stock"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={category}
              placeholder="category"
            ></input>
            <input
              type="file"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={img}
              placeholder="image"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct