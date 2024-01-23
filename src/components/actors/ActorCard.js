import React from "react";
import { Link } from "react-router-dom";

const ActorCard = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link to={`/actor/${item.id}`} key={index}>
            {item.profile_path ? (
              <div className="flex flex-col rounded-xl bg-gray-700">
                <img
                  className="rounded-xl flex items-center"
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt={item.name}
                />
                <div className="p-2 text-xl h-40  font-serif flex flex-col gap-1">
                  <span className="h-[35%] text-lg flex flex-col justify-center text-black font-bold">
                    {item.name}
                  </span>
                  <hr className="opacity-40" />
                  <div className="flex flex-col h-[65%] justify-start">
                    {item.known_for.map((actors) => {
                      return <span className="text-sm">{actors.title}</span>;
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default ActorCard;
