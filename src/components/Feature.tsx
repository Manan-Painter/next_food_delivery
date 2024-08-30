"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductType } from "@/types/types";

const Featured = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/product", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-5/6 m-auto">
      <div className="mt-5">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id} // Add a key prop for better React performance
              className="bg-white h-auto text-black rounded-lg transform transition duration-500 hover:scale-95 hover:shadow-lg"
            >
              <div className="h-56 md:h-64 rounded-t-xl bg-orange-600 flex justify-center items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-lg md:text-xl font-semibold text-center">
                  {item.title}
                </p>
                <p className="text-sm md:text-base text-center">{item.desc}</p>
                <button className="bg-orange-600 text-white text-sm md:text-lg px-4 md:px-6 py-2 rounded-xl">
                  {item.price}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  //   <div className="w-screen overflow-x-scroll text-orange-600">
  //   {/* WRAPPER */}
  //   <div className="w-max flex">
  //     {/* SINGLE ITEM */}
  //     {data.map((item) => (
  //       <div
  //         key={item.id}
  //         className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-600 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
  //       >
  //         {/* IMAGE CONTAINER */}
  //         {item.img && (
  //           <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
  //             <img src={item.img} alt=""  className="object-contain" />
  //           </div>
  //         )}
  //         {/* TEXT CONTAINER */}
  //         <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
  //           <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
  //           <p className="p-4 2xl:p-8">{item.desc}</p>
  //           <span className="text-xl font-bold">${item.price}</span>
  //           <button className="bg-red-500 text-white p-2 rounded-md">
  //             Add to Cart
  //           </button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  );
};

export default Featured;
