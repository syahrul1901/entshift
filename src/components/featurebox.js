import React, { useState } from "react";
import Image from "next/image";

const FeatureBox = (props) => {
  const [status, setStatus] = useState(props.status);

  return (
    <div
      onClick={() => setStatus(!status)}
      className="bg-white shadow-shadowfeature  overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out rounded-lg"
    >
      <div className="flex justify-between pr-4 pl-3 py-3 gap-2 grid-cols-2">
        <div className="flex items-center">
          <span className="bg-primary rounded-full flex flex-none text-white items-center justify-center w-10 h-10">
            <span className="material-symbols-outlined">{props.icons}</span>
          </span>
          <h4 className="px-2 font-sans font-bold text-base text-left">
            {props.title}
          </h4>
        </div>
        <span
          className={`pt-2 transition ${status ? "rotate-180" : ""} lg:hidden`}
          onClick={setStatus}
        >
          <svg
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
      <div
        className={` ${
          status ? "" : "hidden"
        } flex flex-col justify-center  text-left lg:flex`}
      >
        <hr className="border-b-2 border-gray-300" />
        <h5
          // style={{ display: status ? "" : "n/one" }}
          className="px-5 py-2 mb-1 text-sm font-sans  text-gray-900 lg:px-5 lg:py-2 lg:text-[14px] "
        >
          {props.desc}
        </h5>
      </div>
    </div>
  );
};

export default FeatureBox;
