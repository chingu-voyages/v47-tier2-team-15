import Header from "../components/display_data/Header";
import FavoriteCoins from "../components/user_profile/FavoriteCoins";
import UserInfo from "../components/user_profile/UserInfo";
import Footer from "../components/display_data/Footer";
import AddCoins from "../components/user_profile/AddCoins";
import CryptoNews from "../components/user_profile/CryptoNews";

function UserProfile() {
    
  return (
    <>
        <div>
            <Header />
            <UserInfo />
            <FavoriteCoins />
            <AddCoins />
            <CryptoNews />
            <Footer />
        </div>
    </>
  )
}

export default UserProfile