import { useRef } from "react"
import React from 'react';

const AddCategory:React.FC=()=>{
    const categoryName = useRef<HTMLInputElement>(null)

    return(
        <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold">Add Category</h2>
        <form>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={categoryName}
              placeholder="Category Name"
            ></input>
            </div>
            </form>
            </div>
    )
}


export default AddCategory