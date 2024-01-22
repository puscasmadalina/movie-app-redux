import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const SwiperComponent = ({
  data,
  seasonsListing = false,
  id = null,
  movieCard = false,
  serieCard = false,
  seasonCast = false,
  serieCast = false,
  episodeCast = false,
  movieCast = false,
  episodeGuests = false,
  actorsCredits = false,
}) => {
  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={7}
      spaceBetween={0}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: true,
      // }}
      // mousewheel={true}
      navigation={true}
      modules={[Mousewheel, Autoplay, Navigation]}
    >
      {data?.map((item, index) => {
        return (
          <SwiperSlide key={index} className="hover:z-[2]">
            {movieCard && (
              <Link to={`/movie/${item.id}`} className=" m-2 ">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="rounded-xl h-[350px] hover:scale-[1.2] hover:rounded-xl"
                />
              </Link>
            )}
            {serieCard && (
              <Link to={`/tvshow/${item.id}`} className=" m-2 ">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.name}
                  className="rounded-xl h-[350px] hover:scale-[1.2] hover:rounded-xl"
                />
              </Link>
            )}
            {seasonsListing && (
              <Link to={`/tvshow/${id}/season/${item.season_number}`}>
                <div className="h-[70%] flex gap-2 justify-center p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="h-[30%] font-serif text-gray-400 flex justify-center flex-col mt-2 gap-1 p-1">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-sm text-gray-500">
                    {item.episode_count} Episodes
                  </span>
                </div>
              </Link>
            )}
            {seasonCast && (
              <Link to={`/actor/${item.id}`}>
                <div className="h-[70%] flex gap-2 justify-center p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="h-[30%] font-serif text-gray-400 flex justify-center flex-col mt-2 gap-1 p-1">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-sm text-gray-500">
                    {item.total_episode_count} Episodes
                  </span>
                </div>
              </Link>
            )}
            {serieCast && (
              <Link to={`/actor/${item.id}`}>
                {item.profile_path ? (
                  <div className="h-[60%] p-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      alt={item.name}
                      className="rounded-xl"
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="flex flex-col gap-2 mt-2 h-[40%]">
                  <h2 className="font-bold">{item.name}</h2>
                  {item.roles && (
                    <>
                      {item.roles?.slice(0, 1).map((role, index) => {
                        return (
                          <div className=" text-gray-500" key={index}>
                            <h4>{role.character}</h4>
                            <h4>{role.episode_count} Episodes</h4>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </Link>
            )}
            {episodeCast && (
              <Link to={`/actor/${id}`}>
                <div className="h-[60%] p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2 h-[40%]">
                  <h2 className="font-bold">{item.name}</h2>
                  <span>{item.character}</span>
                </div>
              </Link>
            )}
            {movieCast && (
              <Link to={`/actor/${item.id}`} className="h-[320px]">
                <div key={index} className="h-[60%] p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-2 h-[40%]">
                  <h2 className="font-bold">{item.name}</h2>
                  <h4 className=" text-gray-500">{item.character}</h4>
                </div>
              </Link>
            )}
            {episodeGuests && (
              <Link to={`/actor/${item.id}`} className="h-[320px]">
                <div key={index} className="h-[60%] p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2 h-[40%]">
                  <h2 className="font-bold">{item.name}</h2>
                  <h4 className=" text-gray-500">{item.character}</h4>
                </div>
              </Link>
            )}
            {actorsCredits && (
              <Link to={`/movie/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className="w-[120px] h-[170px] rounded-xl mb-2"
                />
                <span className="text-sm">{item.title}</span>
              </Link>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
