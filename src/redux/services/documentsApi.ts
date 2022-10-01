import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DOCUMENTS_PER_PAGE } from 'constants/documents';
import { Documents } from 'types/Documents';

const defaultParams = {
  _limit: DOCUMENTS_PER_PAGE,
};

// Define a service using a base URL and expected endpoints
export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getDocuments: builder.query<Responce, object>({
      query: (params) => {
        return { url: `documents/`, params: { ...params, ...defaultParams } };
      },
      transformResponse(response: Documents, meta) {
        return {
          documents: response,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDocumentsQuery } = documentsApi;

type Responce = { documents: Documents; totalCount: number };
