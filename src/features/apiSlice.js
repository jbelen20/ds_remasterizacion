import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery : fetchBaseQuery({ baseUrl:'http://localhost:3001/'}),
    endpoints:(builder)=>({
        getAllUser: builder.query({
            query:() =>  'users',
        }),
        getAUser: builder.query({
            query:(id) =>  'users/' + id,
        }),
        getCategory: builder.query({
            query:()=> '/categorys'
        }),
        getAnyCategorys: builder.query({
            query:(theCategory) =>  'categorys/' + theCategory,
        }),
        postRegister: builder.mutation({
            query:({name, lastname, email, phone, password}) => ({
                url: '/create',
                method: 'POST',
                body: {name, lastname, email, phone, password}
            }),
        }),
        postLoguin: builder.mutation({
            query:(security) => ({
                url: '/login',
                method: 'POST',
                body: security
            }),
        }),
    })

})

export const { useGetAllUserQuery,
               useGetAUserQuery,
               useGetCategoryQuery, 
               useGetAnyCategorysQuery,
               usePostLoguinMutation,
               usePostRegisterMutation,
            } = apiSlice;
