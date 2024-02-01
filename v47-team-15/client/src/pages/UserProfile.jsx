import Header from "../components/display_data/Header";
import FavoriteCoins from "../components/user_profile/FavoriteCoins";
import UserInfo from "../components/user_profile/UserInfo";
import Footer from "../components/display_data/Footer";
import AddCoins from "../components/user_profile/AddCoins";

function UserProfile() {
    
  return (
    <>
        <div>
            <Header />
            <UserInfo />
            <FavoriteCoins />
            <AddCoins />
            <Footer />
        </div>
    </>
  )
}

export default UserProfile