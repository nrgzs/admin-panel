import axios from 'axios';
import { useRef } from 'react';
import React from 'react';
import { useUpdateProductMutation } from '../../services/ProductRTK';



const AddProduct = () => {
  const title = useRef();
  const description = useRef();
  const category = useRef();
  const price = useRef();
  const rating = useRef();
  const brand = useRef();
  const stock = useRef();
  const img = useRef();

  const [updateProduct, { isLoading, isError }] = useUpdateProductMutation();

  // async function PostProduct(e) {
  //   e.preventDefault();

  //   const updatedData = {
  //     title: title.current?.value,
  //     description: description.current?.value,
  //     category: category.current?.value,
  //     price: price.current?.value,
  //     rating: rating.current?.value,
  //     brand: brand.current?.value,
  //     quantityInStock: stock.current?.value,
  //     imageUrl: img.current?.value,
  //   };

  //   try {
  //     const response = await updateProduct(updatedData).unwrap();
  //     console.log('Update successful:', response);
  //   } catch (error) {
  //     console.error('Update failed:', error);
  //   }
   
  // }
   async function PostProduct(e) {
     e.preventDefault();

     // Create a new FormData object to handle the file upload
     const formData = new FormData();
     formData.append('title', title.current.value);
     formData.append('description', description.current.value);
     formData.append('category', category.current.value);
     formData.append('price', price.current.value);
     formData.append('rating', rating.current.value);
     formData.append('brand', brand.current.value);
     formData.append('quantityInStock', stock.current.value);
     formData.append('image', img.current.files[0]); // Use img.current.files[0] to access the selected file

     try {
       const response = await updateProduct(formData).unwrap();
       console.log('Update successful:', response);
     } catch (error) {
       console.error('Update failed:', error);
     }
   }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold">Add Product</h2>
        <form onSubmit={PostProduct}>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={title}
              placeholder="title"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={description}
              placeholder="description"
            ></input>
            <input
              type="number"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={price}
              placeholder="price"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={rating}
              placeholder="rating"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={brand}
              placeholder="brand"
            ></input>
            <input
              type="number"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={stock}
              placeholder="stock"
            ></input>
            <input
              type="text"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={category}
              placeholder="category"
            ></input>
            <input
              type="file"
              className=" bg-slate-200 p-2 rounded  w-96 outline-none"
              ref={img}
              placeholder="image"
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
