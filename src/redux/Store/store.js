import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../Slices/movieSlice";

const store = configureStore({
  reducer: {
    movies:movieSlice
  },
});

export default store;