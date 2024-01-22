import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../../utils/utils";
import { setTvSeason } from "../../../slices/TvShowSlice";
import { Link } from "react-router-dom";
import SeasonCast from "./SeasonCast";
import Episodes from "./Episodes";
import DetailsComponent from "../../(utils)/DetailsComponent";

const SeasonDetails = () => {
  const dispatch = useDispatch();
  const { id, season_number } = useParams();

  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `tv/${id}/season/${season_number}?language=en-US`
      );

      dispatch(setTvSeason(result));
    }

    fetchDataFunction();
  }, [id, season_number]);

  const seasonsDetailed = useSelector((state) => state.series.tvSeason.data);

  return (
    <div className="flex flex-col gap-5 pl-10 pr-10">
      <Link to={`/tvshow/${id}`} className=" flex flex-row gap-2 items-center">
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
        <span className="font-bold">Back to main</span>
      </Link>
      <span className="text-3xl font-serif font-bold italic text-yellow-500">
        {seasonsDetailed.name}
      </span>
      <DetailsComponent data={seasonsDetailed} />
      <span className="font-bold text-2xl text-yellow-500 font-serif italic">
        Episodes
      </span>
      <Episodes />
      <span className="font-bold text-2xl text-yellow-500 font-serif italic">
        Top Cast
      </span>
      <SeasonCast />
    </div>
  );
};

export default SeasonDetails;
