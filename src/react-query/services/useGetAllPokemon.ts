import useAPI from '../useAPI';

const REACT_QUERY_KEY = "get-all-pokemon";

export interface IGetAllPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: readonly IPokemon[];
}

interface IPokemon {
    name: string;
    url: string;
}

export default function useGetAllPokemon(): readonly IPokemon[] | undefined {
    const { data: axiosResponse, isError } = useAPI<IGetAllPokemonResponse>(
        REACT_QUERY_KEY,
        'https://pokeapi.co/api/v2/pokemon/'
    );

    return !isError ? axiosResponse?.data?.results : undefined;
}