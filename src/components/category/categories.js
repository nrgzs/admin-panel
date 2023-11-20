import { type } from 'os';
import CategoryCart from './categoryCart';
import React from 'react';
import { useGetAllCategoriesQuery } from '@/services/CategoryRTK';
import SearchBar from '../button/searchBtn';



const AllCategories = () => {
  const { data, error, isLoading, isSuccess } = useGetAllCategoriesQuery();

  if (isSuccess) {
    console.log('🚀 ~ file: categories.tsx:14 ~ data:', data);
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold">All Categories</h2>
      <SearchBar data={data?.allCategories} />
      <div className="flex flex-col items-center">
        {data?.allCategories?.map((cat) => (
          <CategoryCart key={cat.name} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
