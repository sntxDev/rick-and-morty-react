/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import ButtonsNav from "./ButtonsNav";
import CharacterList from "./charactersData/CharacterList";

function NavPage() {
  const { nextPage, prevPage, resetPage, currentPage } =
    useContext(DataContext);

  const [searchCharacter, setSearchCharacter] = useState("");

  const handleChange = (e) => {
    setSearchCharacter(e.target.value);
  };

  return (
    <>
      {/* bg-cover bg-no-repeat flex justify-between items-center py-4 px-10 */}
      <div className="flex justify-center sm:justify-between items-center py-4 px-1 sm:mx-6 xl:mx-20">
        <div className="flex">
          <ButtonsNav text="Page 1" handleClick={resetPage} />
          <ButtonsNav
            text="Prev Page"
            handleClick={prevPage}
            nPage={currentPage === 1 ? "" : currentPage - 1}
          />
        </div>
        <div className="flex items-center">
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-52 md:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search characters..."
                onChange={handleChange}
                required
              ></input>
            </div>
          </form>
        </div>
        <ButtonsNav
          text="Next page"
          handleClick={nextPage}
          nPage={currentPage + 1}
        />
      </div>
      <CharacterList searchCharacter={searchCharacter} />
    </>
  );
}

export default NavPage;
