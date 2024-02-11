import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';
import useUserProfile from './useUserProfile';

function useAddCoin() {
  const { username } = useContext(UserContext);
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const { favoriteCoins, setFavoriteCoins } = useUserProfile();

  useEffect(() => {
    const handleClick = async () => {
      try {
        const coinIdToUse = selectedCoinId;
        if (username && coinIdToUse) {
          await axios.post(
            'http://localhost:3003/api/favorites/add',
            { coinId: coinIdToUse },
            {
              withCredentials: true,
              responseType: 'json',
            },
          );

          const updatedProfileResponse = await axios.get(
            'http://localhost:3003/profile',
            {
              withCredentials: true,
              responseType: 'json',
              timeout: '5000',
            },
          );

          const userProfileData = updatedProfileResponse.data;
          setFavoriteCoins([...userProfileData.favoriteCoinsDetails]);
          console.log('Coin added', userProfileData.favoriteCoinsDetails);
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
  };

  useEffect(() => {
    console.log('Favorite coins updated', favoriteCoins);
  }, [favoriteCoins]);

  return {
    favoriteCoins,
    setFavoriteCoins,
    selectedCoinId,
    setSelectedCoinId,
    handleAddCoin,
  };
}

export default useAddCoin;
