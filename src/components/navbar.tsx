import Image from 'next/image';
import Link from 'next/link';
import clipboard from '/public/img/clipboard.svg';
import dashboard from '/public/img/dashboard.svg';
import users from '/public/img/users.svg';
import pricetag from '/public/img/price-tag.svg';
import truck from '/public/img/truck.svg';
import setting from '/public/img/setting.svg';
import React from 'react';

 const Navbar:React.FC=() =>{
  return (
    <div className="flex flex-col items-center  gap-2 bg-white text-black lg:w-fit lg:h-screen border-r-2 border-gray-400  p-3 ">
      <h2 className=" font-bold mb-4 text-center border-b-2  ">E-Commerce</h2>
      <div>
        <ul className="flex flex-row lg:flex-col gap-3 p-2">
          <Link href={'/'}>
            <li className="flex gap-2 justify-center items-center  hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={dashboard} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Home</h2>
            </li>
          </Link>
          <Link href={'/product'}>
            <li className="flex gap-2 justify-center items-center hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={pricetag} width={40} height={40}></Image>
              <h2 className="hidden lg:block"> Product</h2>
            </li>
          </Link>
          <Link href={'/categories'}>
            <li className="flex gap-2 justify-center items-center hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={clipboard} width={40} height={40}></Image>{' '}
              <h2 className="hidden lg:block">Categories</h2>
            </li>
          </Link>
          <Link href={'/orders'}>
            <li className="flex gap-2 justify-center items-center hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={truck} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Orders</h2>
            </li>
          </Link>
          <Link href={'/users'}>
            <li className="flex gap-2 justify-center items-center hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={users} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Users</h2>
            </li>
          </Link>
          <Link href={'/settings'}>
            <li className="flex gap-2 justify-center items-center hover:bg-slate-200 rounded p-2">
              <Image alt='icon' src={setting} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Settings</h2>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar