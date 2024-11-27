import { configureStore } from "@reduxjs/toolkit";
import  createUserReducer from "../features/users/userSlice";
import { handlerFetchData } from "../features/users/userGet";

export const store = configureStore({
    reducer:{
        usersPost: createUserReducer,
        fetchData: handlerFetchData
    }
})

 