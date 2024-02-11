import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch, setFilteredData, data }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked');
    onSearch(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      onSearch(searchInput);
    }
  };

  const resetSearch = () => {
    setFilteredData(data);
    setSearchInput('');
    console.log('search reset');
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#1A183E] gap-2 py-6">
        <div className="relative w-1/2 md:w-1/4 flex flex-row items-center">
          <input
            type="text"
            placeholder="Search cryptocurrencies"
            className="w-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#311B3D] focus:ring-[#40254f] block rounded-md sm:text-sm focus:ring-1"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <i
            onClick={handleClick}
            className="bx bx-search text-white text-xl cursor-pointer px-2"
          ></i>
          <button
            onClick={resetSearch}
            className="absolute right-10 px-1 text-gray-500"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.array.isRequired,
};

export default Search;
