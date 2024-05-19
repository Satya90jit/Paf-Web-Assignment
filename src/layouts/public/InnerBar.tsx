import React from "react";

const InnerBar = () => {
  return (
    <section className="bg-gray-800  lg:h-16 md:h-20 h-[7rem] w-full">
      <div className="justify-center flex gap-3 items-center h-full">
        <span className="inline-block h-4 w-4 bg-red-600 border border-white rounded-full"></span>
        <p className="text-white flex justify-center items-center h-full lg:text-lg text-md md:w-fit w-[11rem]">
          Acharya Prashant is dedicated to building a brighter future for you
        </p>
        <p className="border border-white rounded-lg px-2 py-1 hover:scale-105 common-transition text-white text-nowrap cursor-pointer">
          Extend your hand
        </p>
      </div>
    </section>
  );
};

export default InnerBar;
