import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     {
//         name:"",
//         lastname:"",
//         email:"",
//         phone:"",
//         password:"",
//     }
// ]


export const createUserSlice = createSlice({
    name: 'usersPost',
    initialState: [],
    reducers:{
        addUser:(state, action) => {
            state.push(action.payload)
        },
        // conectionPost:()=>{
        //     fetch('http://localhost:3000',{
        //         method: "POST",
        //         headers:{
        //             "content-type": "application/JSON"
        //         },
        //         body:JSON.stringify(initialState)
        //     })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // }
    }
})


export const {addUser}  = createUserSlice.actions
export default createUserSlice.reducer;