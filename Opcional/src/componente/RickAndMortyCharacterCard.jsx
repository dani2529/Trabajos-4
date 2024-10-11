import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const RickAndMortyCharacterCard = (props) => {
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");

  const id = props.id;

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/" + id;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data <------");
        setImagen(data.image);
        setNombre(data.name);
      });
  }, []);

  return (
    <div>
      <CharacterCard imagen={imagen} nombre={nombre} />
    </div>
  );
};

export default RickAndMortyCharacterCard;
