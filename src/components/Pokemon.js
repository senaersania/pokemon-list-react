import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = ({pokemon, handleOnClick}) => {

    const [pokemonData, setPokemonData] = useState('')
    const [loading, setLoading] = useState(true)
    const [owned, setOwned] = useState(0)
    const [pokeId, setPokeId] = useState('')

    function handleCatch () {
        const chance = Math.random() * (1-0) + 0;
        console.log('chance: ',chance);
        if(chance > 0.5){
            setOwned(owned+1)
        }
    }
    
    useEffect(() => {
        axios.get(pokemon.url)
        .then(response => {
            console.log('pokemons', response.data);
            setPokemonData(response.data)
            setLoading(false)
            setPokeId(response.data.id)
        })
        return() => {
            setLoading(true)
        }
    }, [pokemon.url])

    if(loading){
        return <div>loading...</div>
    }else{
        return (
            
            <div className="card d-flex flex-column">
                <img className="card-img-top" styles="height: 100px" src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <div className="card-body">
                    <h2><a href={`/pokemon/${pokemonData.id}`}>{pokemonData.name}</a></h2>
                    <h2>{pokeId}</h2>
                    <h3>Owned : {owned}</h3>

                    {/* <ul>
                        {pokemonData.abilities.map((a, index) =>
                            <li key={index}>{a.ability.name}</li>
                        )}
                        
                    </ul> */}

                    <a onClick={() => handleCatch()} className="btn btn-primary">Catch</a>
                </div>
                
            </div>
        )
    }
}

export default Pokemon
