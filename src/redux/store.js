import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/slices/userSlice'
import apiSlice from "../apis/apiSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})


export default store