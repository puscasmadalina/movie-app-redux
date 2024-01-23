import React, { useEffect } from "react";
import { setTvKeyword } from "../../slices/TvShowSlice";
import { fetchDetails } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import KeywordComponent from "../(utils)/KeywordComponent";

const TvShowKeywords = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(`tv/${id}/keywords`);
      dispatch(setTvKeyword(result));
    }

    fetchDataFunction();
  }, [id, dispatch]);

  const tvKeywords = useSelector((state) => state.series.tvKeyword.data);

  return <KeywordComponent data={tvKeywords} />;
};

export default TvShowKeywords;
