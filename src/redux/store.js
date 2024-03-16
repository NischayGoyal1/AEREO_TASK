import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";

const store=configureStore({
    reducer:{
        movieData:MovieSlice
    }
})
export default store;