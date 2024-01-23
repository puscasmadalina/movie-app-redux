import React from "react";
import { Link } from "react-router-dom";

const TvCard = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            to={`/tvshow/${item.id}`}
            key={index}
            className="flex flex-col rounded-xl bg-gray-700"
          >
            <img
              className="rounded-xl flex items-center"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.name}
            />

            <div className="p-2 text-xl h-24  font-serif">{item.name}</div>
            <div className="text-xs text-gray-400 p-2 font-serif h-18 items-center">
              {item.first_air_date}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default TvCard;
