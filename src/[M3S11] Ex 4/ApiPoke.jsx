import { useState } from "react";
import React from 'react';

export default function ApiPoke() {

    const [poke, setPoke] = useState()
    const [url, setUrl] = useState()
    const [form, setForm] = useState({
      status: '',
      baseState: ''
    })

    
    async function retornaPokemon() {
        const pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)).json()
        if (pokemon.name) {
          setUrl(pokemon)

          console.log(pokemon)        

        }       

    }

    
    function searchingData(e) {
      setPoke(e.target.value);
     
    }
   

    return (
        <div>
            
            <h1>Escolha um pokemon</h1>
            <input type="radio" value="rattata" name="pokemon" onChange={searchingData} />
            <label>Rattata</label> <br />

            <input type="radio" value="pidgeotto" name="pokemon" onChange={searchingData} />
            <label>Pidgeotto</label><br />

            <input type="radio" name="pokemon" value="charizard" onChange={searchingData} />
            <label>Charizard</label><br />

            <input type="radio" name="pokemon" value="pikachu" onChange={searchingData} />
            <label>Pikachu</label> <br /> <br />

            <button id="btn" onClick={retornaPokemon}> Pesquisar </button>
            {url && url.stats.map((e) => <p>{`${e.stat.name} = ${e.base_stat}`}</p>)}

        </div>
    )
}