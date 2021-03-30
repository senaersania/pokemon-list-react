import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TYPE_COLORS = {
	bug: "B1C12E",
	dark: "4F3A2D",
	dragon: "755EDF",
	electric: "FCBC17",
	fairy: "F4B1F4",
	fighting: "823551D",
	fire: "E73B0C",
	flying: "A3B3F7",
	ghost: "6060B2",
	grass: "74C236",
	ground: "D3B357",
	ice: "A3E7FD",
	normal: "C8C4BC",
	poison: "934594",
	psychic: "ED4882",
	rock: "B9A156",
	steel: "B5B5C3",
	water: "3295F6",
};

const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail] = useState('')
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
	const [pokemonHeight, setPokemonHeight] = useState(0)
	const [pokemonWeight, setPokemonWeight] = useState(0)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        .then(response => {
			//console.log(response.data)
            setPokemonDetail(response.data)
            setLoading(false)
			setPokemonHeight(Math.round(response.data.height * 10))
			setPokemonWeight(Math.round(response.data.weight * 0.1))
        })
        return() => {
            setLoading(true)
        }
    }, [id])

    if(loading){
        return <div>loading ...</div>
    }else{
        return (
	<div className="col">
		<div className="card">
			<div className="card-header">
				<div className="row">
					<div className="col-5">
						<h5>#{pokemonDetail.id}</h5>
					</div>
					<div className="col-7">
						<div className="float-right">
							{pokemonDetail.types.map((type, index) =>(
							<span 
							className="badge badge-pill badge-primary" 
							key={index}
							style={{
								backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
								color: "#fff",
							}}
							>
								{type.type.name}
							</span>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="card-body">
				<div className="row align-items-center">
					<div className="col-md-3">
						<img
							src={pokemonDetail.sprites.front_default}
							className="card-img-top rounded mx-auto mt-2"
							alt="pokemon"
						/>
					</div>
					<div className="col-md-9">
						<h4 className="mx-auto text-capitalize">
							{pokemonDetail.name}
						</h4>

						{/* status HP bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								HP
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[0].base_stat}%`,
											backgroundColor: "#FF5959",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[0].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>

						{/* status Attack bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								Attack
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[1].base_stat}%`,
											backgroundColor: "#F5AC78",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[1].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>

						{/* status Defense bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								Defense
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[2].base_stat}%`,
											backgroundColor: "#FAE078",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[3].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>

						{/* status Speed bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								Speed
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[3].base_stat}%`,
											backgroundColor: "#FA92B2",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[3].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>

						{/* status Special Attack bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								Special Attack
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[4].base_stat}%`,
											backgroundColor: "#9DB7F5",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[4].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>

						{/* status Special Defense bar */}
						<div className="row align-item-center">
							<div className="col-12 col-md-3">
								Special Defense
							</div>
							<div className="col-12 col-md-9">
								<div className="progress">
									<div
										className="progress-bar"
										role="progress-bar"
										style={{
											width: `${pokemonDetail.stats[5].base_stat}%`,
											backgroundColor: "#A7DB8E",
										}}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									>
										<small>
											{pokemonDetail.stats[5].base_stat}
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="card-body">
						<div className="card-tite">
							<h4 className="text-center mb-4">Profile</h4>
							<div className="row">
								{/* first column */}
								<div className="col-md-6">
									<div className="row">
										<div className="col-6">
											<h6 className="float-right">
												Height:
											</h6>
										</div>
										<div className="col-6">
											<h6 className="float-left">
												{pokemonHeight} cm
											</h6>
										</div>
										<div className="col-6">
											<h6 className="float-right">
												Weight:
											</h6>
										</div>
										<div className="col-6">
											<h6 className="float-left">
												{pokemonWeight} kg
											</h6>
										</div>
									</div>
								</div>
								{/* second column */}
								<div className="col-md-6">
									<div className="row">
										<div className="col-6">
											<h6 className="float-right">
												Abilities:
											</h6>
										</div>
										<div className="col-6">{pokemonDetail.abilities.map((ability, index) => (
											<h6 className="float-left text-capitalize" key={index}>
												{ability.ability.name}
											</h6>
										))}
										</div>
										<div className="col-6">
											<h6 className="float-right">
												Base Exp:
											</h6>
										</div>
										<div className="col-6">
											<h6 className="float-left text-capitalize">
												{pokemonDetail.base_experience}
											</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card-footer text-muted poke-footer">
				<div className="row">
					<div className="col-md-6 col-12 container d-flex h-100 justify-content-center">
						<p className="pt-3">
							Pokemon API
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
		)
	}
}

export default PokemonDetail
