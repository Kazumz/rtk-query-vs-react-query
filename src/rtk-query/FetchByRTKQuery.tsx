import React from 'react';
import useGetAllPokemon from './services/useGetAllPokemon';

const FetchByRTKQuery: React.FC = () => {
    const pokemon = useGetAllPokemon()

    // Demonstrating that the same network hook can be used multiple times, but only one network request is made.
    const _ = useGetAllPokemon()
    const __ = useGetAllPokemon()
    
    return (
        <div className="fetch-by-rtk-query">
            <h2>Fetch by RTK Query</h2>
            {pokemon?.map((p, i) => (<p key={p.name}>{p.name}</p>))}
        </div>
    );
}

export default FetchByRTKQuery