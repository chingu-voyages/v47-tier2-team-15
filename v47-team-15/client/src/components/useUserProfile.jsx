import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useContext } from 'react';
// import UserContext from '../components/userContext';

const useUserProfile = () => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { username } = useContext(UserContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // if (username) {
        const response = await axios.get('/profile');
        const userProfileData = response.data;
        console.log(userProfileData);

        setFavoriteCoins(userProfileData.favoriteCoinsDetails);
        setIsLoading(false);
        // } else {
        //   console.log("no user found!")
        // }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { favoriteCoins, setFavoriteCoins, isLoading, error };
};

export default useUserProfile;
