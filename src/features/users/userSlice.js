import { createSlice } from "@reduxjs/toolkit";




export const createUserSlice = createSlice({
    name: 'users',
    initialState: {
        addUser:[],
        idState:[],
    },
    reducers:{
        addUser:(state, action) => {
            state.addUser = action.payload 
        },
        getId: (state, action) => {
            state.idState = action.payload 
        },
        deleteId:(state, action) => {
            state.idState = localStorage.clear()
        }
    }
})


export const {addUser, getId, deleteId}  = createUserSlice.actions
export default createUserSlice.reducer;