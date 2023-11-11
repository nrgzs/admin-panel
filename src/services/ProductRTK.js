import { BaseApi } from './rtkQ';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a new slice for image uploads
const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    uploadedImage: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadImageRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadImageSuccess: (state, action) => {
      state.uploadedImage = action.payload;
      state.loading = false;
      state.error = null;
    },
    uploadImageFailure: (state, action) => {
      state.uploadedImage = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadImageRequest, uploadImageSuccess, uploadImageFailure } =
  uploadSlice.actions;

export default uploadSlice.reducer;

export const ProductApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
      providesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: (formData) => {
        return {
          url: 'product',
          method: 'POST',
          body: formData,
        };
      },
      // Handle the mutation asynchronously
      async onMutate(formData) {
        const dispatch = useDispatch();
        // Dispatch the uploadImageRequest action to indicate the start of the upload
        dispatch(uploadImageRequest());

        try {
          const response = await fetch(
            'http://http://127.0.0.1/:3000/api/product/',
            {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          if (response.ok) {
            // Dispatch the uploadImageSuccess action with the uploaded image URL
            dispatch(uploadImageSuccess(response.data.imageUrl));
          } else {
            // Dispatch the uploadImageFailure action on upload error
            dispatch(uploadImageFailure('Image upload failed'));
          }
        } catch (error) {
          // Dispatch the uploadImageFailure action on network error
          dispatch(uploadImageFailure('Network error'));
        }

        // Continue with the product update, using the uploaded image URL
        return {
          url: 'product',
          method: 'POST',
          body: {
            ...formData,
            imageUrl: store.getState().upload.uploadedImage, // Use the uploaded image URL
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
      },
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
