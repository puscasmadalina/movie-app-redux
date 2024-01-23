import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to={`/`} className=" flex flex-row gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Bold"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        className="bg-yellow-500 p-1 rounded-xl"
      >
        <path d="M4.943,5.606,1.024,9.525a3.585,3.585,0,0,0,0,4.95l3.919,3.919a1.5,1.5,0,1,0,2.121-2.121L4.285,13.492l18.25-.023a1.5,1.5,0,0,0,1.5-1.5v0a1.5,1.5,0,0,0-1.5-1.5L4.3,10.492,7.064,7.727A1.5,1.5,0,0,0,4.943,5.606Z" />
      </svg>
      <span className="font-bold text-xl">Back to Home</span>
    </Link>
  );
};

export default HomeButton;
