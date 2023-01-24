import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Mode {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [string],
    quantity: number,
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