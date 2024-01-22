import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actor: {
    data: [],
  },
  actorDetail: {
    data: [],
  },
  actorCredit: {
    data: [],
  },
};

export const ActorSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    setActor: (state, action) => {
      state.actor.data = action.payload;
    },
    setActorDetail: (state, action) => {
      state.actorDetail.data = action.payload;
    },
    setActorCredit: (state, action) => {
      state.actorCredit.data = action.payload;
    },
  },
});

export const { setActor, setActorDetail, setActorCredit } = ActorSlice.actions;

export default ActorSlice.reducer;
