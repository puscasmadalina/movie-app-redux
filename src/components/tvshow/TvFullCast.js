import React from "react";
import TvHeader from "./TvHeader";
import { useSelector } from "react-redux";
import FullCastComponent from "../(utils)/FullCastComponent";

const FullCast = () => {
  const fullCastPeople = useSelector((state) => state.series.tvActors.data);
  return (
    <div className="flex gap-3 flex-col pl-10 pr-10">
      <TvHeader />
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3 items-center">
          <span className="font-bold underline text-xl italic font-serif">
            Cast
          </span>
          <div className="flex flex-col gap-2">
            <FullCastComponent data={fullCastPeople.cast} />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <span className="font-bold font-serif text-xl italic underline">
            Crew
          </span>
          <FullCastComponent data={fullCastPeople.crew} />
        </div>
      </div>
    </div>
  );
};

export default FullCast;
