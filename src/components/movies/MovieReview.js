import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/utils";
import { loadingMore } from "../../slices/AppSlice";
import { setMovieReviews } from "../../slices/MovieSlice";
import MovieHeader from "./MovieHeader";
import ReviewsComponent from "../(utils)/ReviewsComponent";

const MovieReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchData(
        `movie/${id}/reviews?language=en-US&page=1`
      );
      dispatch(setMovieReviews(result));
    }

    fetchDataFunction();
  }, [id, dispatch]);
  const moviesReview = useSelector((state) => state.movie.moviesReviews.data);
  const nextPage = useSelector((state) => state.app.loadMore.page);

  const handleLoadMore = async () => {
    dispatch(loadingMore());

    const res = await fetchData(
      `movie/${id}/reviews?language=en-US&page=${nextPage}`
    );
    dispatch(setMovieReviews([...moviesReview, ...res]));
  };

  return (
    <div className="flex flex-col gap-5">
      <MovieHeader />
      <div className="flex flex-col justify-center pl-10 pr-10 items-center gap-10">
        <ReviewsComponent data={moviesReview} />
        <button onClick={handleLoadMore}>
          <span className="bg-yellow-500 rounded-xl p-2 text-black font-serif font-bold">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
};

export default MovieReview;
