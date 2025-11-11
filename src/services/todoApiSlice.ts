import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApiSlice = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    return {
      getTodo: builder.query({
        query: () => "/todos",
      }),
      getTodoById : builder.query({
        query: (id)=> `/todos/${id}`
      })
    };
  },
});

export const { useGetTodoQuery, useGetTodoByIdQuery } = todoApiSlice;
