import Image from "next/image";
import testimg from '../../public/img/price-tag.svg';
import Link from "next/link";
import React from 'react';

interface props {
  itemID: number|string;
}

 const ItemCart:React.FC<props>=({itemID})=>{
    itemID = 'itemID'
    return (
      <Link href={`/${itemID}`}>
        <div className="flex gap-2 items-center border-2 border-slate-300 p-2 w-56">
          <Image alt="item img" src={testimg} width={30} height={30}></Image>
          <div>
            <h2 className="font-bold">Title</h2>

            <p>brand</p>
            <p>
              price: <span>00$</span>
            </p>
            <p>
              stock: <span>00</span>
            </p>
          </div>
        </div>
      </Link>
    );
}
export default ItemCart