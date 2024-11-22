import { createSlice } from "@reduxjs/toolkit";

export const createUserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
        addUser:(state, action) => {
            state.push(action.payload)
        }
    }
})


export const {addUser}  = createUserSlice.actions
export default createUserSlice.reducer;