import AddProduct from '@/components/product/addProduct';
import AllProducts from '@/components/product/allProducts';
import { useRef } from 'react';
import axios from 'axios';
import { useGetAllProductsQuery } from '../services/ProductRTK';



const ProductPage = () => {
  return (
    <div>
      <h2 className=" font-bold text-2xl text-center w-full ">Product Page</h2>
      <div className="main lg:mt-5 flex flex-col lg:flex-row gap-7 ">
        <AddProduct />
        <AllProducts />
      </div>
    </div>
  );
};



export default ProductPage;
