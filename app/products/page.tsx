import React, { useState } from "react";
import Star from "../../public/star.svg";

import axios from "axios";
// import { useRouter } from 'next/router';

interface ProductAttributes {
  id: number;
  productName: string;
  rating: number;
  price: number;
  description?: string;
  sales: number;
  available: string;
  imageUrl?: string[];
  categories?: string[];
  size?: string;
  colour?: string;
  UserId: number;
}
function ProductsDetails({data}:any) {
  const number = [1,2,3,4,5]
  // const router = useRouter();
  // const { data } = router.query;
  // const productData:ProductAttributes = data ? JSON.parse(data as string) : null;
  // console.log(productData,"data")
  return (
    <div>
      <div className="ProductDetails flex flex-col items-center gap-6 pb-6">
        <div className="ProductDetails_header flex justify-center gap-80   min-h-full  ">
          <div className="ProductDetails_gallery      h-[550px] w-[700px]  flex justify-start gap-[20px]">
            <div className="vertical_gallery flex flex-col gap-[10px]">
             
                <img
              //  src={data.image}
                  alt=""
                  className=" w-60 h-60 flex justify-center items-center rounded-md object-contain "
                />
                 <img
                              // src={data.imageUrl}

               alt=""
               className="w-60 h-60 justify-center items-center rounded-md object-contain "
             />
                   <img
                                  // src={data.imageUrl}

               
               alt=""
               className="w-60 h-60 justify-center items-center rounded-md object-contain "
             />
                   <img
                              // src={data.imageUrl}

               alt=""
               className="w-60 h-60 justify-center items-center rounded-md object-contain "
             />
            </div>
            <div className="main_product h-[550px]   w-[450px]  b flex justify-center items-center rounded-md ">
              <img
                            //  src={data.imageUrl}

                alt=""
                className="  bg -red border-black w-full"
              />
            </div>
          </div>
          <div className="ProductDetails_Info w-96 flex flex-col gap-22">
            <div className="Details bg-transparent flex flex-col justify-start items-start gap-3 pb-10 border-b border-black">
              <p id="Product_Title" className="font-inter text-2xl font-semibold line-height-24">name</p>
              <div className="Details_reviews flex justify-start items-center gap-12">
                <div id="reviews" className="flex justify-center items-center gap-3">
                  {number.map(()=>{
                    return(
<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#edff6b"/> </g>

</svg>    
                    )
                  })}
                
                </div>
                <p id="reviews_counter" className="text-black opacity-50">(150 Reviews)</p>
                <p id="availibilty" className="font-poppins text-base text-green-500 opacity-60 pl-4">In Stock</p>
              </div>
              <p id="price" className="font-inter text-2xl">$              price
</p>
              <p id="description" className="font-poppins text-base"> description</p>
            </div>
            <div className="buttons flex flex-col justify-start items-start">
              <div id="colorChoice" className="flex gap-20 justify-center items-center">
                <p className="font-inter text-lg">Colors: </p>
                <div id="blue" className="h-6 w-6 border-2 border-black rounded-full   bg-[#1da1f2]">
                  
                  <div className="h-full w-full bg-blue-200 rounded-full"></div>
                </div>
                <div id="red" className="h-6 w-6 bg-red-500   border-2 border-black rounded-full   bg-[#be123c]"   ></div>
              </div>
              <div id="cuantity" className="flex justify-start items-center gap-16">
                <div className="cuantity_counter flex items-center">
                  <button id="minest" className="flex w-10 h-9 font-poppins text-2xl font-light  bg-red  justify-center items-center flex-shrink-0 border-r text-white border-red border-opacity-50">-</button>
                  <input
                  type="number"
                  id="num"
                  step="1"
                  className="w-20 px-2 text-base border-t border-b border-red border-opacity-50 h-9 text-black"
                  placeholder="Enter a number"
                  aria-label="Number Input"/>
                  <button id="plus" className="flex w-10 h-9 font-poppins text-2xl font-light   bg-red  justify-center items-center flex-shrink-0 text-white bg-red-500 border border-red border-opacity-50">+</button>
                </div>
                <button
                  id="add"
                  className="inline-flex w-40 py-1 gap-2 bg-red-500  bg-red justify-center rounded-md text-white font-poppins text-base font-medium cursor-pointer"
                >
                  Add To Cart
                </button>
                <div className="wishList flex w-10 h-10 p-1 border border-black border-opacity-50 rounded-md">
                <svg  width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Wishlist">
<path id="Vector"  fill="red" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
                </div>
              </div>
            </div>
            <div className="shipping w-96 flex flex-col border border-black rounded-md">
              <div className="rect1 h-24 flex justify-center items-center gap-16">
                <div className="containerr flex flex-col justify-start items-start gap-6">
                  <p id="free" className="font-poppins text-base font-medium">Free Delivery</p>
                  <p id="free_desc" className="text-black font-poppins text-sm font-medium underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="rect2 h-24 flex justify-start items-center pl-8 gap-16">
                <div className="containerr flex flex-col justify-start items-start gap-6">
                  
                  <p id="return" className="font-poppins text-base font-medium">Return Delivery</p>
                  <p id="return_desc" className="text-black font-poppins text-sm font-medium">
                    Free 30 Days Delivery Returns. <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
