import { BaseApi } from './rtkQ';

export const UserRTK = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/auth/user`,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: (updatedData) => ({
        url: `/auth/user`,
        method: 'POST',
        body: updatedData,
        
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/auth/user?ID=${userId}`,
        method: 'DELETE',
        body: userId,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useChangeUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} = UserRTK;
