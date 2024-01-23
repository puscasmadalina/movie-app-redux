import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../utils/utils";
import { setMovieCast } from "../../slices/MovieSlice";
import { useParams } from "react-router-dom";
import SwiperComponent from "../(utils)/SwiperComponent";

const Cast = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchDetails(`movie/${id}/credits?language=en-US`);
      dispatch(setMovieCast(res));
    }

    fetchDataFunction();
  }, [id, dispatch]);

  const movieCast = useSelector((state) => state.movie.moviesActors.data);

  return (
    <div>
      <span className="bg-yellow-500 p-1 text-black text-2xl font-bold font-serif rounded-xl">
        Top Cast
      </span>
      <SwiperComponent data={movieCast.cast?.slice(0, 10)} movieCast={true} />
    </div>
  );
};

export default Cast;
