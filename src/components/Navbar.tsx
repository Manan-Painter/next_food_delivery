import React from 'react'
import Link from 'next/link'
import Menu from './Menu';
import Cart from '@/components/Cart'
import { ImPhoneHangUp } from "react-icons/im";

  const user = false

const Navbar = () => {
  return (
    //Logo
    <div className="h-12 text-orange-600 flex p-4 items-center  justify-between border-b-2 border-b-orange-600 uppercase text-lg md:h-16 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4">
        <Link className="hover:text-black" href="/">
          Homepage
        </Link>
        <Link className="hover:text-black" href="/menu">
          Menu
        </Link>
        <Link className="hover:text-black" href="/">
          Contact
        </Link>
      </div>
      <div className="md:font-bold text-4xl md:text-center transform transition duration-100 hover:scale-110 hover:shadow-lg">
        <Link href="/">Foodeiis</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center ">
        <div className="flex items-center gap-2 bg-orange-400 ransform transition duration-200 hover:scale-110 rounded-xl px-2">
          <ImPhoneHangUp />
          <span>12345</span>
        </div>
        {!user ? (
          <Link className="hover:text-black" href="/login">
            Login
          </Link>
        ) : (
          <Link href="/order">Order</Link>
        )}
        <Cart />
      </div>
    </div>
  );
}

export default Navbar
