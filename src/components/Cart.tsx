import React from 'react'
import Link from 'next/link'
import { FaCartFlatbed } from "react-icons/fa6";


const cart = () => {
  return (
    <div>
      <Link href="/cart" className="flex items-center gap-2 hover:text-black ">
        <div>
          <FaCartFlatbed />
        </div>
        <span>Cart (2)</span>
      </Link>
    </div>
  );
}

export default cart
