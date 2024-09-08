import logo from './logo.svg';
import './App.css';
import Knapp from './Knapp';
import { useEffect } from 'react';
import Kult from './Kult';
import { useState } from 'react';


function App() {

  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const p = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(response => response.json());
    setPokemon(p.results);
  }

  useEffect(() =>{ 
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      {
        pokemon && pokemon.map(p => <Knapp tittel={p.name} url={p.url} paragraf={"eofekoffekokofe"}/>)
      }
     
    </div>
    
  );

  
}

export default App;
