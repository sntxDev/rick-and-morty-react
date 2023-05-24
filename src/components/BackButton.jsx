/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function BackButton() {
  return (
    <>
      <Link to="/characters">
        <div className="absolute top-10 left-10">
          <button className="relative inline-flex items-center justify-center p-0.5 mx-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <MdArrowBack size={20} />
            </span>
          </button>
        </div>
      </Link>
    </>
  );
}

export default BackButton;
