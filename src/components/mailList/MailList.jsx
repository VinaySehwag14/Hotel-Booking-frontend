import React from "react";

const MailList = () => {
  return (
    <div className="w-full mt-[50px] bg-blue-900 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          className="w-[300px] h-[30px] outline-none text-black p-6 mr-2.5 rounded-md"
          type="text"
          placeholder="Your Email"
        />
        <button className="h-[50px] bg-sky-700 text-white font-medium border-none rounded-[5px] ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
