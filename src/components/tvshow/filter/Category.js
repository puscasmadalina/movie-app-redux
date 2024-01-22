import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../../utils/utils";
import { setSeriesGenre } from "../../../slices/TvShowSlice";

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`genre/tv/list?language=en`);
      dispatch(setSeriesGenre(result));
    }

    fetchDataFunction();
  }, [dispatch]);

  const genreList = useSelector((state) => state.series.serieGenre.data);

  return (
    <div className=" p-2 rounded-xl flex flex-col gap-5 font-serif">
      <span className="font-bold text-2xl text-black bg-yellow-500 rounded-xl p-2">
        Categories
      </span>
      <div className="grid grid-cols-3 gap-3">
        {genreList.genres?.map((item, index) => {
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
