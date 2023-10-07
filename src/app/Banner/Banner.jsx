// import React from "react";

// const Banner = () => {
//   return (
//     <div className="banner-area">
//       <div className="carousel w-full h-full">
//         <div className="bg-overlay"></div>
//         <div id="slide1" className="carousel-item relative w-full banner1">
//           <div className="banner-content container mx-auto">
//             {/* <Image src={banner1} alt="banner1" /> */}
//             <h5>Welcome To Our Grocery Store</h5>
//             <h2>Shop Online For Fresh Groceries</h2>

//             {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a href="#slide4" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide2" className="btn btn-circle">
//                 ❯
//               </a>
//             </div> */}
//           </div>
//         </div>
//         {/* <div id="slide2" className="carousel-item relative w-full">
//           <img
//             src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
//             className="w-full"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img
//             src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
//             className="w-full"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img
//             src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
//             className="w-full"
//           />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Banner;

"use client";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
// import banner2 from "../../../public/banner/banner1.jpg";
import Image from "next/image";
import MyButton from "@/components/MyButton";
import NextLink from "next/link";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <div className="banner-area">
      <Slider {...settings}>
        <div className="banner-one">
          <div
            className="banner-image"
            style={{
              backgroundImage: `url(${banner1.src})`,
              width: "100%",
            }}
          >
            <div className="container">
              <div className="banner-content">
                <h5>Welcome To Our Grocery Store</h5>
                <h2>Shop Online For Fresh Groceries</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-btn">
                  <MyButton href="/">Shop Now</MyButton>
                  <MyButton href="/">Read More</MyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="banner-two">
          <div
            className="banner-image"
            style={{
              backgroundImage: `url(${banner2.src})`,
              width: "100%",
            }}
          >
            <div className="container">
              <div className="banner-content">
                <h5>Welcome To Our Grocery Store</h5>
                <h2>Shop Online For Fresh Groceries</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="banner-btn">
                  <MyButton href="/">Shop Now</MyButton>
                  <MyButton href="/">Read More</MyButton>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
