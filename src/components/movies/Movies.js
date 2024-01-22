import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../slices/MovieSlice";
import { fetchData } from "../../utils/utils";
import { loadingMore } from "../../slices/AppSlice";
import Filter from "./Filter";
import { Link } from "react-router-dom";

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
  }, []);

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
        <Link to={`/`} className=" flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="bg-yellow-500 p-1 rounded-xl"
          >
            <path d="M4.943,5.606,1.024,9.525a3.585,3.585,0,0,0,0,4.95l3.919,3.919a1.5,1.5,0,1,0,2.121-2.121L4.285,13.492l18.25-.023a1.5,1.5,0,0,0,1.5-1.5v0a1.5,1.5,0,0,0-1.5-1.5L4.3,10.492,7.064,7.727A1.5,1.5,0,0,0,4.943,5.606Z" />
          </svg>
          <span className="font-bold text-xl">Go to Home</span>
        </Link>

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
          {movieResults.length > 0
            ? movieResults?.map((item, index) => {
                return (
                  <Link
                    to={`/movie/${item.id}`}
                    key={index}
                    className="flex flex-col rounded-xl bg-gray-700"
                  >
                    <div className="">
                      <img
                        className="rounded-xl flex items-center mb-2"
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt={item.title}
                      />
                      <span className="text-lg font-bold bg-yellow-500 text-black p-1 rounded-2xl">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>

                    <div className="p-2 text-xl h-24  font-serif italic text-black font-bold">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 p-2 font-serif h-18 items-center">
                      {item.release_date}
                    </div>
                  </Link>
                );
              })
            : moviesList?.map((item, index) => {
                return (
                  <Link
                    to={`/movie/${item.id}`}
                    key={index}
                    className="flex flex-col rounded-xl bg-gray-700"
                  >
                    <div className="">
                      <img
                        className="rounded-xl flex items-center mb-2"
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt={item.title}
                      />
                      <span className="text-lg font-bold bg-yellow-500 text-black p-1 rounded-2xl">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>

                    <div className="p-2 text-xl h-24  font-serif italic text-black font-bold">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 p-2 font-serif h-18 items-center">
                      {item.release_date}
                    </div>
                  </Link>
                );
              })}
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
