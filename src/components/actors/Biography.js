import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../utils/utils";
import { setActorCredit } from "../../slices/ActorSlice";
import { useParams } from "react-router-dom";
import Career from "./Career";
import SwiperComponent from "../(utils)/SwiperComponent";

const Biography = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `person/${id}/combined_credits?language=en-US`
      );
      dispatch(setActorCredit(result));
    }

    fetchDataFunction();
  }, [id, dispatch]);

  const credits = useSelector((state) => state.actors.actorCredit.data);
  const details = useSelector((state) => state.actors.actorDetail.data);

  return (
    <div className="w-[70%] font-serif">
      <div className="flex flex-col gap-3">
        <div className="text-4xl text-yellow-500 font-bold italic">
          {details.name}
        </div>
        <h1 className="text-xl font-bold italic underline">Biography</h1>
        <p className="text-lg">{details.biography}</p>
      </div>

      <div className="mt-10">
        <span className="text-2xl font-bold italic">Known For</span>
        <SwiperComponent
          data={credits.cast?.slice(0, 10)}
          actorsCredits={true}
          // id={credits.cast.id}
        />
      </div>
      <Career />
    </div>
  );
};

export default Biography;
