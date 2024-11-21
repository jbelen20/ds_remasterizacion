import { configureStore } from "@reduxjs/toolkit";
import  createUserReducer from "../features/users/userSlice";

export const store = configureStore({
    reducer:{
        users: createUserReducer
    }
})

 