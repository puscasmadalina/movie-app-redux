import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShow: {
    data: [],
  },
  tvDetail: {
    data: [],
  },
  tvTrailer: {
    data: null,
  },
  tvActors: {
    data: [],
  },
  tvReviews: {
    data: [],
  },
  tvKeyword: {
    data: [],
  },
  tvSeason: {
    data: [],
  },
  tvSimilar: {
    data: [],
  },
  seasonsCast: {
    data: [],
  },
  seasonEpisode: {
    data: [],
  },
  episodeCast: {
    data: [],
  },
  serieGenre: {
    data: [],
  },
};

export const TvShowSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setTvShow: (state, action) => {
      state.tvShow.data = action.payload;
    },
    setTvDetails: (state, action) => {
      state.tvDetail.data = action.payload;
    },

    setTvCast: (state, action) => {
      state.tvActors.data = action.payload;
    },
    setTvReviews: (state, action) => {
      state.tvReviews.data = action.payload;
    },
    setTvKeyword: (state, action) => {
      state.tvKeyword.data = action.payload;
    },
    setTvSeason: (state, action) => {
      state.tvSeason.data = action.payload;
    },
    setSimilarTv: (state, action) => {
      state.tvSimilar.data = action.payload;
    },
    setSeasonsCast: (state, action) => {
      state.seasonsCast = state.seasonsCast || {};
      state.seasonsCast.data = action.payload;
    },
    setSeasonEpisode: (state, action) => {
      state.seasonEpisode = state.seasonEpisode || {};
      state.seasonEpisode.data = action.payload;
    },
    setEpisodeCast: (state, action) => {
      state.episodeCast = state.episodeCast || {};
      state.episodeCast.data = action.payload;
    },
    setTvTrailer: (state, action) => {
      state.tvTrailer.data = action.payload;
    },
    setSortAscShow: (state) => {
      state.tvShow.data.sort((a, b) => (a.name < b.name ? -1 : 1));
    },
    setSortDescShow: (state) => {
      state.tvShow.data.sort((a, b) => (a.name > b.name ? -1 : 1));
    },
    setSortAscPop: (state) => {
      state.tvShow.data.sort((a, b) =>
        a.vote_average < b.vote_average ? -1 : 1
      );
    },
    setSortDescPop: (state) => {
      state.tvShow.data.sort((a, b) =>
        a.vote_average > b.vote_average ? -1 : 1
      );
    },
    setSeriesGenre: (state, action) => {
      state.serieGenre = state.serieGenre || {};
      state.serieGenre.data = action.payload;
    },
  },
});

export const {
  setTvShow,
  setTvCast,
  setTvDetails,
  setTvKeyword,
  setTvReviews,
  setTvSeason,
  setSimilarTv,
  setSeasonsCast,
  setSeasonEpisode,
  setEpisodeCast,
  setTvTrailer,
  setSortAscPop,
  setSortAscShow,
  setSortDescPop,
  setSortDescShow,
  setSeriesGenre,
} = TvShowSlice.actions;

export default TvShowSlice.reducer;
