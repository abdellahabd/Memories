import { configureStore, createSlice } from "@reduxjs/toolkit";

//
const PosteSlices = createSlice({
  name: "Poste",
  initialState: [],
  reducers: {
    fetchAction(Postes, action) {
      return action.payload;
    },
    createAction(Postes, action) {
      return [...Postes, action.payload];
    },
  },
});
//

const store = configureStore({
  reducer: {
    Poste: PosteSlices.reducer,
  },
});

export { store };
export const { fetchAction, createAction } = PosteSlices.actions;
