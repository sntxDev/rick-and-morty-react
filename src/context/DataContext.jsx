/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page, name) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const resetPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => (prevPage = 1));
    }
  };

  return (
    <div>
      <DataContext.Provider
        value={{ data, nextPage, prevPage, resetPage, currentPage }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

export { DataContext, DataProvider };
