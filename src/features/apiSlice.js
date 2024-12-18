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
    })

})

export const { useGetAllUserQuery, useGetAUserQuery, useGetCategoryQuery, useGetAnyCategorysQuery } = apiSlice;
