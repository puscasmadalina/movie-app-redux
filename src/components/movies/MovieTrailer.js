import React from "react";
import { useSelector } from "react-redux";
import Player from "react-player";

const MovieTrailer = () => {
  const videosMovie = useSelector((state) => state.movie.movieTrailer.data);

  return (
    <div>
      {videosMovie
        ?.filter((type) => type === "Trailer")
        .map((item, index) => {
          return (
            <Player
              url={`https://www.youtube.com/watch?v=${item.key}`}
              controls={true}
              width={400}
              height={200}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default MovieTrailer;
