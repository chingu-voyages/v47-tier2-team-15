import useFetch from '../useFetch';
import { formatNumber, getColor } from '../Helpers';
import { UserContext } from '../userContext';
import { useContext } from 'react';

function InfoCards() {
  const { data } = useFetch('http://localhost:3003/api/global');
  const { successMessage, username } = useContext(UserContext);

  if (!data || !data[0]) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center bg-[#1A183E] text-white p-2 md:p-4">
        <div className="text-center py-6">
          <p className="text-2xl py-4 font-bold">All Cryptocurrencies</p>
          <p className="pb-4">View a full list of active cryptocurrencies</p>
        </div>
        <div className="hidden md:flex flex-row justify-center gap-8">
          <div className="bg-[#1D2A41] rounded py-4 px-10">
            <p className="pb-4">Market Cap</p>
            <div className="flex flex-row gap-4">
              <span>{formatNumber(data, 'total_mcap', 2)}$</span>
              <span
                className={`rounded bg-[#1F3A43] px-1 ${getColor(data[0].mcap_change)}`}
              >
                {data[0].mcap_change}%
              </span>
            </div>
          </div>
          <div className="bg-[#1D2A41] rounded py-4 px-10">
            <p className="pb-4">Volume 24h</p>
            <div className="flex flex-row gap-4">
              <span>{formatNumber(data, 'total_volume', 2)}$</span>
              <span
                className={`bg-[#1F3A43] rounded px-1 ${getColor(data[0].volume_change)}`}
              >
                {data[0].volume_change}%
              </span>
            </div>
          </div>
          <div className="bg-[#311B3D] rounded py-4 px-10">
            <p className="pb-4">BTC Dominance</p>
            <div className="flex flex-row gap-4">
              <span>{data[0].btc_d}%</span>
              <span className="bg-[#461E3C] rounded px-1">0.31%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
