"use client";
import { useCartstore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartstore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartstore.persist.rehydrate();
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
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] p-5  gap-5 rounded-3xl md:h-[calc(100vh-9rem)] flex flex-col text-orange-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="flex flex-col bg-orange-600 mt-5 rounded-3xl text-white overflow-y-auto lg:w-2/3 lg:pr-10">
        {/* SINGLE ITEM */}
        {products.map((item: any) => (
          <div
            className="flex items-center justify-between mb-4 p-4 border-b"
            key={item.id}
          >
            {item.img && (
              <Image src={item.img} alt={item.title} width={100} height={100} />
            )}
            <div>
              <h1 className="uppercase text-xl font-bold">
                {item.title} x{item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">${item.price * item.quantity}</h2>
            <span
              className="cursor-pointer text-white"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="bg-orange-200 text-xl  flex flex-col rounded-3xl gap-4 mt-5 justify-center lg:w-1/3 p-4 lg:p-10">
        <div className="flex justify-between">
          <span>
            <strong>Subtotal ({totalItems} items)</strong>
          </span>
          <span>
            <strong>${totalPrice}</strong>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>TOTAL</span>
          <span>${totalPrice}</span>
        </div>
        <button
          className="bg-orange-500 text-white p-3 rounded-md w-full lg:w-1/2 self-end"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
