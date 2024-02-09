import FavoriteTable from './FavoriteTable';
import useFetch from '../useFetch';
// import { useState } from 'react';
// import axios from 'axios';
import useAddCoin from '../useAddCoin';

function AddCoins() {
  const { selectedCoinId, setSelectedCoinId, handleAddCoin } = useAddCoin();
  
  const { data } = useFetch('https://crypto-view-test.onrender.com/api/currencies');
  
  const handleDropdownChange = (e) => {
    const coinId = e.target.value;
    setSelectedCoinId(coinId);
    handleAddCoin(coinId); 
  };
  return (
    <>
      <div className="bg-[#1A183E] flex flex-wrap flex-row justify-around py-2">
        <div className="flex flex-col justify-center items-center text-white gap-4 bg-[#24224B] p-6">
          <h1 className="text-2xl">Add favorite coins</h1>
          <small>Track your favorite cryptocurrencies easily.</small>
          {/* <label htmlFor="coinDropdown">Select a Coin:</label> */}
          <select className="text-gray-500 rounded p-2"
            id="coinDropdown"
            onChange={handleDropdownChange}
            value={selectedCoinId}
          >
            <option className="text-gray-500" value="">Select a coin</option>
            {data.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
          {/* <button
            onClick={() => handleAddCoin(selectedCoinId)}
            className="border border-white rounded-md p-2"
          >
            Add coin
          </button> */}
        </div>
        <div className='mt-10 md:mt-0'>
        <FavoriteTable />
        </div>
      </div>
    </>
  );
}

export default AddCoins;
