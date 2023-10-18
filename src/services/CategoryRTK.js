import { BaseApi } from './rtkQ';

export const CategoryRTK = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `category`,
      providesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: (updatedData) => ({
        url: `category`,
        method: 'POST',
        body: updatedData,
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `category?ID=${categoryId}`,
        method: 'DELETE',
        body: categoryId,
      }),
      invalidatesTags: ['Category'],
    }),
    changeCategory: builder.mutation({
      query: (changedData) => ({
        url: `category`,
        method: 'PUT',
        body: changedData,
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useChangeCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation
} = CategoryRTK;
