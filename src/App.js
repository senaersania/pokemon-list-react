// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import PokemonList from "./views/PokemonList";
import MyPokemonList from './views/MyPokemonList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={PokemonList} />
      <Route path="/pokemonList" component={PokemonList}/>
      <Route path="/myPokemonList" component={MyPokemonList}/>
    </Switch>
    </Router>
  );
}

export default App;
