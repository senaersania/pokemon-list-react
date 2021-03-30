import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import PokemonDetail from './PokemonDetail'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])
    // const [currentPage, setCurrentPage] = useState(0);
    const [limit] = useState(200)
    const [offset] = useState(0)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(url)

    const handleOnClick = id => {
        return <PokemonDetail id={id} />
    }

    const onPageChange = url => {
        setUrl(url);
    }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPokemons(response.data.results)
                setPrev(response.data.previous)
                setNext(response.data.next)
            })
    }, [url])

    return (
        <div className="col-md-12">
            <div className="row">
                {pokemons.map((pokemon, index) =>
                    <Pokemon pokemon={pokemon} key={index} handleOnClick={handleOnClick} />
                )}
            </ div>
            <div className="row">
                <div className="col-lg-12 mb-3 text-center fixed-bottom">
                    <button onClick={() => onPageChange(prev)} className="btn btn-success mr-2">Prev</button>
                    <button onClick={() => onPageChange(next)} className="btn btn-success">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemons