import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });
  function handleChange(e) {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    const newPokemon = {
      name: pokemon.name,
      hp: pokemon.hp,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then(addPokemon);
    setPokemon({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
    });
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokemon.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            // value={pokemon.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemon.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemon.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
