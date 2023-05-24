/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import Character from "./Character";

function CharacterList({ searchCharacter }) {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredCharacters = data.filter((character) =>
      character.name.toLowerCase().includes(searchCharacter.toLowerCase())
    );
    setFilteredData(filteredCharacters);
  }, [searchCharacter, data]);

  return (
    <>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto">
        {filteredData.map((character) => (
          <div key={character.id} className="flex justify-center">
            <Character character={character} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CharacterList;
