import React, { useEffect } from "react";
import { setMovieKeyword } from "../../slices/MovieSlice";
import { fetchDetails } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import KeywordComponent from "../(utils)/KeywordComponent";

const MovieKeywords = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`/movie/${id}/keywords`);
      dispatch(setMovieKeyword(result));
    }

    fetchDataFunction();
  }, [id]);

  const moviesKeywords = useSelector((state) => state.movie.movieKeyword.data);

  return <KeywordComponent data={moviesKeywords} />;
};

export default MovieKeywords;
