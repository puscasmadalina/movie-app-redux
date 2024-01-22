import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Episodes = () => {
  const { id, season_number } = useParams();

  const seasonsDetailed = useSelector((state) => state.series.tvSeason.data);
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {seasonsDetailed.episodes?.map((item, index) => {
        return (
          <Link
            to={`/tvshow/${id}/season/${season_number}/episode/${item.episode_number}`}
            key={index}
            className="grid grid-cols-2 justify-start items-center rounded-2xl  border-t border-b gap-4"
          >
            <div className="bg-yellow-500 font-serif font-bold text-sm p-1 pl-3 rounded-2xl text-black border-2 border-yellow-500 ">
              Episode {item.episode_number}
            </div>
            <div className="text-xs">{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Episodes;
