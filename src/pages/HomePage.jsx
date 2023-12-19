import React from "react";
import Header from "../components/layout/Header";
import homeIcon from "../assets/home-icon.svg";
import banner from "../assets/banner.svg";
import loveIcon from "../assets/love-icon.svg";
import storeLogo from "../assets/store-logo.svg";
import starIcon from "../assets/star-icon.svg";
import pickupIcon from "../assets/pickup.svg";
import swooppersIcon from "../assets/swooppers.svg";
import tagIcon from "../assets/tag-icon.svg";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-6 px-32">
        <div className="w-[15.75rem] h-[2.75rem]  flex items-center justify-between px-4">
          <img src={homeIcon} alt="" className="h-[1.3rem] w-[1.3rem]" />
          <span className="text-[#48505E]">/</span>
          <p className="text-[#48505E]">Pizza</p>
          <span className="text-[#48505E]">/</span>
          <p className="text-[#48505E]">Resturant</p>
        </div>
        <div class="relative mt-6 mb-16">
          <img src={banner} alt="Banner" />

          <div class="absolute top-4 right-4">
            <img
              src={loveIcon}
              alt="Love Icon"
              class="h-[1.125rem] w-[1.25rem]"
            />
          </div>

          <div class="absolute left-8 top-[17.5rem]">
            <img
              src={storeLogo}
              alt="Store Logo"
              class="h-[6.375rem] w-[6.375rem]"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="flex w-[31rem] items-center justify-between pr-[3rem]">
              <h5 className="font-bold text-[1.6rem]">The place - Admiralty</h5>
              <img src={swooppersIcon} alt="" />
              <span className=" font-bold text-[2rem] text-[#FD6E5D] mt-[-1.5rem]">
                .
              </span>
              <img src={pickupIcon} alt="" />
            </div>
            <div className="flex w-[18.8rem] h-[3rem] items-center justify-between mt-6">
              <div className="flex flex-col">
                <p>Open until</p> <p>3:00PM</p>
              </div>
              <div className="flex flex-col">
                <p>Delivery fee</p> <p>from #250</p>
              </div>
              <div className="flex items-center">
                <img src={starIcon} alt="" className="mr-2" /> <span>4.5</span>
              </div>
            </div>
            <div className="flex items-center bg-[#00E3A4] w-[37.75rem] h-[3rem] px-8 rounded-[.4rem] mt-6">
              <img src={tagIcon} alt="" className="mr-4 " />
              <p>12 % off some selected products</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
