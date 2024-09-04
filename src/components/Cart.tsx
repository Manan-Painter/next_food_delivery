"use client";
import { useCartstore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";


const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartstore();

  useEffect(() => {
    useCartstore.persist.rehydrate();
  }, []);

  useEffect(() => {
    useCartstore.persist.rehydrate();
  }, []);
  return (
    <Link href={session?.user.isAdmin ? "/add" : "/cart"}>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <FaShoppingCart />
        </div>
        {session?.user.isAdmin ? (
          <button className="p-1 bg-orange-500 text-white rounded-md">
            Add product
          </button>
        ) : (
          <span>Cart ({totalItems})</span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
