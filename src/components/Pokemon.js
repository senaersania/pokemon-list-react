import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CatchSuccess from './popup/CatchSuccess'

const Pokemon = ({pokemon, handleOnClick}) => {

    const [pokemonData, setPokemonData] = useState('')
    const [loading, setLoading] = useState(true)
    const [owned, setOwned] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTarget, setModalTarget] =useState('')

    function handleModal () {
        let modal = false
        if(!modal){
            setModalTarget('#successModal')
            console.log(modalTarget)
        }else{
            setModalTarget('#failedModal')
            console.log(modalTarget)
        }
    }

    function handleCatch () {
        const chance = Math.random() * (1-0) + 0;
        //console.log('chance: ',chance);
        if(chance > 0.5){
            setOwned(owned+1)
            handleModal()
            setModalVisible(!modalVisible)
        }
    }

    useEffect(() => {
        axios.get(pokemon.url)
        .then(response => {
            //console.log('pokemons', response.data);
            setPokemonData(response.data)
            setLoading(false)
        })
        return() => {
            setLoading(true)
        }
    }, [pokemon.url])

    if(loading){
        return   <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
    }else{
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 text-center text-uppercase">
                <div className="card">
                    <a href={`/pokemon/${pokemonData.id}`}>
                    <img className="card-img-top img-fluid" style={{width: "30%",}} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title"><a href={`/pokemon/${pokemonData.id}`} className="text-uppercase font-weight-bold text-decoration-none text-success">{pokemonData.name}</a></h5>
                        <p className="card-text">ID : #{pokemonData.id}</p>
                        <p className="card-text">Owned : {owned}</p>
                        <div className="row">
                            <div className="col text-center">
                            <a href={`/pokemon/${pokemonData.id}`} className="btn btn-success mr-3 text-uppercase">Detail</a>
                            <button onClick={() => handleCatch()} className="btn btn-success mr-3 text-uppercase" data-toggle="modal" data-target={modalTarget}>Catch</button>
                            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#successModal">Launch Modal</button> */}
                            <CatchSuccess modalVisible={modalVisible}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Pokemon
