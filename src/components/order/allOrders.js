import OrderCart from './orderCart';
import SearchBar from '../button/searchBtn';
import React from 'react';
import axios from 'axios';
import { useGetAllOrdersQuery } from '../../services/OrderRTK';
// import { useGetAllOrdersQuery } from '@/pages/api/rtkQ';

const AllOrders = () => {
  const { data, error, isLoading, isSuccess } = useGetAllOrdersQuery();
  console.log('🚀 ~ file: allOrders.js:12 ~ AllOrders ~ data:', data);

  return (
    <div className="flex flex-col  items-center">
      <h2 className="font-bold">All Orders</h2>
      <SearchBar />
      <div className="flex flex-col  items-center">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : isSuccess ? (
          data.allOrders.map((order) => {
            return <OrderCart key={order._id} order={order} />;
          })
        ) : null}
      </div>
    </div>
  );
};

export default AllOrders;
