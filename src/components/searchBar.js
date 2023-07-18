import Image from 'next/image';
import search from '../../public/img/search.svg';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SearchBar() {
//   const [toggle, settoggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  async function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="flex justify-between flex-row gap-2 w-56 ">
          <div>
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
              placeholder="search..."
              className={
                /* toggle
                  ?  */'mt-4  h-8 bg-slate-100  rounded-full shadow-sm hover:shadow-md focus:shadow-xl  overflow-hidden outline-none p-1'
                 /*  : 'hidden' */
              }
            />
          </div>
          <div className="w-16 h-16">
            <button
              /* onClick={() => {
                settoggle((prev) => !prev);
              }} */
              className="h-full"
            >
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
    </>
  );
}
