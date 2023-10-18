import { useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { useUpdateCategoryMutation } from '@/services/CategoryRTK';

const AddCategory = () => {
  const categoryName = useRef();
  const categoryDesc = useRef();

  const [updateCategory, { isLoading, isError }] = useUpdateCategoryMutation();
  async function PostCategory(e) {
    e.preventDefault();

    const updatedData = {
      name: categoryName.current?.value,
      description: categoryDesc.current?.value,
    };

    try {
      const response = await updateCategory(updatedData).unwrap();
      console.log('Update successful:', response);
    } catch (error) {
      console.error('Update failed:', error);
    }

    // await axios.post(`http://localhost:3000/api/category`, {
    //   name: categoryName.current?.value,
    //   description: categoryDesc.current?.value,
  }

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
          <button
            onClick={PostCategory}
            className=" bg-slate-400 rounded-xl w-36 p-2 text-slate-50 font-bold- hover:bg-slate-600"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
