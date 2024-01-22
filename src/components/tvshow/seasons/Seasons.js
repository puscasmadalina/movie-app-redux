import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SwiperComponent from "../../(utils)/SwiperComponent";

const Seazons = () => {
  const { id } = useParams();
  const tvSeasons = useSelector((state) => state.series.tvDetail.data);

  return (
    <div>
      <span className="bg-yellow-500 p-1 rounded-l-xl font-bold text-xl text-black font-serif">
        Seasons
      </span>
      <span className="bg-yellow-500 p-1 rounded-r-xl font-bold text-xl text-black font-serif">
        ({tvSeasons.number_of_seasons})
      </span>
      <SwiperComponent data={tvSeasons.seasons} id={id} seasonsListing={true} />
    </div>
  );
};

export default Seazons;
