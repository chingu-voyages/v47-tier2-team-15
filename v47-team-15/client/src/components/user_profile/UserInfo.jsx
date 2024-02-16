import DeleteAccount from '../DeleteAccount';
import { UserContext } from '../userContext';
import { useContext } from 'react';

function UserInfo() {
  const { username } = useContext(UserContext);

  return (
    <>
      <div className="w-full bg-[#1A183E] text-white h-1/2 p-16 flex flex-col justify-center items-center gap-4">
        <div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Hello, {username}!
        </div>
        <div className="w-28 h-28 text-center rounded-full bg-[#24224B] uppercase relative">
          <span className="text-3xl absolute top-8 left-0 right-0 font-bold">
            {username.charAt(0)}
          </span>
        </div>
        <p className="text-base">Your portfolio includes favorites</p>
        <DeleteAccount />
      </div>
    </>
  );
}

export default UserInfo;
