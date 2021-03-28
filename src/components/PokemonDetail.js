import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail] = useState('');
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        .then(response => {
            console.log(response.data)
            setPokemonDetail(response.data)
            setLoading(false)
        })
        return() => {
            setLoading(true)
        }
    }, [id])

    if(loading){
        return <div>loading ...</div>
    }else{
        return (
            <div>
                <div className="container">
    		<div className="row d-flex no-gutters">
    			<div className="col-md-5 d-flex">
                    <img className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" src={pokemonDetail.sprites.front_default} />
    				{/* <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" styles="background-image:url(images/about-1.jpg);">
    				</div> */}
    			</div>
    			<div className="col-md-7 pl-md-5 py-md-5">
    				<div className="heading-section pt-md-5">
	            <h2 className="mb-4">{pokemonDetail.name}</h2>
    				</div>
    				<div className="row">
	    				<div className="col-md-6 services-2 w-100 d-flex">
	    					<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-stethoscope"></span></div>
	    					<div className="text pl-3">
	    						<h4>Height</h4>
	    						<p>{pokemonDetail.height}'</p>
	    					</div>
	    				</div>
	    				<div className="col-md-6 services-2 w-100 d-flex">
	    					<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-customer-service"></span></div>
	    					<div className="text pl-3">
	    						<h4>Category</h4>{pokemonDetail.types.map((a, index) =>
	    						<p key={index}>{a.type.name}</p>
                                )}
	    					</div>
	    				</div>
	    				<div className="col-md-6 services-2 w-100 d-flex">
	    					<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-emergency-call"></span></div>
	    					<div className="text pl-3">
	    						<h4>Weight</h4>
	    						<p>{pokemonDetail.weight} lbs</p>
	    					</div>
	    				</div>
	    				<div className="col-md-6 services-2 w-100 d-flex">
	    					<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-veterinarian"></span></div>
	    					<div className="text pl-3">
	    						<h4>Abilities</h4>{pokemonDetail.abilities.map((a, index) => 
	    						<p key={index}>{a.ability.name}</p>
                                    )}
	    					</div>
	    				</div>
	    			</div>
	        </div>
        </div>
    	</div>



            </div>
        )
    }

}

export default PokemonDetail
