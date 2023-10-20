import Image from 'next/image';
import testimg from '@/../public/img/price-tag.svg';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import DeleteBtn from '../button/deleteBtn';
import { useState } from 'react';
import UpdateOrder from './updateOrder';

const OrderCart = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // Replace with your irder data type

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    // <Link href={`/${irder.title}`}>
  
    <div className="flex gap-2 border-2 border-slate-300 p-2 ">
      <div>
        <h2 className="font-bold"> order id{order._id}</h2>

        <p>customer {order.customer_id}</p>
        <p>
          total: <span>{order.total}$</span>
        </p>
        <p>
          status: <span>{order.status}</span>
        </p>
        <p>
          date: <span>{order.createdAt}</span>
        </p>
        <p>billing {order.billing.address_1}</p>
      </div>
      <DeleteBtn ID={order._id} />
      <button onClick={() => openModal(order)}>Open Update Modal</button>
      <UpdateOrder
        isOpen={isModalOpen}
        onClose={closeModal}
        orderData={selectedOrder}
      />
    </div>
    // </Link>
  );
};
export default OrderCart;
