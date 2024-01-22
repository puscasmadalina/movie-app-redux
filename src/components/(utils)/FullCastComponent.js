import React from "react";
import { Link } from "react-router-dom";

const FullCastComponent = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/actor/${item.id}`} className="flex flex-col gap-2">
              {item.profile_path ? (
                <div className="flex flex-row gap-3">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      alt={item.name}
                      className="w-[100px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-bold text-xl">{item.name}</span>
                    <span className="text-sm text-gray-500">
                      {item.character ? item.character : item.job}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FullCastComponent;
