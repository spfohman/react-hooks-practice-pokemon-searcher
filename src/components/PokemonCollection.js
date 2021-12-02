import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const eachPokemon = pokemon.map((poke) => {
    return <PokemonCard pokemon={poke} key={poke.id} />;
  });
  return <Card.Group itemsPerRow={6}>{eachPokemon}</Card.Group>;
}

export default PokemonCollection;
