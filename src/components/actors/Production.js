import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Production = () => {
  const actorData = useSelector((state) => state.actors.actorCredit.data);
  const sortedList = [...actorData.crew];
  return (
    <div className="mt-10">
      <div className="flex justify-center mb-3">
        <span className="text-3xl italic font-bold text-yellow-500">
          Production
        </span>
      </div>
      <div className="grid grid-cols-[20%_60%_20%] mb-3 font-bold italic text-lg bg-yellow-500 text-black rounded-xl justify-items-center">
        <span>Year</span>
        <span>Movie / Tv Show</span>
        <span>Job</span>
      </div>
      {sortedList
        ?.sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
        .map((item, index) => {
          return (
            <div
              className="grid grid-cols-[15%_65%_20%]  w-[100%] p-1 items-center border-b-2 border-gray-700 "
              key={index}
            >
              <div className="flex justify-center items-center">
                {item.release_date
                  ? item.release_date.split("-")[0]
                  : item.first_air_date
                  ? item.first_air_date.split("-")[0]
                  : "-"}
              </div>
              <Link to={`/movie/${item.id}`}>
                <div className="hover:text-gray-500">
                  {item.title ? item.title : item.name ? item.name : "-"}
                </div>
              </Link>
              <div>{item.job ? item.job : "-"}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Production;
