import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesDetails } from "../../slices/MovieSlice";
import { fetchDetails } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailsComponent from "../(utils)/DetailsComponent";
import MovieKeywords from "./MovieKeywords";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`movie/${id}?language=en-US`);
      dispatch(setMoviesDetails(result));
    }

    fetchDataFunction();
  }, [id, dispatch]);

  const movieDetails = useSelector((state) => state.movie.movieDetail.data);

  return (
    <div className=" pt-5 pb-10 ">
      <Link to={`/movie`} className=" flex flex-row gap-2 items-center mb-5">
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
        <span className="font-bold text-xl">Go to Movies</span>
      </Link>
      <DetailsComponent data={movieDetails} />
      <MovieKeywords />
    </div>
  );
};

export default Details;
