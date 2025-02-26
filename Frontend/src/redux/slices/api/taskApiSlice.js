import { apiSlice } from "../apiSlice";

const TASKS_URI = "/task";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${TASKS_URI}/dashboard`,
        method: "GET",
        credentials: "include",
      }),
    }),

    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${TASKS_URI}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URI}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    duplicateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URI}/duplicate/${id}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URI}/updateTask/${data._id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    trashTask: builder.mutation({
      query: (id) => ({
        url: `${TASKS_URI}/duplicate/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    createSubTask: builder.mutation({
      query: (data,id) => ({
        url: `${TASKS_URI}/create-subtask/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),   
    }),

    getSingleTask: builder.query({
      query: (id) => ({
        url: `${TASKS_URI}/${id}`,
        method: "GET",
        credentials: "include",
      }),   
    }),

    postTaskActivity: builder.mutation({
      query: ({data,id}) => ({
        url: `${TASKS_URI}/activity/${id}`,
        method: "POST",
        body:data,
        credentials: "include",
      }),   
    }),

    deleteRestoreTask: builder.mutation({
      query: ({data,actionType}) => ({
        url: `${TASKS_URI}/delete-restore/${id}/?action=${actionType}`,
        method: "DELETE",
        credentials: "include",
      }),   
    }),


  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
  useTrashTaskMutation,
  useCreateSubTaskMutation,
  useGetSingleTaskQuery,
  usePostTaskActivityMutation,
  useDeleteRestoreTaskMutation
} = taskApiSlice;
