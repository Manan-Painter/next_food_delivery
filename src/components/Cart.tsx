'use client'

import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { FaCartFlatbed } from "react-icons/fa6";
import { useCartstore } from '@/utils/store';


const cart = () => {

  const { totalItems } = useCartstore();

  useEffect(()=>{
    useCartstore.persist.rehydrate()
  },[])

  return (
    <div>
      <Link href="/cart" className="flex items-center gap-2 hover:text-black ">
        <div>
          <FaCartFlatbed />
        </div>
        <span>Cart ({totalItems})</span>
      </Link>
    </div>
  );
} 

export default cart
