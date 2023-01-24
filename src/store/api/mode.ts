import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Mode {
    name: string,
    field: number,
  }

export const modeApi = createApi({
    reducerPath:'ModesApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://demo7919674.mockable.io/"}),
    endpoints: (builder) => ({
        getAllModes: builder.query<Mode[], void>({
            query: () => '',
        }),
    }) 

})

export const {useGetAllModesQuery} = modeApi;

export default modeApi;