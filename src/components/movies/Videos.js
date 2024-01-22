import React, { useEffect } from "react";
import { setMovieTrailer } from "../../slices/MovieSlice";
import { fetchData } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "react-player";

const Videos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchData(`movie/${id}/videos?language=en-US`);
      dispatch(setMovieTrailer(result));
    }

    fetchDataFunction();
  }, [dispatch, id]);

  const videosMovie = useSelector((state) => state.movie.movieTrailer.data);

  return (
    <div className="grid grid-cols-3">
      {videosMovie?.slice(0, 3).map((item, index) => {
        return (
          <Player
            url={`https://www.youtube.com/watch?v=${item.key}`}
            controls={true}
            width={400}
            height={200}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Videos;
