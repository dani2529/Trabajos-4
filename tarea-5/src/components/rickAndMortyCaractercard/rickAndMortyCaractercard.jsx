import React, { useEffect, useState } from "react";
import CharacterCard from "../CaracterCard/CharacterCard";

const RickAndMortyCharacterCard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleClick = () => {
    props.setUser([]);
  };
  return (
    <div className="container-card">
      <h2>Nombre usario:{props.user}</h2>
      {data.map((item) => {
        return (
          <CharacterCard nombre={item.name} imagen={item.image} genero={item.genre} status={item.status} />
        );
      })}

      <button onClick={handleClick}>Salir</button>
    </div>
  );
};

export default RickAndMortyCharacterCard;
