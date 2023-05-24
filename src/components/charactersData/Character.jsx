/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className="w-64 flex flex-col my-2 rounded-lg shadow-[0px_0px_15px_-2px_rgba(255,255,255,.8)] hover:shadow-[0px_0px_15px_0px_rgba(0,255,255,1)] h-[266.66px] relative hover:scale-105 transition-all ease-out">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full w-[180px] h-[180px] absolute top-3 left-1/2 transform -translate-x-1/2 z-10 drop-shadow-[0px_7px_10px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_7px_10px_rgba(0,0,0,0.55)] transition-all"
        />
        <div className="bg-white text-center h-[90px] w-full flex flex-col justify-center rounded-lg absolute bottom-0">
          <h2 className="text-lg font-semibold text-center text-violet-600">
            {character.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default Character;
