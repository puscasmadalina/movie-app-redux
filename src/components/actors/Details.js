import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActorDetail } from "../../slices/ActorSlice";
import { fetchDetails } from "../../utils/utils";
import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`person/${id}?language=en-US`);
      dispatch(setActorDetail(result));
    }

    fetchDataFunction();
  }, [id, dispatch]);

  const actorDetails = useSelector((state) => state.actors.actorDetail.data);
  return (
    <>
      {actorDetails && (
        <div className="flex flex-col w-[30%] gap-5 font-serif">
          <div className="flex flex-col gap-5 w-auto">
            <img
              src={`https://image.tmdb.org/t/p/original${actorDetails.profile_path}`}
              alt={actorDetails.name}
              className="w-[100%] h-auto rounded-xl"
            />
            <hr className="opacity-30" />
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-2xl ">Personal Info</span>
            <div className="flex flex-col">
              <h2 className="text-lg text-gray-400 ">Known For</h2>
              <span className="text-lg italic text-gray-300 mb-5">
                {actorDetails.known_for_department}
              </span>
              <h2 className="text-lg text-gray-400 ">Born</h2>
              <span className="text-lg italic text-gray-300">
                {actorDetails.birthday && actorDetails.birthday.split("-")[2]}/
                {actorDetails.birthday && actorDetails.birthday.split("-")[1]}/
                {actorDetails.birthday && actorDetails.birthday.split("-")[0]}
              </span>
              <span className="text-lg italic text-gray-300 mb-5">
                {" "}
                (
                {(() => {
                  const today = new Date();
                  const birthDate = new Date(actorDetails.birthday);
                  let age = today.getFullYear() - birthDate.getFullYear();
                  const monthDiff = today.getMonth() - birthDate.getMonth();

                  if (
                    monthDiff < 0 ||
                    (monthDiff === 0 && today.getDate() < birthDate.getDate())
                  ) {
                    age--;
                  }

                  return age;
                })()}{" "}
                years old)
              </span>
              <h2 className="text-lg text-gray-400 ">Gender</h2>
              <span className="text-lg italic text-gray-300 mb-5">
                {actorDetails.gender === 2 ? "Male" : "Female"}
              </span>
              <h2 className="text-lg text-gray-400 ">Place of Birth</h2>
              <span className="text-lg italic text-gray-300 mb-5">
                {actorDetails.place_of_birth}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
