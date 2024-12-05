import { configureStore } from "@reduxjs/toolkit";
import  createUserReducer from "../features/users/userSlice";
import { handlerFetchData } from "../features/users/userGet";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
    reducer:{
        usersPost: createUserReducer,
        fetchData: handlerFetchData,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

 