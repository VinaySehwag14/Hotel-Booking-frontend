import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="border-2 border-gray-300 p-2.5 rounded-md flex justify-between gap-5 mb-5">
      <img
        src={
          !item.photos[0]
            ? "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            : item.photos[0]
        }
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-2.5 flex-[2]">
        <h1 className="text-xl font-bold text-blue-600">{item.name}</h1>
        <span className="text-xs">{item.distance}m from center</span>
        <span className="text-xs bg-green-800 text-white w-max p-1 rounded-md">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">{item.desc}</span>
        <span className="text-xs text-green-800 font-bold">
          Free cancellation{" "}
        </span>
        <span className="text-xs text-green-800">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {item.rating && (
          <div className="flex justify-between">
            <span className="font-medium">Excellent</span>
            <button className="text-white p-1.5 font-bold border-none bg-blue-800">
              {item.rating}
            </button>
          </div>
        )}
        <div className="text-right flex flex-col gap-1">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xl text-gray-700">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="bg-blue-800 text-white font-bold py-2.5 px-1 border-none cursor-pointer rounded-md">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
