import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const productAdapter = createEntityAdapter()

// Define a service using a base URL and expected endpoints
export const BaseApi = createApi({
  // reducerPath: 'BaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
    // mode: 'no-cors',
    // method: 'GET',
  }),
  endpoints: () => ({}),
  // endpoints: (builder) => ({
  //   getAllProducts: builder.query({
  //     query: () => `product`,

  //     providesTags: ['Product'],
  //   }),
  //   updateProduct: builder.mutation({
  //     query: (updatedData) => ({
  //       url: `product`,
  //       method: 'POST',
  //       body: updatedData,
  //     }),

  //     invalidatesTags: ['Product'],
  //   }),
  //   deleteProduct: builder.mutation({
  //     query: (productId) => ({
  //       url: `product?ID=${productId}`,
  //       method: 'DELETE',
  //       body: productId,
  //     }),
  //     invalidatesTags: ['Product'],
  //   }),
  //   changeProduct: builder.mutation({
  //     query: (changedData) => ({
  //       url: `product`,
  //       method: 'PUT',
  //       body: changedData,
  //     }),

  //     invalidatesTags: ['Product'],
  //   }),
  // }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const {
//   useGetAllProductsQuery,
//   useUpdateProductMutation,
//   useDeleteProductMutation,
//   useChangeProductMutation
// } = ProductApi;
