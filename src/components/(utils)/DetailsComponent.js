import React from "react";
import { Link } from "react-router-dom";

const DetailsComponent = ({ data }) => {
  return (
    <div className="flex flex-row gap-10 mb-10">
      {data.poster_path || data.still_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${
            data.poster_path ? data.poster_path : data.still_path
          }`}
          alt={data.title}
          className="w-[300px] h-auto rounded-xl"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="200"
          height="400"
          className="bg-gray-400 rounded-xl"
        >
          <path d="M20.1,5.39l-3.49-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h11c2.48,0,4.5-2.02,4.5-4.5V9.99c0-1.74-.68-3.37-1.9-4.6Zm-.71,.71c.55,.55,.97,1.2,1.24,1.9h-5.13c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.49,3.49ZM6.5,1h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v5.3l-2.79-2.79c-.65-.65-1.78-.65-2.43,0l-3.27,3.27c-.27,.27-.74,.27-1.02,0l-3.27-3.27c-.65-.65-1.78-.65-2.43,0l-2.79,2.79V4.5c0-1.93,1.57-3.5,3.5-3.5Zm11,22H6.5c-1.93,0-3.5-1.57-3.5-3.5v-2.79l3.5-3.5c.27-.27,.74-.27,1.02,0l3.27,3.27c.32,.32,.76,.5,1.21,.5s.89-.18,1.22-.5l3.27-3.27c.27-.27,.74-.27,1.02,0l3.49,3.49v2.8c0,1.93-1.57,3.5-3.5,3.5Z" />
        </svg>
      )}

      <div className="flex flex-col gap-5">
        <div>
          <span className="text-4xl font-serif italic text-yellow-500 flex flex-row items-center gap-2">
            {data.title ? data.title : data.name}{" "}
            {data.release_date ? (
              <div>
                {data.release_date && `(${data.release_date?.split("-")[0]})`}
              </div>
            ) : (
              <div>
                {data.first_air_date &&
                  `(${data.first_air_date?.split("-")[0]})`}
              </div>
            )}
            {data.air_date && (
              <span className="font-serif font-bold text-lg">
                Air Date: {data.air_date?.split("-")[2]}.
                {data.air_date?.split("-")[1]}.{data.air_date?.split("-")[0]}
              </span>
            )}
          </span>
        </div>
        <div className="flex flex-row gap-2  items-center">
          <li className="text-sm list-disc list-inside ">
            {data.release_date && data.release_date
              ? `${data.release_date.split("-")[2]}/${
                  data.release_date.split("-")[1]
                }/${data.release_date.split("-")[0]}`
              : data.first_air_date && data.first_air_date
              ? `${data.first_air_date.split("-")[2]}/${
                  data.first_air_date.split("-")[1]
                }/${data.first_air_date.split("-")[0]}`
              : data.air_date && data.air_date 
            ? `${data.air_date?.split("-")[2]}/
               ${data.air_date?.split("-")[1]}/
               ${data.air_date?.split("-")[0]}`
           : "No date found" }
          </li>

          {data.genres?.map((item, index) => {
            return (
              <ul key={index} className="list-disc inline-block list-inside">
                <li className="text-sm">{item.name}</li>
              </ul>
            );
          })}
          {data.runtime && (
            <li className="text-sm list-disc list-inside">
              {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
            </li>
          )}
        </div>
        <div className="flex flex-row gap-3 items-center">
          {data.vote_average && (
            <div className="bg-yellow-500 rounded-xl p-1 text-black font-bold text-xl">
              {data.vote_average.toFixed(1)}
            </div>
          )}
          <div className="flex flex-wrap">User Score</div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg italic">{data.tagline}</span>
          <span className="text-xl font-serif font-bold text-yellow-500">
            Overview
          </span>
          <span className="text-lg font-serif border-gray-400 border-2 rounded-xl p-2">
            {data.overview ? data.overview : "No overview available"}
          </span>
        </div>
        <div className="flex flex-row items-center gap-10">
          <Link
            to={`${data.homepage}`}
            className="flex flex-row items-center gap-2 w-[170px]"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              className="bg-gray-400 p-1 rounded-xl"
            >
              <path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z" />
            </svg>
            <span className="text-gray-300">Visit Homepage</span>
          </Link>
          <div className="flex flex-col">
            <span className="text-gray-300">Status:</span>
            <span className="italic text-gray-300">
              {data.status ? data.status : "No status found"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
