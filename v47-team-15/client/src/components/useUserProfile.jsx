import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from './userContext';

const useUserProfile = () => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (userId) {
          const response = await axios.get('http://localhost:3003/profile', {
            withCredentials: true,
            responseType: 'json',
            timeout: '5000',
          });
          const userProfileData = response.data;
          setFavoriteCoins(userProfileData.favoriteCoinsDetails);
          setIsLoading(false);
        } else {
          console.log('no user found!');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("Error fetching", error)
        } else {
          setError(error);
        }
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return { favoriteCoins, setFavoriteCoins, isLoading, error };
};

export default useUserProfile;
