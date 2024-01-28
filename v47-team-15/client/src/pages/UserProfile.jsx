import { UserContext } from "../components/userContext";
import { useContext } from "react";
import Header from "../components/display_data/Header";
import { useParams } from "react-router";

function UserProfile() {
    const { username } = useContext(UserContext);
    const { username: routeUsername } = useParams();

  return (
    <>
        <div>
            <Header />
            <div className="bg-[#1A183E] text-white h-1/2 py-16">{`Welcome, ${routeUsername || username}`}!</div>
        </div>
    </>
  )
}

export default UserProfile