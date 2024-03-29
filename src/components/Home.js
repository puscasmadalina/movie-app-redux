import React from "react";
import TrendingMovieNow from "../components/movies/TrendingMovieNow";
import TrendingTvNow from "../components/tvshow/TrendingTvNow";

const Home = () => {
  return (
    <div className="pl-10 pr-10 pt-5 gap-5 flex flex-col">
      <TrendingMovieNow />
      <hr className="opacity-20" />
      <TrendingTvNow />
      <hr className="opacity-20" />
    </div>
  );
};

export default Home;
