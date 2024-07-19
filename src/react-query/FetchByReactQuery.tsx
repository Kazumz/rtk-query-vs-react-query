import React from 'react';
import useGetAllPokemon from './services/useGetAllPokemon';

const FetchByReactQuery: React.FC = () => {
    const pokemon = useGetAllPokemon()
    
    // Demonstrating that the same network hook can be used multiple times, but only one network request is made.
    const _ = useGetAllPokemon()
    const __ = useGetAllPokemon()
    
    return (
        <div className="fetch-by-react-query">
            <h2>Fetch by React Query</h2>
            {pokemon?.map((p, i) => (<p>{p.name}</p>))}
        </div>
    );
}

export default FetchByReactQuery