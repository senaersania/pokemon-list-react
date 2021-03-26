import React from 'react'
import logo from "../pokemon-logo.png"

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">   
            <div className="container">

                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/pokemonList">Pokemon List <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/myPokemonList">My Pokemon List</a>
                    </li>
                    </ul>
                    
                </div>
            </div>           
        </nav>
    )
}

export default navbar
