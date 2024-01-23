import React, { useEffect, useState } from "react";
import { setActor } from "../../slices/ActorSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../utils/utils.js";
import { loadingMore } from "../../slices/AppSlice";
import ActorCard from "./ActorCard.js";
import HomeButton from "../(utils)/HomeButton.js";

const Actors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchData("/person/popular?language=en-US&page=1");
      dispatch(setActor(res));
    }
    fetchDataFunction();
  }, [dispatch]);
  const actorsList = useSelector((state) => state.actors.actor.data);
  const nextPage = useSelector((state) => state.app.loadMore.page);

  const handleLoadMore = async () => {
    dispatch(loadingMore());

    const res = await fetchData(
      `/person/popular?language=en-US&page=${nextPage}`
    );
    dispatch(setActor([...actorsList, ...res]));
  };
  const [search, setSearch] = useState("");
  const [actorResult, setActorResult] = useState([]);

  const handlerSearch = async () => {
    if (search.trim === "") {
      return setActorResult([]);
    } else {
      const res = await fetchData(
        `search/person?query=${search}&include_adult=false&language=en-US&page=1`
      );
      setActorResult(res);
    }
  };

  return (
    <div className="pl-10 pr-10 flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between mb-10">
        <HomeButton />
        <div className="text-4xl font-serif font-bold text-yellow-500">
          Actors
        </div>
        <div className="relative w-[450px]">
          <input
            className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:cursor-text focus:pl-16 focus:pr-4 "
            type="search"
            placeholder="Search Actor ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handlerSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" absolute inset-y-0 my-auto  w-12 h-8 stroke-gray-500 border-r border-transparent px-2 peer-focus:border-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 pb-3">
        {actorResult.length > 0 ? (
          <ActorCard data={actorResult} />
        ) : (
          <ActorCard data={actorsList} />
        )}
      </div>
      <button onClick={handleLoadMore}>
        <span className="bg-yellow-500 rounded-xl p-2 text-black font-serif font-bold">
          Load More
        </span>
      </button>
    </div>
  );
};

export default Actors;
