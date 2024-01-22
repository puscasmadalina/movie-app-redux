import React from "react";
import Details from "./Details";
import Cast from "./TvCast";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Seasons from "./seasons/Seasons";
import SimilarTv from "./SimilarTv";
import ReviewsComponent from "../(utils)/ReviewsComponent";
import { useSelector } from "react-redux";

const TvDetail = () => {
  const { id } = useParams();
  const tvReview = useSelector((state) => state.series.tvReviews.data);
  return (
    <div className="flex flex-col gap-10 pl-10 pr-10">
      <Details />
      <Cast />
      <Link to={`/tvshow/${id}/cast`}>
        <span className="font-bold font-serif text-xl bg-gray-800 p-1 rounded">
          Full Cast & Crew
        </span>
      </Link>
      <hr className="opacity-40" />
      <Seasons />

      <hr className="opacity-40" />
      <div>
        <div className="flex flex-col gap-5">
          <span className="bg-yellow-500 p-1 rounded-xl font-bold text-xl text-black font-serif">
            Reviews
          </span>
          <ReviewsComponent data={tvReview.slice(0, 2)} serieReview={true} />
          <Link to={`/tvshow/${id}/review`}>
            <span className="bg-yellow-500 p-1 rounded-xl font-bold text-xl text-black font-serif">
              See all Reviews
            </span>
          </Link>
        </div>
      </div>
      <hr className="opacity-40" />
      <SimilarTv />
    </div>
  );
};

export default TvDetail;
