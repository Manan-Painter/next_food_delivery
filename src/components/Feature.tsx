'use client'

import data from '@/data' 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Featured = () => {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 100,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };
  return ( 
    <div className="w-5/6 m-auto">
      <div className="mt-5">
      <Slider {...settings}>
        {
          data.map((e:any) => (
            <div className='bg-white h-[500px] text-black rounded-lg transform transition duration-500 hover:scale-95 hover:shadow-lg'>
              <div className='h-56 rounded-t-xl bg-orange-600 flex justify-center items-center'>
                <img src={e.img} alt="" className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{e.title}</p>
                <p>{e.desc}</p>
                <button className='bg-orange-600 text-white text-lg px-6 py-1 rounded-xl'>{e.price}</button>
              </div>  
            </div>
          ))
        }
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
