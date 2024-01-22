import React, { useEffect } from "react";
import { fetchData } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { trendingMovies } from "../../slices/AppSlice";
import SwiperComponent from "../(utils)/SwiperComponent";

const TrendingMovieNow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchData("trending/movie/day?language=en-US");
      dispatch(trendingMovies(res));
    }
    fetchDataFunction();
  }, []);
  const trendingMoviesNow = useSelector(
    (state) => state.app.trendingMovie.data
  );

  return (
    <div className="flex flex-col gap-5 ">
      <div className="text-xl font-bold flex flex-row gap-10 items-center">
        <div className="rounded-xl bg-yellow-400 p-1 text-black">
          Trending Movies Today
        </div>
      </div>
      <div>
        <SwiperComponent data={trendingMoviesNow} movieCard={true} />
      </div>
    </div>
  );
};

export default TrendingMovieNow;
