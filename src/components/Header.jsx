import { Link } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";

export const Header = () => {
  return (
    <div>
      <header className="flex items-center h-20 overflow-hidden text-white px-20">
        <Link to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo-700x394.png"
            alt=""
            width={250}
          />
        </Link>
      </header>
    </div>
  );
};
