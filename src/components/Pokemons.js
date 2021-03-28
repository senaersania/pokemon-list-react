import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import PokemonDetail from './PokemonDetail'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]) //this.state
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
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
                setPokemons(response.data.results) // data sekarang
                setPrev(response.data.prev) // link halaman sebelumnya
                setNext(response.data.next) // link halaman berikutnya
            })
    }, [url]) // ketika value `url` berubah maka fetch ulang data

    return (
        <div>
            <div className="container">
                {pokemons.map((pokemon, index) =>
                    <Pokemon pokemon={pokemon} key={index} handleOnClick={handleOnClick} /> //props lemparan ke pokemon.js
                )}
            </ div>
            <button onClick={() => onPageChange(prev)}>Prev</button>
            <button onClick={() => onPageChange(next)}>Next</button>
        </div>
    )
}

export default Pokemons