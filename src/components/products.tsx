import ItemCart from "./itemCart";
import SearchBar from "./searchBar";
import React from 'react';

const AllProducts:React.FC=()=>{
    return (
      <div className="flex flex-col  items-center">
        <h2 className="font-bold">All products</h2>
        <SearchBar />
        <div className="flex flex-col  items-center">
          <ItemCart itemID={''}/>
        </div>
      </div>
    );
}

export default AllProducts