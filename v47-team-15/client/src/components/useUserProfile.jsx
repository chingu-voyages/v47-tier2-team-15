import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserProfile = () => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3003/profile', {
          withCredentials: true,
          responseType: 'json',
        });
        const userProfileData = response.data;
        console.log(userProfileData);

        setFavoriteCoins(userProfileData.favoriteCoinsDetails);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { favoriteCoins, isLoading, error };
};

export default useUserProfile;
