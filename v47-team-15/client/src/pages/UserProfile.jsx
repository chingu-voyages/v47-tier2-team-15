import Header from '../components/display_data/Header';
import FavoriteCoins from '../components/user_profile/FavoriteCoins';
import UserInfo from '../components/user_profile/UserInfo';
import Footer from '../components/display_data/Footer';
import AddCoins from '../components/user_profile/AddCoins';
import CryptoNews from '../components/user_profile/CryptoNews';
import { useContext } from 'react';
import { UserContext } from '../components/userContext';
import DisplayData from './DisplayData';
import useUserProfile from '../components/useUserProfile';
import Spinner from '../components/display_data/Spinner';

function UserProfile() {
  const { username } = useContext(UserContext);
  const { isLoading } = useUserProfile();

  return (
    <>
      {username ? (
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Header />
              <UserInfo />
              <FavoriteCoins />
              <AddCoins />
              <CryptoNews />
              <Footer />
            </>
          )}
        </div>
      ) : (
        <DisplayData />
      )}
    </>
  );
}

export default UserProfile;
