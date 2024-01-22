import React, { useEffect } from "react";
import { fetchData } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { trendingTvShows } from "../../slices/AppSlice";
import SwiperComponent from "../(utils)/SwiperComponent";

const TrendingTvNow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchData("trending/tv/day?language=en-US");
      dispatch(trendingTvShows(res));
    }
    fetchDataFunction();
  }, []);
  const trendingTvShow = useSelector((state) => state.app.trendingTv.data);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold flex flex-row gap-10 items-center">
        <div className="rounded-xl bg-yellow-400 p-1 text-black">
          Trending TV Series Today
        </div>
      </div>
      <div>
        <SwiperComponent data={trendingTvShow} serieCard={true} />
      </div>
    </div>
  );
};

export default TrendingTvNow;
