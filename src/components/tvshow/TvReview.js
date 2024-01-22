import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/utils";
import { loadingMore } from "../../slices/AppSlice";
import { setTvReviews } from "../../slices/TvShowSlice";
import TvHeader from "./TvHeader";
import ReviewsComponent from "../(utils)/ReviewsComponent";

const TvReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchData(`tv/${id}/reviews?language=en-US&page=1`);
      dispatch(setTvReviews(result));
    }

    fetchDataFunction();
  }, [id]);
  const tvReview = useSelector((state) => state.series.tvReviews.data);

  const nextPage = useSelector((state) => state.app.loadMore.page);

  const handleLoadMore = async () => {
    dispatch(loadingMore());

    const res = await fetchData(
      `tv/${id}/reviews?language=en-US&page=${nextPage}`
    );
    dispatch(setTvReviews([...tvReview, ...res]));
  };

  return (
    <div className="flex flex-col gap-5">
      <TvHeader />
      <div className="flex flex-col justify-center pl-10 pr-10 items-center gap-10">
        <ReviewsComponent data={tvReview} />
        <button onClick={handleLoadMore}>
          <span className="bg-yellow-500 rounded-xl p-2 text-black font-serif font-bold">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
};

export default TvReview;
