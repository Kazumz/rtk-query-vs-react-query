import { useSelector } from '../../store/hooks/useSelector';
import {
    IPokemon,
    useGetPokemonQuery
} from '../../store/api/pokemonApi';

export default function useGetAllPokemon(): readonly IPokemon[] | undefined {
    const examplePullFromRedux = useSelector((state) => state.example.token);
    console.log(`useGetAllPokemon: ${examplePullFromRedux}`);

    const { data: results, isError } = useGetPokemonQuery();

    return !isError ? results : undefined;
}