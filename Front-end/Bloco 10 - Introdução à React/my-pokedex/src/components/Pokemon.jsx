import React from "react";

const list = (params) => {
  return (params.map((pokemon => {
    const { name, type, averageWeight, image } = pokemon;
    return (
      <section>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{averageWeight.value}{averageWeight.measurementUnit}</li>
        </ul>
        <img src={image} alt={name} />
      </section>
    )
  })))
}

class Pokemon extends React.Component {
  render() {
    return (
      
      {list(this.props.pokemons)}
    )
  }
}

export default Pokemon;