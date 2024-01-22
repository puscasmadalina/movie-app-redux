import React from "react";
import {
  setSortAscMovie,
  setSortDescMovie,
  setSortAscPop,
  setSortDescPop,
} from "../../../slices/MovieSlice";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();
  const handleSort = (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "Title A to Z":
        dispatch(setSortAscMovie());
        break;
      case "Title Z to A":
        dispatch(setSortDescMovie());
        break;
      case "Popularity Ascending":
        dispatch(setSortAscPop());
        break;
      case "Popularity Descending":
        dispatch(setSortDescPop());
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-yellow-500 p-2 rounded-xl flex flex-col gap-2 font-serif">
      <label className="font-bold text-2xl text-black">Sort Results by</label>
      <select
        className="text-black p-1 border rounded-xl bg-gray-300 text-lg w-full font-bold hover:bg-gray-500 cursor-pointer"
        onChange={handleSort}
      >
        <option>Title A to Z</option>
        <option>Title Z to A</option>
        <option>Popularity Ascending</option>
        <option>Popularity Descending</option>
      </select>
    </div>
  );
};

export default Sort;
