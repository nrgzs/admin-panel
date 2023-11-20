import Image from 'next/image';
import search from '@/../public/img/search.svg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const SearchBar = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const inptVal = e.target.value;
    setSearchQuery(inptVal);
  }

  useEffect(() => {
    const resultData = data?.filter((item) => {
      return (
        item?.name?.includes(searchQuery) || item?.title?.includes(searchQuery)
      );
    });

    setResult(resultData);
  }, [searchQuery]);

  return (
    <div>
      <form onChange={handleSearch}>
        <div className="flex justify-between flex-row gap-2 w-56 ">
          <div>
            <input
              value={searchQuery}
              type="text"
              placeholder="search..."
              className={
                'mt-4  h-8 bg-slate-100  rounded-full shadow-sm hover:shadow-md focus:shadow-xl  overflow-hidden outline-none p-1'
              }
            />
          </div>
          <div className="w-16 h-16">
            <button className="h-full">
              <Image
                src={search}
                alt="search icon"
                width={36}
                height={36}
                className=""
              ></Image>
            </button>
          </div>
        </div>
      </form>
      <div>
        {searchQuery &&
          result?.map((item) => {
            console.log(
              '🚀 ~ file: searchBtn.js:84 ~ {result?.map ~ item:',
              item
            );

            return <p>{item?.name || item?.title}</p>;
          })}
      </div>
    </div>
  );
};

export default SearchBar;
