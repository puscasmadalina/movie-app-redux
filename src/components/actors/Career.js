import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Production from "./Production";

const Career = () => {
  const actorData = useSelector((state) => state.actors.actorCredit.data);
  const sortedList = [...actorData.cast];

  return (
    <div>
      <div className="items-center flex flex-col">
        <span className="text-3xl italic font-bold text-yellow-500 ">
          Acting
        </span>
      </div>
      <div className="grid grid-cols-[15%_45%_20%_20%]  w-[100%] p-1 items-center border-b-2 border-gray-700 bg-yellow-500 font-bold text-black text-xl justify-center">
        <span>Year</span>
        <span>Name</span>
        <span>Role</span>
        <span>Movie/TvShow</span>
      </div>

      {sortedList
        .sort((a, b) => {
          const dateA = a.release_date || a.first_air_date;
          const dateB = b.release_date || b.first_air_date;
          return dateA > dateB ? 1 : -1;
        })
        .map((item, index) => {
          return (
            <div
              className="grid grid-cols-[15%_45%_20%_20%]  w-[100%] p-1 items-center border-b-2 border-gray-700"
              key={index}
            >
              <div className="flex items-center">
                {item.release_date && item.release_date
                  ? item.release_date.split("-")[0]
                  : item.first_air_date && item.first_air_date
                  ? item.first_air_date.split("-")[0]
                  : "-"}
              </div>
              {item.title ? (
                <Link to={`/movie/${item.id}`} className="hover:text-gray-500">
                  {item.title ? item.title : "-"}
                </Link>
              ) : (
                <Link to={`/tvshow/${item.id}`} className="hover:text-gray-500">
                  {item.name ? item.name : "-"}
                </Link>
              )}

              <div className="flex  items-center">
                {item.character ? item.character : "-"}
              </div>
              <div className="flex justify-center items-center">
                {item.media_type === "movie" ? "Movie" : "TvShow"}
              </div>
            </div>
          );
        })}
      <Production />
    </div>
  );
};

export default Career;
