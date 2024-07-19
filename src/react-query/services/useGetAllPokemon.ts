import useAPI from '../useAPI';
import { useSelector } from '../../store/hooks/useSelector';

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
    const examplePullFromRedux = useSelector((state) => state.example.token);
    console.log(`useGetAllPokemon: ${examplePullFromRedux}`);
    
    const { data: axiosResponse, isError } = useAPI<IGetAllPokemonResponse>(
        REACT_QUERY_KEY,
        'https://pokeapi.co/api/v2/pokemon/'
    );

    return !isError ? axiosResponse?.data?.results : undefined;
}