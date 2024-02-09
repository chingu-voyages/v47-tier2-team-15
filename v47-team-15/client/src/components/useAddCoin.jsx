import { useContext, useRef } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';
import { useState, useEffect } from 'react';
import useUserProfile from './useUserProfile';
import { useNavigate } from 'react-router-dom';

function useAddCoin() {
  const { username } = useContext(UserContext);
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const { favoriteCoins, setFavoriteCoins } = useUserProfile();
  const selectedCoinIdRef = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Username updated:', username);

    const handleClick = async () => {
      try {
        const coinIdToUse = selectedCoinIdRef.current || selectedCoinId;
        if (username && coinIdToUse) {
          const response = await axios.post(
            'https://crypto-view-test.onrender.com/api/favorites/add',
            { coinId: coinIdToUse },
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
          console.log('Not logged in or no valid coin selected');
          console.log('Please log in and select a valid coin before adding.');
        }
      } catch (error) {
        console.error('Error adding favorite coin:', error);
        alert('Failed to add coin. Please try again.');
      }
    };

    handleClick();
  }, [username, selectedCoinId, setFavoriteCoins]);

  const handleAddCoin = (coinId) => {
    setSelectedCoinId(coinId);
    selectedCoinIdRef.current = coinId;
    // navigate('/portfolio');
  };

  return { favoriteCoins, selectedCoinId, setSelectedCoinId, handleAddCoin };
}

export default useAddCoin;
