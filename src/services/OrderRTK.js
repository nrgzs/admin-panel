import { BaseApi } from './rtkQ';

export const OrderRTK = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `order`,
      providesTags: ['Order'],
    }),
    updateOrder: builder.mutation({
      query: (updatedData) => ({
        url: `order`,
        method: 'POST',
        body: updatedData,
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `order?ID=${orderId}`,
        method: 'DELETE',
        body: orderId,
      }),
      invalidatesTags: ['Order'],
    }),
    changeOrder: builder.mutation({
      query: (changedData) => ({
        url: `order`,
        method: 'PUT',
        body: changedData,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const {
  useChangeOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} = OrderRTK;
