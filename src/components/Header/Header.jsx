import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex bg-blue-900 text-white justify-center relative">
      <div className="w-full max-w-5xl mt-5 mx-0 mb-24">
        <div className="flex gap-10 mb-12">
          <div className="flex gap-2.5 items-center active:outline-2  headBtn active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="text-5xl font-semibold">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="my-5 mx-0">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="bg-blue-500 text-white font-bold p-2.5">
          Sign in / Register
        </button>
        <div className="h-14 bg-white border-[5px] border-orange-300 flex items-center justify-around py-2.5 px-0 rounded absolute -bottom-7 w-full max-w-5xl">
          {/* my-2.5  rounded  bottom-6 w-full max-w-5xl */}
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faBed} className="text-gray-600" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="border-none outline-none text-black"
            />
          </div>
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faCalendarDays} className="text-gray-600" />
            <span className="text-gray-600">Date to date</span>
          </div>
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faPerson} className="text-gray-600" />
            <span className="text-gray-600">2 aduls 2 childer</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="bg-blue-900 text-white font-medium p-2.5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
