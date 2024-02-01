import Header from "../components/display_data/Header";
import FavoriteCoins from "../components/user_profile/FavoriteCoins";
import UserInfo from "../components/user_profile/UserInfo";
import FavoriteTable from "../components/user_profile/FavoriteTable";
import Footer from "../components/display_data/Footer";

function UserProfile() {
    

  return (
    <>
        <div>
            <Header />
            <UserInfo />
            <FavoriteCoins />
            <FavoriteTable />
            <Footer />
        </div>
    </>
  )
}

export default UserProfile