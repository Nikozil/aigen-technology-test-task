import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Documents } from 'types/Documents';

const defaultParams = {
  _limit: 3,
};

// Define a service using a base URL and expected endpoints
export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getDocuments: builder.query<Documents, object>({
      query: (params) => {
        return { url: `documents/`, params: { ...params, ...defaultParams } };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDocumentsQuery } = documentsApi;
