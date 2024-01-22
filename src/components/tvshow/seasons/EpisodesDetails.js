import React, { useEffect } from "react";
import { fetchDetails } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSeasonEpisode } from "../../../slices/TvShowSlice";
import DetailsComponent from "../../(utils)/DetailsComponent";
import { Link } from "react-router-dom";
import EpisodeCast from "./EpisodeCast";
import SwiperComponent from "../../(utils)/SwiperComponent";

const EpisodesDetails = () => {
  const dispatch = useDispatch();
  const { id, season_number, episode_number } = useParams();
  const episodePeople = useSelector((state) => state.series.episodeCast.data);

  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `tv/${id}/season/${season_number}/episode/${episode_number}?language=en-US`
      );

      dispatch(setSeasonEpisode(result));
    }

    fetchDataFunction();
  }, [id, season_number, episode_number, dispatch]);

  const episodesDetails = useSelector(
    (state) => state.series.seasonEpisode.data
  );

  return (
    <div className="flex flex-col gap-5 pl-10 pr-10">
      <Link
        to={`/tvshow/${id}/season/${season_number}`}
        className=" flex flex-row gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Bold"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="bg-yellow-500 p-1 rounded-xl"
        >
          <path d="M4.943,5.606,1.024,9.525a3.585,3.585,0,0,0,0,4.95l3.919,3.919a1.5,1.5,0,1,0,2.121-2.121L4.285,13.492l18.25-.023a1.5,1.5,0,0,0,1.5-1.5v0a1.5,1.5,0,0,0-1.5-1.5L4.3,10.492,7.064,7.727A1.5,1.5,0,0,0,4.943,5.606Z" />
        </svg>
        <span className="font-bold">Back to Tv Season</span>
      </Link>
      <DetailsComponent data={episodesDetails} episodeDetails={true} />
      <span>Top Cast</span>
      <EpisodeCast />
      <Link
        to={`/tvshow/${id}/season/${season_number}/episode/${episode_number}/cast`}
      >
        <span className="bg-gray-400 rounded-xl font-bold text-lg text-black p-1 ">
          See Full Cast
        </span>
      </Link>
      <div>
        <span className="bg-yellow-500 font-bold text-black text-2xl p-1 rounded-xl">
          Guests
        </span>
      </div>

      <div>
        <SwiperComponent
          data={episodePeople.guest_stars}
          episodeGuests={true}
        />
      </div>
    </div>
  );
};

export default EpisodesDetails;
