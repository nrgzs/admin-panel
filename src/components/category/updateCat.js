import { useChangeCategoryMutation } from "@/services/CategoryRTK";
import React, { useState, useRef, useEffect } from 'react';

const UpdateCat = ({ isOpen, onClose, catData }) => {
  const [changeCategory, { isLoading, isError }] = useChangeCategoryMutation();

  const [updatedData, setUpdatedData] = useState(catData || {});

  useEffect(() => {
    setUpdatedData({ ...catData });
    console.log('🚀 ~ file: updateModal.tsx:19 ~ updatedData:', updatedData);
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedData({ ...updatedData, [name]: value });
    console.log(updatedData);
  };

  const handleUpdate = async () => {
    try {
      const response = await changeCategory(updatedData).unwrap();
      console.log('Update successful:', response);
    } catch (error) {
      console.error('Update failed:', error);
    }
    onClose(); // Close the modal after updating
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay cursor-pointer" onClick={onClose}>
        X
      </div>
      <div className="modal-container">
        <div className="modal-content">
          <h2>Update Category</h2>
          <div className="mb-4">
            <form onChange={handleInputChange}>
              <input
                type="text"
                name="name"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.name}
              ></input>
              <input
                type="text"
                name="description"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.description}
              ></input>
             
            </form>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCat