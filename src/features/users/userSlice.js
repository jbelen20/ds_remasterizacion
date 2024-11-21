import { createSlice } from "@reduxjs/toolkit";

export const createUserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
        addUser:(store, action) => {
            console.log(store, action)
        }
    }
})

export const {addUser}  = createUserSlice.actions
export default createUserSlice.reducer;