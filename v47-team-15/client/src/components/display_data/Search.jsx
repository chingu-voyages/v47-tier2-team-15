import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked');
    onSearch(searchInput);
    setSearchInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      onSearch(searchInput);
      setSearchInput('');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#1A183E] gap-2 py-6">
        <input
          type="text"
          placeholder="Search cryptocurrencies"
          className="w-1/2 md:w-1/4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#311B3D] focus:ring-[#40254f] block rounded-md sm:text-sm focus:ring-1"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <i
          onClick={handleClick}
          className="bx bx-search text-white text-xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
