import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/utils";
import { setTvTrailer } from "../../slices/TvShowSlice";

const TvShowTrailer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchData(`/tv/${id}/videos?language=en-US`);
      dispatch(setTvTrailer(result));
    }

    fetchDataFunction();
  }, [id]);

  const trailerShow = useSelector((state) => state.series.tvTrailer.data);

  return <div>TvShowTrailer</div>;
};

export default TvShowTrailer;
