import { ArtWork, Response } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/' }),
  endpoints: (build) => ({
    fetchAllArts: build.query<Response<ArtWork[]>, unknown>({
      query: () => ({
        url: 'artworks/',
        params: {
          fields: 'id,title,image_id,artist_title,place_of_origin,department_title,date_end',
        },
      }),
    }),
    fetchSearchingArts: build.query<Response<ArtWork[]>, string>({
      query: (searchValue = '') => ({
        url: 'artworks/search',
        params: {
          q: searchValue,
          fields: 'id,title,image_id,artist_title,place_of_origin,department_title,date_end',
        },
      }),
    }),
  }),
});
