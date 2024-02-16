import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';
import useUserProfile from './useUserProfile';

function useAddCoin() {
  const { userId } = useContext(UserContext);
  const [selectedCoinId, setSelectedCoinId] = useState('');
  const { favoriteCoins, setFavoriteCoins } = useUserProfile();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const handleClick = async () => {
      try {
        const coinIdToUse = selectedCoinId;
        if (userId && coinIdToUse) {
          const isCoinAlreadyInFavorites =
            Array.isArray(favoriteCoins) &&
            favoriteCoins.some((coin) => coin.id === coinIdToUse);
          if (isCoinAlreadyInFavorites) {
            setErrorMessage('Coin is already in your favorites!');
            setTimeout(() => {
              setErrorMessage(false);
            }, 3000);
            setSelectedCoinId('');
          } else if (favoriteCoins.length >= 7) {
            setErrorMessage('You cannot add more than 7 favorite coins!');
            setTimeout(() => {
              setErrorMessage(false);
            }, 3000);
            setSelectedCoinId('');
          } else {
            await axios.post(
              'https://crypto-view-test.onrender.com/api/favorites/add',
              { coinId: coinIdToUse },
              {
                withCredentials: true,
                responseType: 'json',
              },
            );

            const updatedProfileResponse = await axios.get(
              'https://crypto-view-test.onrender.com/profile',
              {
                withCredentials: true,
                responseType: 'json',
                timeout: '5000',
              },
            );

            const userProfileData = updatedProfileResponse.data;
            if (Array.isArray(userProfileData.favoriteCoinsDetails)) {
              setFavoriteCoins([...userProfileData.favoriteCoinsDetails]);
              setSuccessMessage('Coin successfully added!');
              setTimeout(() => {
                setSuccessMessage(false);
              }, 3000);
            } else {
              setErrorMessage('Failed to add coin. Please try again.');
            }
            setSelectedCoinId('');
          }
        } 
      } catch (error) {
        setErrorMessage('Failed to add coin. Please try again.');
      }
    };

    handleClick();
  }, [userId, selectedCoinId, setFavoriteCoins, favoriteCoins]);

  const handleAddCoin = (coinId) => {
    setSelectedCoinId(coinId);
  };

  useEffect(() => {}, [favoriteCoins]);

  return {
    favoriteCoins,
    setFavoriteCoins,
    selectedCoinId,
    setSelectedCoinId,
    handleAddCoin,
    successMessage,
    errorMessage,
    setSuccessMessage,
  };
}

export default useAddCoin;
