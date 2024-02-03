import { useState } from 'react';
import axios from 'axios';

function useAddCoin() {
  const [favorites, setFavorites] = useState([]);

  const handleClick = async (selectedCoinId) => {
    try {
      const response = await axios.post(
        'http://localhost:3003/api/favorites/add',
        { coinId: selectedCoinId },
        {
          withCredentials: true,
          responseType: 'json',
        },
      );
      console.log('Response from server:', response);
      setFavorites(selectedCoinId);
      console.log('Coin added');
      alert('Coin added successfully!');
    } catch (error) {
      console.error('Error adding favorite coin:', error);
      alert('Failed to add coin. Please try again.');
    }
  };

  return { handleClick };
}

export default useAddCoin;
