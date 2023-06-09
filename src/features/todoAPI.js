
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/todos/"}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "",
      providesTags: ['Todos']
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        url:'',
        method :'POST',
        body:body
      }),
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation({
      query: ({id,todo,status}) => ({
        url:`${id}`,
        method :'PUT',
        body:{todo,status}
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url:`${id}`,
        method :'DELETE'
      }),
      invalidatesTags: ['Todos']
    })
  }),
});

export const { useGetAllTodosQuery, useCreateTodoMutation, useUpdateTodoMutation,useDeleteTodoMutation } = todoApi;