import { useContext } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';
import { useState, useEffect } from 'react';
import useUserProfile from './useUserProfile';

function useAddCoin() {
  const { username } = useContext(UserContext);
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const {favoriteCoins, setFavoriteCoins} = useUserProfile();
  
  useEffect(() => {
    console.log('Username updated:', username);
  }, [username]);

  const handleClick = async () => {
    try {
      if (username) {
        const response = await axios.post(
          'http://localhost:3003/api/favorites/add',
          { coinId: selectedCoinId },
          {
            withCredentials: true,
            responseType: 'json',
          }
        );
        console.log('Response from server:', response);
        setFavoriteCoins(response.data.favoriteCoinIds);
        console.log('Coin added');
        alert('Coin added successfully!');
      } else {
        console.error('Not logged in or no coin selected');
        alert('Please log in and select a coin before adding.');
      }
    } catch (error) {
      console.error('Error adding favorite coin:', error);
      alert('Failed to add coin. Please try again.');
    }
  };

  return { selectedCoinId, setSelectedCoinId, handleClick };
}

export default useAddCoin;
