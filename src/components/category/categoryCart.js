import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import DeleteCat from '../button/deleteCat';
import UpdateCat from './updateCat';
import { useState } from 'react';

const CategoryCart = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null); // Replace with your item data type

  const openModal = (item) => {
    setSelectedCat(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCat(null);
    setIsModalOpen(false);
  };
  return (
    <div className="rounded-md text-center  text-white bg-slate-300 p-5  hover:bg-slate-600 font-bold shadow-md">
      <h2>{category.name}</h2>
      <p>{category.description}</p>

      <DeleteCat ID={category._id} />
      <button onClick={() => openModal(category)}>Open Update Modal</button>
      <UpdateCat
        isOpen={isModalOpen}
        onClose={closeModal}
        catData={selectedCat}
      />
    </div>
  );
};

export default CategoryCart;
