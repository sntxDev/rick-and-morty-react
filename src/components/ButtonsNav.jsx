/* eslint-disable react/prop-types */
function ButtonsNav({ text, handleClick, nPage }) {
  return (
    <>
      <button
        className="relative inline-flex items-center justify-center p-0.5 mx-2 overflow-hidden text-xs font-normal text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white"
        onClick={handleClick}
      >
        <span className="relative px-0.5 py-1.5 sm:px-2 sm:font-medium transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {text} {nPage}
        </span>
      </button>
    </>
  );
}

export default ButtonsNav;
