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
import ratingStarIcon from "../assets/rating-stars-icon.svg";
import mapImg from "../assets/map.svg";
import clockIcon from "../assets/clock-icon.svg";
import redirectIcon from "../assets/redirect-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import dropDownIcon from "../assets/drop-down-icon.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import foodImg from "../assets/food-image.svg";
import Footer from "../components/layout/Footer";

const data = [
  {
    id: 1,
    title: "Combo rice pack",
    description: "Two mouth-watering pieces of soulfully beef and fried rice..",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
  {
    id: 2,
    title: "Pottage beans",
    description:
      "Two mouth-watering pieces of soulfully beef and friend rice served with",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
  {
    id: 3,
    title: "Pottage beans",
    description:
      "Two mouth-watering pieces of soulfully beef and friend rice served with",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
  {
    id: 4,
    title: "Pottage beans",
    description:
      "Two mouth-watering pieces of soulfully beef and friend rice served with",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
  {
    id: 5,
    title: "Pottage beans",
    description:
      "Two mouth-watering pieces of soulfully beef and friend rice served with",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
  {
    id: 6,
    title: "Pottage beans",
    description:
      "Two mouth-watering pieces of soulfully beef and friend rice served with",
    pecentage: "50%",
    discountedPrice: "#3,500",
    price: "#1,500",
  },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-6 px-32 ">
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

          <div class="absolute left-8 buttom-[17.5rem]">
            {/* <img
              src={storeLogo}
              alt="Store Logo"
              class="h-[6.375rem] w-[6.375rem]"
            /> */}
          </div>
        </div>
        <div className="flex justify-between">
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
            <div className="flex  flex-col items-center  w-[37.75rem] h-[23.75rem] border-2 border-[#F0F1F3] p-8 rounded-[.4rem] mt-6">
              <div className="flex items-center justify-between w-[34.75rem] h-[9.75rem] border-b-2 border-b-[#D9DCE2] mt-[-2rem]">
                <div className="flex items-center flex-col">
                  <h2 className="text-[2rem] font-bold">4.5</h2>
                  <img src={ratingStarIcon} alt="" />
                  <p>462 reviews</p>
                </div>
                <div>ratings</div>
              </div>
              <div className="mt-[2rem]">
                <div className="flex items-center justify-between w-[36rem] mb-2">
                  <h5 className="text-[#48505E] font-bold">Gideon O .</h5>
                  <p className="text-[#667085]">August 25, 2023</p>
                </div>
                <div className="flex w-[1.87rem] mb-2">
                  <img src={starIcon} alt="starIcon" className="mr-2 " />
                  <span className="text-[#48505E]">4</span>
                </div>
                <p className="mb-4 text-[#667085]">
                  I so much like the food, especially the turkey. It was so
                  delicious. Nice <br /> packaging too.
                </p>
                <p className="text-[#6741FF] font-bold">See more reviews</p>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#F0F1F3] w-[24.375rem] h-[26.437rem] rounded-[.4rem] items-center">
            <img src={mapImg} alt="mapImg" />
            <div className="flex items-center justify-between px-4 h-[6.5rem] border-b-2 border-[#D9DCE2]">
              <img
                src={locationIcon}
                alt="locationIcon"
                className="h-[1.5rem] w-[1.5rem]"
              />
              <p className="ml-[-3rem]">
                38b, Adeyemo Doherty Street, <br /> Lekki Phase 1, Lagos Nigeria
              </p>
              <img
                src={redirectIcon}
                alt="redirectIcon"
                className="h-[0.75rem] w-[0.75rem]"
              />
            </div>
            <div className="flex items-center justify-between px-4 h-[4.75rem] border-b-2 border-[#D9DCE2]">
              <img
                src={clockIcon}
                alt="clockIcon"
                className="h-[1.5rem] w-[1.5rem]"
              />
              <p className="ml-[-10rem]">Opening Hour</p>
              <img src={dropDownIcon} alt="dropDownIcon" />
            </div>
            <div className="flex items-center justify-between px-4 h-[4.75rem] ">
              <img
                src={phoneIcon}
                alt="phoneIcon"
                className="h-[1.5rem] w-[1.5rem]"
              />
              <p className="ml-[-9rem]">+2348106744642</p>
              <img
                src={redirectIcon}
                alt="redirectIcon"
                className="h-[0.75rem] w-[0.75rem]"
              />
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <h3 className=" font-bold  text-[1.5rem] mb-4 ">Most popular</h3>
          <div className="grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className=" border-2 border-[#D9DCE2] w-[31rem] h-[10.375rem] flex justify-between px-4  items-center rounded-[.4rem]  "
              >
                <div className=" w-[12.27rem] ">
                  <h4 className=" font-bold ">{item.title}</h4>
                  <p className="text-[0.87rem] text-[#858D9D]">
                    {item.description}
                  </p>
                  <div className=" flex items-center justify-between w-[10rem] ">
                    <img src={thumbsUp} alt="thumbsUp" />
                    <span className="text-[0.87rem] text-[#2B2F38] font-semibold">
                      {item.pecentage}
                    </span>
                    <span className="text-[#48505E] font-extrabold mt-[-.4rem] ">
                      {" "}
                      .{" "}
                    </span>
                    <span className="text-[#EE2024] line-through text-[0.87rem] font-semibold ">
                      {" "}
                      {item.discountedPrice}
                    </span>
                    <span className="text-[0.87rem] text-[#2B2F38] font-semibold ">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div>
                  <img src={foodImg} alt="foodImg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
