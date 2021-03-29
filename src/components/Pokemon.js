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
        return   <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                 </div>
    }else{
        return (
            <div className="col-sm-5 col-md-6 text-center">

                <div className="card">
                <a href={`/pokemon/${pokemonData.id}`}>
                <img className="card-img-top img-fluid" style={{width: "30%",}} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">ID : #{pokemonData.id}</h5>
                    <p className="card-text text-capitalize"><a href={`/pokemon/${pokemonData.id}`}>{pokemonData.name}</a></p>
                    <p className="card-text">Owned : {owned}</p>
                    <a onClick={() => handleCatch()} className="btn btn-primary">Catch Pokemon</a>
                </div>
                </div>

            </div>
        )
    }
}

export default Pokemon
