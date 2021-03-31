import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Pokemons from "./components/Pokemons"
import MyPokemonList from "./components/MyPokemonList"
import PokemonDetail from "./components/PokemonDetail"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Pokemons} />
      <Route path="/pokemonList" exact component={Pokemons} />
      <Route path="/myPokemonList" exact component={Pokemons} />
      <Route path="/pokemon/:id" exact component={PokemonDetail} />
    </Switch>
    </Router>
  )
}

export default App;
