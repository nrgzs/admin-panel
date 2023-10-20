import { useChangeOrderMutation } from '@/services/OrderRTK';
import React, { useState, useRef, useEffect } from 'react';

const UpdateOrder = ({ isOpen, onClose, orderData }) => {
  const [ChangeOrder, { isLoading, isError }] = useChangeOrderMutation();

  const [updatedData, setUpdatedData] = useState(orderData || {});

  useEffect(() => {
    setUpdatedData({ ...orderData });
    console.log('🚀 ~ file: updateModal.tsx:19 ~ updatedData:', updatedData);
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedData({ ...updatedData, [name]: value });
    console.log(updatedData);
  };

  const handleUpdate = async () => {
    try {
      const response = await ChangeOrder(updatedData).unwrap();
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
          <h2>Update Order</h2>
          <div className="mb-4">
            <form onChange={handleInputChange}>
              <input
                type="text"
                name="status"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.status}
              ></input>
              {/* <input
                type="text"
                name="title"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.title}
              ></input> */}
              {/* <input
                type="text"
                name="description"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.description}
              ></input> */}
              {/* <input
                type="number"
                name="price"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.price}
              ></input> */}
              {/* <input
                type="text"
                name="rating"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.rating}
              ></input> */}
              {/* <input
                type="text"
                name="brand"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.brand}
              ></input> */}
              {/* <input
                type="number"
                name="quantityInStock"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.quantityInStock}
              ></input> */}

              {/* <input
                type="file"
                name="imageUrl"
                className=" bg-slate-200 p-2 rounded  w-96 outline-none"
                value={updatedData?.imageUrl}
          
              ></input> */}
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

export default UpdateOrder;
