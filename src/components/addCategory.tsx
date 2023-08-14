import { useRef } from "react"
import React from 'react';

const AddCategory:React.FC=()=>{
    const categoryName = useRef<HTMLInputElement>(null)
    const categoryDesc = useRef<HTMLInputElement>(null);

    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold">Add Category</h2>
        <form>
          <div className="flex flex-col gap-3 justify-center items-center">
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={categoryName}
              placeholder="Category Name"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={categoryDesc}
              placeholder="Category Description"
            ></input>
            <button className=" bg-slate-400 rounded-xl w-36 p-2 text-slate-50 font-bold- hover:bg-slate-600">
              ADD
            </button>
          </div>
        </form>
      </div>
    );
}


export default AddCategory