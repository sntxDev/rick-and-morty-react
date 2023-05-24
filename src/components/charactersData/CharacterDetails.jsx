/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import BackButton from "../BackButton";

function CharacterDetails() {
  const { characterId } = useParams();
  const { data } = useContext(DataContext);

  const character = data.find(
    (character) => character.id === parseInt(characterId)
  );

  if (!character) {
    return <div>No se encontró el personaje.</div>;
  }

  return (
    <div className="h-screen bg-[url('https://www.xtrafondos.com/wallpapers/rick-3248.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
      <BackButton />
      <div className="text-center bg-[#b3b4b6de] p-4">
        <img src={character.image} alt={character.name} />
        <p className="text-lg font-semibold text-violet-600">
          {character.name} ({characterId})
        </p>
        <p className="text-xs">
          <b>Species</b>: {character.species}
        </p>
        <p className="text-xs">
          <b>Origin</b>: {character.origin.name}
        </p>
        <p className="text-xs">
          <b>Number of episodes</b>: {character.episode.length}
        </p>
        <p className="text-xs">
          <b>Status</b>: {character.status}
        </p>
      </div>
    </div>
  );
}

export default CharacterDetails;
