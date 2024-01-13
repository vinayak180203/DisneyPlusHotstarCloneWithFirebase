import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducers/MovieReducer";
import userSlice from "../../../features/user/userSlice";

export const Store = configureStore({
    reducer: {
        movie: MovieReducer,
        user: userSlice
    }
})