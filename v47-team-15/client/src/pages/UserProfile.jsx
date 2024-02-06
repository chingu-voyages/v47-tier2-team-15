import Header from "../components/display_data/Header";
import FavoriteCoins from "../components/user_profile/FavoriteCoins";
import UserInfo from "../components/user_profile/UserInfo";
import Footer from "../components/display_data/Footer";
import AddCoins from "../components/user_profile/AddCoins";
import CryptoNews from "../components/user_profile/CryptoNews";
import { useContext } from 'react';
import { UserContext } from '../components/userContext';
import DisplayData from './DisplayData';

function UserProfile() {
  const { username } = useContext(UserContext);

  return (
    <>
    {username ? (
        <div>
            <Header />
            <UserInfo />
            <FavoriteCoins />
            <AddCoins />
            <CryptoNews />
            <Footer />
            </div>
            )
        : (
        <DisplayData />
        )
        }
    </>
  )
}

export default UserProfile