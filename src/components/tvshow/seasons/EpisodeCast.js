import React, { useEffect } from "react";
import { setEpisodeCast } from "../../../slices/TvShowSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../../utils/utils";
import SwiperComponent from "../../(utils)/SwiperComponent";

const EpisodeCast = () => {
  const dispatch = useDispatch();
  const { id, season_number, episode_number } = useParams();

  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `/tv/${id}/season/${season_number}/episode/${episode_number}/credits?language=en-US`
      );

      dispatch(setEpisodeCast(result));
    }

    fetchDataFunction();
  }, [id, season_number, episode_number, dispatch]);

  const episodePeople = useSelector((state) => state.series.episodeCast.data);

  return (
    <div>
      <SwiperComponent
        data={episodePeople.cast.slice(0, 10)}
        episodeCast={true}
      />
    </div>
  );
};

export default EpisodeCast;
