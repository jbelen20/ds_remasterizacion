import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        nameCategory:'hola'
    },
    reducers:{
        addCategory:(state, action) => {
            state.nameCategory = action.payload 
           
        },
    }
})


export const { addCategory }  = categorySlice.actions
export default categorySlice.reducer;