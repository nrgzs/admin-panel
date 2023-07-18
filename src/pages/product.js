import AddProduct from '@/components/addProduct';
import AllProducts from '@/components/products';
import { useRef } from 'react';

export default function ProductPage() {
 

  return (
    <>
      <h2 className=" font-bold text-2xl text-center w-full ">Product Page</h2>

      <div className="main lg:mt-5 flex flex-col lg:flex-row gap-7 ">
        <AddProduct />
        <AllProducts />
      </div>
    </>
  );
}
