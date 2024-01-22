import { useState } from "react";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked');
    onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#1A183E] gap-2 py-6">
        <div className="w-60">
          <input
            type="text"
            placeholder="Search cryptocurrencies"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#311B3D] focus:ring-[#40254f] block w-full rounded-md sm:text-sm focus:ring-1"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-[#1A183E] text-white text-xl cursor-pointer"
          onClick={handleClick}
        >
          <i className="bx bx-search"></i>
        </button>
      </div>
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
