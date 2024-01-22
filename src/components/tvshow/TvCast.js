import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../utils/utils";
import { setTvCast } from "../../slices/TvShowSlice";
import { useParams } from "react-router-dom";
import SwiperComponent from "../(utils)/SwiperComponent";

const Cast = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchDetails(
        `/tv/${id}/aggregate_credits?language=en-US`
      );
      dispatch(setTvCast(res));
    }

    fetchDataFunction();
  }, [id]);

  const tvCast = useSelector((state) => state.series.tvActors.data);

  return (
    <div>
      <span className="bg-yellow-500 p-1 text-black text-2xl font-bold font-serif rounded-xl">
        Series Top Cast
      </span>
      <SwiperComponent data={tvCast.cast?.slice(0, 9)} serieCast={true} />
    </div>
  );
};

export default Cast;
