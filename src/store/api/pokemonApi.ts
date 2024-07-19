import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IGetAllPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: readonly IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemon: builder.query<readonly IPokemon[] | undefined, void>({
            query: () => `pokemon`,
            transformResponse(response: IGetAllPokemonResponse): readonly IPokemon[] | undefined {
                return response.results
            }
        }),
    }),
})

export const {
    useGetPokemonQuery,
} = pokemonApi
