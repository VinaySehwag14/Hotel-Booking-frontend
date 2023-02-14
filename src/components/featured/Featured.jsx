import React from "react";

const Featured = () => {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5 z-10">
      <div className="relative text-white rounded-[10px] overflow-hidden h-[250px] flex-1">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-5xl font-bold">Dublin</h1>
          <h2 className="text-xl font-bold">123 properties</h2>
        </div>
      </div>
      <div className="relative text-white rounded-[10px] overflow-hidden h-[250px] flex-1">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-5xl font-bold">Aistin</h1>
          <h2 className="text-xl font-bold">123 properties</h2>
        </div>
      </div>
      <div className="relative text-white rounded-[10px] overflow-hidden h-[250px] flex-1">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-5xl font-bold">Dublin</h1>
          <h2 className="text-xl font-bold">123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
