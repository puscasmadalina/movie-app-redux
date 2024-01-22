import React from "react";
import Details from "./Details";
import Biography from "./Biography";
import { Link } from "react-router-dom";

const ActorDetail = () => {
  return (
    <div className="pl-10 pr-10 pt-10 flex flex-col gap-2">
      <Link to={`/actors`} className=" flex flex-row gap-2 items-center mb-5">
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

        <span className="font-bold text-xl">Back to Actors</span>
      </Link>

      <div className="flex flex-row gap-8">
        <Details />
        <Biography />
      </div>
    </div>
  );
};

export default ActorDetail;
