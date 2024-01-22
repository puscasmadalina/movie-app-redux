import React, { useEffect } from "react";
import { setSeasonsCast } from "../../../slices/TvShowSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../../utils/utils";
import SwiperComponent from "../../(utils)/SwiperComponent";
import { Link } from "react-router-dom";

const SeasonCast = () => {
  const dispatch = useDispatch();
  const { id, season_number } = useParams();

  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `/tv/${id}/season/${season_number}/aggregate_credits?language=en-US`
      );

      dispatch(setSeasonsCast(result));
    }

    fetchDataFunction();
  }, [id, season_number]);

  const seasonPeople = useSelector((state) => state.series.seasonsCast.data);

  return (
    <div>
      <SwiperComponent
        data={seasonPeople.cast?.slice(0, 10)}
        seasonCast={true}
      />
      <Link to={`/tvshow/${id}/season/${season_number}/cast`}>
        <span className="font-bold text-2xl font-serif italic bg-yellow-500 text-black p-1 rounded-xl ">
          See Full Cast
        </span>
      </Link>
    </div>
  );
};

export default SeasonCast;
