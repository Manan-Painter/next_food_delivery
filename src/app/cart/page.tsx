'use client'

import { useCartstore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartstore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartstore.persist.rehydrate();
    if(!session) router.push('/login')
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        console.log(data);
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="h-[calc(100vh-6rem)] p-5  gap-5 rounded-3xl md:h-[calc(100vh-9rem)] flex flex-col text-orange-500 lg:flex-row">
        {/* PRODUCTS CONTAINER */}
        <div className="flex flex-col bg-orange-600 mt-5 rounded-3xl text-white overflow-y-auto lg:w-2/3 lg:pr-10">
          {/* SINGLE ITEM */}

          {products.map((item) => (
            <div
              className="flex items-center justify-between mb-4 p-4 border-b"
              key={item.id}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}
              <div className="">
                <h1 className="uppercase text-xl font-bold">
                  {item.title} x{item.quantity}
                </h1>
                <span>{item.optionTitle}</span>
              </div>
              <h2 className="font-bold">${item.price}</h2>
              <span
                className="cursor-pointer"
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        {/* PAYMENT CONTAINER */}
        <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
          <div className="flex justify-between">
            <span className="">Subtotal ({totalItems} items)</span>
            <span className="">${totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="">Service Cost</span>
            <span className="">$0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="">Delivery Cost</span>
            <span className="text-green-500">FREE!</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="">TOTAL</span>
            <span className="font-bold">${totalPrice}</span>
          </div>
          <button
            className="bg-orange-500 text-white p-3 rounded-md w-full lg:w-1/2 self-end"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
          {/* <RazorpayButton amount={500} currency={"$"} /> */}

          {/* <Buy/> */}
        </div>
      </div>
    </>
  );
};


export default CartPage;
