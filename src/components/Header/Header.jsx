import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  //* getting current path name
  const location = useLocation();
  //*for opening and closing date component
  const [openDate, setOpenDate] = useState(false);
  //*setting date component
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //*opening and closing option components
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  //*for setting destination
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="flex bg-blue-900 text-white justify-center relative">
      <div
        className={`w-full max-w-5xl mt-5 mx-0  ${
          location.pathname === "/hotels" ? "mb-0" : "mb-24"
        }`}
      >
        <div className="flex gap-10 mb-12">
          <div className="flex gap-2.5 items-center active:outline-2 border-2 p-2 rounded-2xl  headBtn active">
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
        {location.pathname === "/hotels" ? (
          ""
        ) : (
          <>
            <h1 className="text-5xl font-semibold">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="my-5 mx-0">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
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
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray-600"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-600"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")}to  ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}{" "}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-12 z-20"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faPerson} className="text-gray-600" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-gray-600"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="z-20 absolute top-12 bg-white text-gray-500 border rounded-md shadow-[ 0px_0px_10px_-5px_rgba(0,0,0,0.4)]">
                    <div className="w-[200px] flex justify-between m-2.5">
                      <span className="iptionText">Adult</span>
                      <div className="flex items-center gap-2.5 text-xs text-black ">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className={` ${
                            options.adult <= 1
                              ? "cursor-not-allowed w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                              : "w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                          } `}
                        >
                          -
                        </button>
                        <span className="">{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-2.5">
                      <span className="iptionText">Children</span>

                      <div className="flex items-center gap-2.5 text-xs text-black">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className={` ${
                            options.children <= 0
                              ? "cursor-not-allowed w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                              : "w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                          } `}
                        >
                          -
                        </button>
                        <span className="">{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-between m-2.5">
                      <span className="iptionText">Room</span>
                      <div className="flex items-center gap-2.5 text-xs text-black">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className={` ${
                            options.room <= 1
                              ? "cursor-not-allowed w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                              : "w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white"
                          } `}
                        >
                          -
                        </button>
                        <span className="">{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="w-8 h-8 border-2 border-blue-500 text-blue-500 bg-white "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleSearch}
                  className="bg-blue-900 text-white font-medium p-2.5 px-8 pr-8"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
