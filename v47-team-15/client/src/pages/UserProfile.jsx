import Header from "../components/display_data/Header";
import FavoriteCoins from "../components/user_profile/FavoriteCoins";
import UserInfo from "../components/user_profile/UserInfo";

function UserProfile() {
    

  return (
    <>
        <div>
            <Header />
            <UserInfo />
            <FavoriteCoins />
        </div>
    </>
  )
}

export default UserProfile