import React from "react";
import Details from "./Details";
import Cast from "./Cast";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReviewsComponent from "../(utils)/ReviewsComponent";
import { useSelector } from "react-redux";
import Videos from "./Videos";

const MovieDetails = () => {
  const { id } = useParams();
  const moviesReviews = useSelector((state) => state.movie.moviesReviews.data);

  return (
    <div className="flex flex-col gap-10 pl-10 pr-10">
      <Details />
      <hr className="opacity-40" />
      <Cast />
      <Link to={`/movie/${id}/cast`}>
        <span className="font-bold font-serif text-xl bg-gray-800 p-1 rounded">
          Full Cast & Crew
        </span>
      </Link>
      <hr className="opacity-40" />
      <div className="flex flex-col gap-5">
        <div>
          <span className="bg-yellow-500 p-1 rounded-xl font-bold text-xl text-black font-serif">
            Reviews
          </span>
        </div>

        <ReviewsComponent data={moviesReviews.slice(0, 2)} movieReview={true} />
        <Link to={`/movie/${id}/review`}>
          <span className="bg-gray-500 p-1 rounded-xl font-bold text-xl text-black font-serif">
            See all Reviews
          </span>
        </Link>
      </div>
      <hr className="opacity-40" />
      <div className="flex flex-col gap-2">
        <span className="bg-yellow-500 p-1 rounded-xl font-bold text-xl text-black font-serif">
          Videos
        </span>
        <Videos />
      </div>

      <hr className="opacity-40" />
    </div>
  );
};

export default MovieDetails;
