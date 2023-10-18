import { BaseApi } from './rtkQ';

export const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
      providesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: (updatedData) => ({
        url: `product`,
        method: 'POST',
        body: updatedData,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `product?ID=${productId}`,
        method: 'DELETE',
        body: productId,
      }),
      invalidatesTags: ['Product'],
    }),
    changeProduct: builder.mutation({
      query: (changedData) => ({
        url: `product`,
        method: 'PUT',
        body: changedData,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useChangeProductMutation,
} = ProductApi;
