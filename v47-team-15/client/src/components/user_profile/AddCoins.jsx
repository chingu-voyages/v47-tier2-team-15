import FavoriteTable from './FavoriteTable';
import useFetch from '../useFetch';
import { useState } from 'react';
import axios from 'axios';

function AddCoins() {
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const [favorites, setFavorites] = useState([]);
  const { data } = useFetch('http://localhost:3003/api/currencies');

  const handleStarClick = async () => {
    try {
      if (selectedCoinId) {
        const response = await axios.post('http://localhost:3003/api/favorites/add', { coinId: selectedCoinId });
        console.log('Response from server:', response);
        setFavorites(response.data.favoriteCoinIds);
        console.log("Coin added");
        alert('Coin added successfully!');
      } else {
        console.error('No coin selected');
        alert('Please select a coin before adding.');
      }
    } catch (error) {
      console.error('Error adding favorite coin:', error);
      alert('Failed to add coin. Please try again.');
    }
  };
  

  return (
    <>
      <div className="bg-[#1A183E] flex flex-row justify-around py-6">
        <div className="flex flex-col justify-center items-center text-white gap-4 bg-[#24224B] p-6">
          <h1 className="text-2xl">Add favorite coins</h1>
          <small>Track your favorite cryptocurrencies easily.</small>
          {/* <label htmlFor="coinDropdown">Select a Coin:</label> */}
          <select className="text-gray-500 rounded p-2"
            id="coinDropdown"
            onChange={(e) => setSelectedCoinId(e.target.value)}
            value={selectedCoinId}
          >
            <option className="text-gray-500" value="">Select a coin</option>
            {data.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleStarClick}
            className="border border-white rounded-md p-2"
          >
            Add coin
          </button>
        </div>
        <FavoriteTable />
      </div>
    </>
  );
}

export default AddCoins;
