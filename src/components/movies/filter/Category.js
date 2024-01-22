import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../../utils/utils";
import { setMovieGenres } from "../../../slices/MovieSlice";

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`genre/movie/list?language=en`);
      dispatch(setMovieGenres(result));
    }

    fetchDataFunction();
  }, [dispatch]);

  const movieGenresList = useSelector((state) => state.movie.movieGenres.data);

  return (
    <div className=" p-2 rounded-xl flex flex-col gap-5 font-serif">
      <span className="font-bold text-2xl text-black bg-yellow-500 rounded-xl p-2">
        Categories
      </span>
      <div className="grid grid-cols-3 gap-3">
        {movieGenresList.genres?.map((item, index) => {
          return (
            <div key={index} className="border p-1 rounded-xl cursor-pointer">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
