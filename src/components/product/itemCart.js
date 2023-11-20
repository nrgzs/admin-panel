import Image from 'next/image';
import testimg from '@/../public/img/price-tag.svg';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import DeleteBtn from '../button/deleteBtn';
import { useState } from 'react';
import UpdateModal from '../modal/updateModal';



const ItemCart= ({ item }) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null); // Replace with your item data type

const openModal = (item) => {
  setSelectedItem(item);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSelectedItem(null);
  setIsModalOpen(false);
};

  return (
    // <Link href={`/${item.title}`}>
    <div className="flex gap-2 items-center border-2 border-slate-300 p-2 w-56">
      <Image alt="item img" src={testimg} width={30} height={30}></Image>
      <div>
        <h2 className="font-bold">{item.title}</h2>

        <p>{item.brand}</p>
        <Image
          src={`${item.imageUrl}`}
          width={200}
          height={200}
        ></Image>
        <p>
          price: <span>{item.price}$</span>
        </p>
        <p>
          stock: <span>{item.stock}</span>
        </p>
      </div>
      <DeleteBtn ID={item._id} />
      <button onClick={() => openModal(item)}>Open Update Modal</button>
      <UpdateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        itemData={selectedItem}
      />
    </div>
    // </Link>
  );
};
export default ItemCart;
