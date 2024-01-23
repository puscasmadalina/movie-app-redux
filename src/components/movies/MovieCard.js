import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            to={`/movie/${item.id}`}
            key={index}
            className="flex flex-col rounded-xl bg-gray-700"
          >
            <div className="">
              <img
                className="rounded-xl flex items-center mb-2"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />
              <span className="text-lg font-bold bg-yellow-500 text-black p-1 rounded-2xl">
                {item.vote_average.toFixed(1)}
              </span>
            </div>

            <div className="p-2 text-xl h-24  font-serif italic text-black font-bold">
              {item.title}
            </div>
            <div className="text-xs text-gray-400 p-2 font-serif h-18 items-center">
              {item.release_date}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MovieCard;
