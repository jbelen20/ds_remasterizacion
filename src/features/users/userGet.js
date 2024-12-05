import { createSlice } from "@reduxjs/toolkit";

export const handlerFetchData = createSlice({
    name: 'fetchData',
    initialState:[],
    reducers:{
        getAllUsers : (state, action)=>{
            fetch('http://localhost:3001/')
                .then(response => response.json())
                .then(data => {
                    state.push(data)
                    console.log(state)
                });
        }
    }
})


export default handlerFetchData.reducer;