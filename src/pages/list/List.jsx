import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar";
import SearchItem from "../../components/SearchItem";

const List = () => {
  const location = useLocation();
  console.log(location, "sdf");
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex p-2.5 rounded-xl flex-col sticky flex-1 top-2.5 h-max bg-yellow-400">
            <h1 className="text-xl text-gray-600 mb-2.5">Search</h1>
            <div className="flex flex-col gap-1.5 mb-2.5">
              <label className="text-xs">Destination</label>
              <input
                className="h-7 border-none p-[5px]"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-2.5">
              <label className="text-xs">Check-in Date</label>
              <span
                className="h-[30px] p-1 bg-white flex items-center cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="flex flex-col gap-1.5 mb-2.5">
              <label className="text-xs">Options</label>
              <div className="p-2.5">
                <div className="flex justify-between mb-2.5 text-gray-700 text-xs">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-[50px]" />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-700 text-xs">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-[50px]" />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-700 text-xs">
                  <span>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-[50px]"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-700 text-xs">
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-[50px]"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-gray-700 text-xs">
                  <span>Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-[50px]"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="p-2.5 bg-blue-700 text-white border-none w-full font-medium">
              Search
            </button>
          </div>
          <div className="flex-[3]">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
