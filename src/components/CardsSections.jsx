/* eslint-disable react/prop-types */
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const CardsSections = ({ img, text }) => {
  return (
    <Link to={"/" + text}>
      <div className="max-w-sm h-96 mx-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all">
        <img className="rounded-t-lg object-cover w-96 h-48" src={img} alt="" />
        <div className="px-5">
          <h5 className="text-2xl font-bold dark:text-white mb-2 capitalize pt-5">
            {text}
          </h5>
          <p className="text-lg font-light dark:text-white mb-9 capitalize">
            list of rick and morty {text}
          </p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">
            See more <FiArrowRight size={15} className="ml-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};
