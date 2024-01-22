import React, { useEffect } from "react";
import { fetchDetails } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSimilarTv } from "../../slices/TvShowSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";

const SimilarTv = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFunction() {
      const result = await fetchDetails(
        `tv/${id}/similar?language=en-US&page=1`
      );
      dispatch(setSimilarTv(result));
    }

    fetchDataFunction();
  }, [id]);

  const similarTvShow = useSelector((state) => state.series.tvSimilar.data);

  return (
    <>
      <span className="bg-yellow-500 p-1 text-black text-2xl font-bold font-serif rounded-xl">
        Recommendations
      </span>

      {similarTvShow.results && (
        <Swiper
          direction={"horizontal"}
          slidesPerView={3}
          spaceBetween={0}
          mousewheel={true}
          modules={[Mousewheel, Pagination, Scrollbar]}
          className="w-[100%] border-2"
        >
          {similarTvShow.results?.map((item, index) => {
            return (
              <SwiperSlide className="p-2 h-[200px] " key={index}>
                <Link to={`/tvshow/${item.id}`}>
                  <div className="h-[70%] mb-5 ">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="h-[30%] flex flex-row justify-between items-center gap-1">
                    <span className="text-xs font-serif italic">
                      {item.name}
                    </span>
                    <span className="bg-yellow-500 text-black p-1 rounded-xl text-sm">
                      {item.vote_average ? item.vote_average.toFixed(1) : "0"}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default SimilarTv;
