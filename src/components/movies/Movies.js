import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../slices/MovieSlice";
import { fetchData } from "../../utils/utils";
import { loadingMore } from "../../slices/AppSlice";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import HomeButton from "../(utils)/HomeButton";

const Movies = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    async function fetchDataFunction() {
      const res = await fetchData(`/movie/now_playing?language=en-US`);
      dispatch(setMovies(res));
    }

    fetchDataFunction();
  }, [dispatch]);

  const moviesList = useSelector((state) => state.movie.movies.data);
  const nextPage = useSelector((state) => state.app.loadMore.page);

  const handleLoadMore = async () => {
    dispatch(loadingMore());

    const res = await fetchData(
      `/movie/now_playing?language=en-US&page=${nextPage}`
    );
    dispatch(setMovies([...moviesList, ...res]));
  };

  const handlerSearch = async () => {
    if (search.trim() === "") {
      return setMovieResults([]);
    } else {
      const res = await fetchData(
        `search/movie?query=${search}&include_adult=false&language=en-US&page=1`
      );
      setMovieResults(res);
    }
  };

  return (
    <div className="pl-10 pr-10 flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between mb-10">
        <HomeButton />

        <span className="text-4xl font-serif font-bold text-yellow-500">
          Movies
        </span>
        <div className="relative w-[450px]">
          <input
            className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:cursor-text focus:pl-16 focus:pr-4 "
            type="search"
            placeholder="Search Movie ..."
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

      <div className="flex flex-row pb-3 gap-3">
        <div className="w-[30%]">
          <Filter />
        </div>
        <div className="grid grid-cols-4 w-[70%] gap-5">
          {movieResults.length > 0 ? (
            <MovieCard data={movieResults} />
          ) : (
            <MovieCard data={moviesList} />
          )}
        </div>
      </div>
      <button onClick={handleLoadMore}>
        <span className="bg-yellow-500 rounded-xl p-2 text-black font-serif font-bold">
          Load More
        </span>
      </button>
    </div>
  );
};

export default Movies;
