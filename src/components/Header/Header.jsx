import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex bg-blue-900 text-white justify-center">
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
      </div>
    </div>
  );
};

export default Header;
