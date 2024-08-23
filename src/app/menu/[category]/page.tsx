'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/types";


  const getdata = async (category:string) => {
    const res = await fetch(
      `http://localhost:3000/api/product?cat=${category}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("failed");
    }

    return res.json();
  };

type Props = {
  params:{category:string}
}

const CategoryPage = async ({ params }: Props) => {

  const product:ProductType[] = await getdata(params.category)

  return (
    <div className="flex flex-wrap bg-white text-orange-600">
      {product.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-orange-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-white"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt=""
                fill
                className="rounded-s-full rounded-e-full object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-orange-600 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

// export const pizzas = [
//   {
//     id: 1,
//     title: "Sicilian",
//     desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
//     img: "/images/p-1.avif",
//     price: 24.9,
//     options: [
//       { 
//         title: "Small",
//          additionalPrice: 0
//       },
//       { 
//         title: "Medium", 
//         additionalPrice: 4 
//       },
//       { 
//         title: "Large", 
//         additionalPrice: 6 
//       },
//     ],
//   },
//   {
//      id: 2,
//      title: "Mediterranean Delight",
//      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
//      img: "/images/bread.avif",
//      price: 32.9,
//      options: [
//        {
//          title: "Small",
//          additionalPrice: 0,
//        },
//        {
//          title: "Medium",
//          additionalPrice: 4,
//        },
//        {
//          title: "Large",
//          additionalPrice: 6,
//        },
//      ],
//    },
//    {
//      id: 3,
//      title: "Bella Napoli",
//      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
//      img: "/images/bread.avif",
//      price: 26.9,
//      options: [
//        {
//          title: "Small",
//          additionalPrice: 0,
//        },
//        {
//          title: "Medium",
//          additionalPrice: 4,
//        },
//        {
//          title: "Large",
//          additionalPrice: 6,
//        },
//      ],
//    },
//    {
//      id: 4,
//      title: "Pesto Primavera",
//      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
//      img: "/images/bread.avif",
//      price: 28.9,
//      options: [
//        {
//          title: "Small",
//          additionalPrice: 0,
//        },
//        {
//          title: "Medium",
//          additionalPrice: 4,
//        },
//        {
//          title: "Large",
//          additionalPrice: 6,
//        },
//      ],
//    },
//    {
//      id: 5,
//      title: "Veggie Supreme",
//      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
//      img: "/images/bread.avif",
//      price: 24.9,
//      options: [
//        {
//          title: "Small",
//          additionalPrice: 0,
//        },
//        {
//          title: "Medium",
//          additionalPrice: 4,
//        },
//        {
//          title: "Large",
//          additionalPrice: 6,
//        },
//      ],
//    },
//    {
//      id: 6,
//      title: "Four Cheese Fantasy",
//      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
//      img: "/images/bread.avif",
//      price: 22.9,
//      options: [
//        {
//          title: "Small",
//          additionalPrice: 0,
//        },
//        {
//          title: "Medium",
//          additionalPrice: 4,
//        },
//        {
//          title: "Large",
//          additionalPrice: 6,
//        },
//      ],
//    },
//  ];
  // Other pizza items...

