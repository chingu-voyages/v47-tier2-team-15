import Chart from '../Chart';
import Chart2 from '../Chart2';
import { UserContext } from '../userContext';
import { useContext } from 'react';
// import { useParams } from "react-router";

function UserInfo() {
  const { username } = useContext(UserContext);
  // const { username: routeUsername } = useParams();

  return (
    <>
      {/* <div className="bg-[#1A183E] text-white h-1/2 p-16">
        <div className="w-full flex flex-row">
          <div className="flex flex-col align-center text-center">
            <i className="bx bxs-user text-[4rem]"></i>
            <h1>{username}</h1>
          </div>
          <div className=''>
          <Chart />
          </div> */}
      {/* <div className="w-full flex flex-row justify-center gap-6">
            <div className="hidden md:flex flex-row items-center justify-center gap-8">
              <div className="md:min-w-[10rem] lg:min-w-[14rem] bg-[#1D2A41] rounded py-4 px-10">
                <p className="pb-4">Market Cap</p>
                <div className="flex flex-row gap-4">
                  <span>123$</span>
                  <span className="rounded bg-[#1F3A43] px-1">nest</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-row items-center justify-center gap-8">
              <div className="md:min-w-[10rem] lg:min-w-[14rem] bg-[#1D2A41] rounded py-4 px-10">
                <p className="pb-4">Market Cap</p>
                <div className="flex flex-row gap-4">
                  <span>123$</span>
                  <span className="rounded bg-[#1F3A43] px-1">nest</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-row items-center justify-center gap-8">
              <div className="md:min-w-[10rem] lg:min-w-[14rem] bg-[#311B3D]  rounded py-4 px-10">
                <p className="pb-4">Market Cap</p>
                <div className="flex flex-row gap-4">
                  <span>123$</span>
                  <span className="rounded bg-[#461E3C] px-1">nest</span>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}

      <div className="w-full bg-[#1A183E] text-white h-1/2 p-16 flex flex-row px-32">
        <div className="w-2/3 flex flex-col align-center text-center gap-8">
          {/* <i className="bx bxs-user text-[4rem]"></i> */}
          <div className="flex flex-row justify-around">
            <Chart className="" />
            <h1 className="text-[2rem]">{username}</h1>
          </div>
          <Chart2 />
        </div>
      </div>
    </>
  );
}

export default UserInfo;
