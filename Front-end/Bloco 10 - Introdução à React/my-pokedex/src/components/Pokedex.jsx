import React from "react";
import data from '../data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
    render() {
        return (
            <Pokemon pokemons={data}/>
        )
    }
}

export default Pokedex;