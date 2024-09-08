
import React, {useEffect, useState} from 'react';

function Knapp(props) {
    const [verdi, setVerdi] = useState(0);

    const [pokemon, setPokemon] = useState(null);

    function hentPokemon() {
        fetch(props.url).then(response => response.json()).then(data => setPokemon(data));
    }

    useEffect(() => {
        hentPokemon();
    })

    function økverdi() {
        setVerdi(verdi + 1);
    }

    return (
        <div className='knappdiv'>
         <button className='knappelement' onClick={() => økverdi()}>{props.tittel}</button>
        
         {pokemon && <img src={pokemon.sprites.front_default}></img>
         }
        

        </div>
    )
}
    
export default Knapp;