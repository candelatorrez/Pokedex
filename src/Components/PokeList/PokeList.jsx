import {useEffect, useState} from "react";
import "./PokeList.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import NavBar from "../NavBar/NavBar";
import BottomBar from "../BottomBar/BottomBar";

function PokeList(){
    const [allPokemons, setAllPokemons] = useState([])

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")

        const data = await res.json();

        function createPokemonObject(results){
            results.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                setAllPokemons((currentList) => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results);
    };
    
    useEffect (() => {
        getAllPokemons();
        // eslint-disable-next-line
    }, [])


    return (
        <div className="app-container">
            <NavBar />
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats, index) => (
                        <PokemonCard
                            key={index}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={pokemonStats.sprites.other["official-artwork"].front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            type={pokemonStats.types[0].type.name}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0,3)}
                            statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0,3)}
                            />
                    ))}
                </div>
            </div>
            <BottomBar />
        </div>
    )
}


export default PokeList