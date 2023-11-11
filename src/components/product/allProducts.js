import ItemCart from './itemCart';
import SearchBar from '../button/searchBtn';
import React from 'react';
import axios from 'axios';
import { useGetAllProductsQuery } from '../../services/ProductRTK';
// import { useGetAllProductsQuery } from '@/pages/api/rtkQ';



const AllProducts = () => {
  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  console.log("🚀 ~ file: allProducts.js:12 ~ AllProducts ~ data:", data)

  return (
    <div className="flex flex-col  items-center">
      <h2 className="font-bold">All products</h2>
      <SearchBar />
      <div className="flex flex-col  items-center">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.allProducts.map((item) => {
            return <ItemCart key={item.title} item={item} />;
          })
        ) : null}

        
      </div>
    </div>
  );
};

export default AllProducts;
