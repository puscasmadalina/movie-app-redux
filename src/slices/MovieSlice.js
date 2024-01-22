import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    data: [],
  },
  movieDetail: {
    data: [],
  },
  movieTrailer: {
    data: null,
  },
  moviesActors: {
    data: [],
  },
  moviesReviews: {
    data: [],
  },
  movieKeyword: {
    data: [],
  },
  movieGenres: {
    data: [],
  },
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies.data = action.payload;
    },
    setMoviesDetails: (state, action) => {
      state.movieDetail.data = action.payload;
    },

    setMovieCast: (state, action) => {
      state.moviesActors.data = action.payload;
    },
    setMovieReviews: (state, action) => {
      state.moviesReviews.data = action.payload;
    },
    setMovieKeyword: (state, action) => {
      state.movieKeyword.data = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer.data = action.payload;
    },
    setMovieGenres: (state, action) => {
      state.movieGenres = state.movieGenres || {};
      state.movieGenres.data = action.payload;
    },
    setSortAscMovie: (state) => {
      state.movies.data.sort((a, b) => (a.title < b.title ? -1 : 1));
    },
    setSortDescMovie: (state) => {
      state.movies.data.sort((a, b) => (a.title > b.title ? -1 : 1));
    },
    setSortAscPop: (state) => {
      state.movies.data.sort((a, b) =>
        a.vote_average < b.vote_average ? -1 : 1
      );
    },
    setSortDescPop: (state) => {
      state.movies.data.sort((a, b) =>
        a.vote_average > b.vote_average ? -1 : 1
      );
    },
  },
});

export const {
  setMovies,
  setMoviesDetails,
  setMovieCast,
  setMovieReviews,
  setMovieKeyword,
  setMovieTrailer,
  setMovieGenres,
  setSortAscMovie,
  setSortDescMovie,
  setSortAscPop,
  setSortDescPop,
  setSearchMovie,
} = MovieSlice.actions;

export default MovieSlice.reducer;
