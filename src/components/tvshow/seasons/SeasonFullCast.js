import React from "react";
import { useSelector } from "react-redux";
import FullCastComponent from "../../(utils)/FullCastComponent";

const SeasonFullCast = () => {
  const seasonPeople = useSelector((state) => state.series.seasonsCast.data);
  return (
    <div className="flex gap-3 flex-col pl-10 pr-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3 items-center">
          <span className="font-bold underline text-xl italic font-serif">
            Cast
          </span>
          <div className="flex flex-col gap-2">
            <FullCastComponent data={seasonPeople.cast} />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <span className="font-bold font-serif text-xl italic underline">
            Crew
          </span>
          <FullCastComponent data={seasonPeople.crew} />
        </div>
      </div>
    </div>
  );
};

export default SeasonFullCast;
