import Image from 'next/image';
import Link from 'next/link';
import clipboard from '/public/img/clipboard.svg';
import ecommerce from '/public/img/ecommerce.svg';
import globe from '/public/img/globe.svg';
import pricetag from '/public/img/price-tag.svg';
import truck from '/public/img/truck.svg';
import setting from '/public/img/setting.svg';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center  gap-2 bg-white text-black lg:w-fit border-r-2 border-gray-400  p-3 h-screen">
      <h2 className=" font-bold mb-4 text-center border-b-2  ">E-Commerce</h2>
      <div>
        <ul className="flex flex-row lg:flex-col gap-3 p-2">
          <Link href={'/'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={ecommerce} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Home</h2>
            </li>
          </Link>
          <Link href={'/product'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={pricetag} width={40} height={40}></Image>
              <h2 className="hidden lg:block"> Product</h2>
            </li>
          </Link>
          <Link href={'/categories'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={clipboard} width={40} height={40}></Image>{' '}
              <h2 className="hidden lg:block">Categories</h2>
            </li>
          </Link>
          <Link href={'/orders'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={truck} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Orders</h2>
            </li>
          </Link>
          <Link href={'/users'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={globe} width={40} height={40}></Image>
              <h2 className="hidden lg:block">Users</h2>
            </li>
          </Link>
          <Link href={'/admin'}>
            <li className="flex gap-2 hover:bg-slate-200 rounded p-2">
              <Image src={setting} width={40} height={40}></Image>
              <h2 className="hidden lg:block">admin settings</h2>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
