import "./App.css";
import React, { useEffect, useState } from "react";
import Encabezado from "./components/javaScript/Encabezado";
import Buscador from "./components/javaScript/Buscador";
import PokemonCard from "./components/javaScript/PokemonCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="contenedor-encabezado">
        <Encabezado
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          titulo="Pokedex"
        />
      </div>
      <div className="contenedor-buscador">
        <Buscador texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
      </div>
      <div className="contenedor-pokemon">
        <Container className='container-pc'>
          <Row className='fila'>
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
