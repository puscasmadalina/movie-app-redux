import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    isOpen: false,
    modalType: "",
  },

  trendingMovie: {
    data: null,
  },
  trendingTv: {
    data: null,
  },

  loadMore: {
    page: 1,
  },
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log("deschid modala");
      state.modal.isOpen = true;
      state.modal.modalType = action.payload;
    },
    closeModal: (state) => {
      console.log("inchid modala");
      state.modal.isOpen = false;
    },
    trendingMovies: (state, action) => {
      state.trendingMovie.data = action.payload;
    },
    trendingTvShows: (state, action) => {
      state.trendingTv.data = action.payload;
    },

    loadingMore: (state) => {
      state.loadMore.page += 1;
    },
  },
});

export const {
  openModal,
  closeModal,
  trendingMovies,
  trendingTvShows,
  loadingMore,
} = AppSlice.actions;

export default AppSlice.reducer;
