import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/movies/Movies";
import NavBar from "./components/NavBar";
import TvShows from "./components/tvshow/TvShows";
import Actors from "./components/actors/Actors";
import MovieDetails from "./components/movies/MovieDetails";
import MovieFullCast from "./components/movies/MovieFullCast";
import TvDetails from "./components/tvshow/TvDetails";
import MovieReview from "./components/movies/MovieReview";
import TvFullCast from "./components/tvshow/TvFullCast";
import TvReview from "./components/tvshow/TvReview";
import ActorDetail from "./components/actors/ActorDetail";
import Footer from "./components/Footer";
import SeasonDetails from "./components/tvshow/seasons/SeasonDetails";
import EpisodesDetails from "./components/tvshow/seasons/EpisodesDetails";
import SeasonFullCast from "./components/tvshow/seasons/SeasonFullCast";
import EpisodeFullCast from "./components/tvshow/seasons/SeasonFullCast";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/cast" element={<MovieFullCast />} />
        <Route path="/movie/:id/review" element={<MovieReview />} />
        <Route path="/tvshow/:id" element={<TvDetails />} />
        <Route path="/tvshow/:id/cast" element={<TvFullCast />} />
        <Route path="/tvshow/:id/review" element={<TvReview />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
        <Route
          path="/tvshow/:id/season/:season_number"
          element={<SeasonDetails />}
        />
        <Route
          path="/tvshow/:id/season/:season_number/episode/:episode_number"
          element={<EpisodesDetails />}
        />
        <Route
          path="/tvshow/:id/season/:season_number/cast"
          element={<SeasonFullCast />}
        />
        <Route
          path="/tvshow/:id/season/:season_number/episode/:episode_number/cast"
          element={<EpisodeFullCast />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
