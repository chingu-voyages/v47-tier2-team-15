import React from 'react';

function Search() {
  return (
    <>
      <div className="flex justify-center bg-[#1A183E] py-6">
        <div>
          <input type="text" placeholder="Search cryptocurrencies" className='rounded py-2 px-6' />
          <i className='bx bx-search' color="white"></i>
        </div>
      </div>
    </>
  );
}

export default Search;
