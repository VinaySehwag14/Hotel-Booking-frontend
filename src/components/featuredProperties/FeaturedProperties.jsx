import React from "react";
import API from "../../backend";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    `${API}/hotels?featured=true&limit=4`
  );

  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="flex-1 gap-2.5 flex flex-col" key={item._id}>
              <img
                className="w-full h-[250px] object-cover"
                src={
                  !item.photos[0]
                    ? "https://images.unsplash.com/photo-1600255940894-9de414a7e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG91dHNpZGUlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    : item.photos[0]
                }
                alt=""
              />
              <span className="text-purple-900 font-bold">{item.name}</span>
              <span className="font-light">{item.city}</span>
              <span className="font-medium">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button className="bg-blue-900 text-white border-none p-1 mr-2.5 font-bold">
                    {item.rating}
                  </button>
                  <span className="text-sm">Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
