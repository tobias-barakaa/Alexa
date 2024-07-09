// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL } from '../constants';

// // const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
// const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL + '/api' });

// export const apiSlice = createApi({
//     baseQuery,
//     tagTypes: ['Articles', 'writers', 'users'],
//     endpoints: () => ({})
// })

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Articles', 'writers', 'users'],
  endpoints: () => ({})
});


