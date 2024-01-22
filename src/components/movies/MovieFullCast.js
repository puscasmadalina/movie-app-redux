import React from "react";
import { useSelector } from "react-redux";
import MovieHeader from "./MovieHeader";
import FullCastComponent from "../(utils)/FullCastComponent";

const MovieFullCast = () => {
  const fullMovieCast = useSelector((state) => state.movie.moviesActors.data);

  return (
    <div className="flex gap-5 flex-col pl-10 pr-10">
      <MovieHeader />
      {fullMovieCast && (
        <div>
          <div className="grid grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-3 items-center">
              <span className="font-bold underline text-xl italic font-serif">
                Cast
              </span>
              <FullCastComponent data={fullMovieCast.cast} />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="font-bold font-serif text-xl italic underline">
                Crew
              </span>
              <FullCastComponent data={fullMovieCast.crew} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieFullCast;
