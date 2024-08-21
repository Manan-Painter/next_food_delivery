'use client'

import React, { useState } from 'react'
import Cart from '@/components/Cart'
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import Link from 'next/link'

let user = false

const links = [
  { id: 1, tittle: "Homepage", url: "/" },
  { id: 2, tittle: "Menu", url: "/menu" },
  { id: 3, tittle: "Working Hours", url: "/" },
  { id: 4, tittle: "Contact", url: "/" },
];

const Menu = () => {

    const [open,setOpen] = useState(false)

  return (
    <div>
      {!open ? (
        <CgMenuRightAlt onClick={() => setOpen(true)} />
      ) : (
        <FaRegWindowClose onClick={() => setOpen(false)} />
      )}
      {open && <div className="bg-orange-500 text-white absolute left-0 top-24 flex flex-col items-center justify-center text-3xl gap-8 w-full h-full z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.tittle}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={() => setOpen(false)}>
            Login
          </Link>
        ) : (
          <Link href="/order" onClick={() => setOpen(false)}>
            Order
          </Link>
        )}
        <Link href="/cart" onClick={() => setOpen(false)}>
          <Cart />
        </Link>
      </div>}
    </div>
  );
}

export default Menu
