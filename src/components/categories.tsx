import CategoryCart from "./categoryCart";
import React from 'react';

const AllCategories:React.FC=()=> {
  return (
    <div className="flex flex-col  items-center">
      <h2 className="font-bold">All Categories</h2>
      
      <div className="flex flex-col  items-center">
        <CategoryCart category=""/>
      </div>
    </div>
  );
}

export default  AllCategories