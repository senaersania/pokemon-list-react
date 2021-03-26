import React from 'react'

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          result: []
        };
      }

    componentDidMount() {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=0&offset=10';
        fetch(apiUrl)
        .then((response) => response.json())
        .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result.results
          })
    },
    (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}
render() {
    const { error, isLoaded, result} = this.state;
    //console.log(abilities)
    console.log(result)
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
        {result.map(result => (
          <li key={result.id}>
            {result.name} {result.url}
          </li>
        ))}
      </ul>
      )
    }
  }
}

export default PokemonList
