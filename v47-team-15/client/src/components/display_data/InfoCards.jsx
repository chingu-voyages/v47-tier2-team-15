import useFetch from '../useFetch';

function InfoCards() {
  const { data } = useFetch('http://localhost:3003/api/global');

  if (!data || !data[0]) {
    return <div>No data available</div>;
  }

  const formatNumber = (data, name, decimal) => {
    const value = data[0]?.[name];

    if (value !== undefined && value !== null) {
      return value.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return 'N/A';
    }
  };
  // Error fetching global data: Socket connection timeout
  function getColor(number) {
    return number >= 0 ? 'text-[#34B349]' : 'text-[#F02934]';
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-[#1A183E] text-white p-4">
        <div className="text-center py-6">
          <p className="text-2xl py-4">All Cryptocurrencies</p>
          <p className="pb-4">View a full list of active cryptocurrencies</p>
        </div>
        <div className="hidden md:flex flex-row items-center justify-center gap-4">
          <div className="min-w-[15rem] bg-[#1D2A41] rounded p-4">
            <p className="pb-4">Market Cap</p>
            <div className="flex flex-row gap-4">
              <span>{formatNumber(data, 'total_mcap', 2)}</span>
              <span
                className={`rounded bg-[#1F3A43] px-1 ${getColor(data[0].mcap_change)}`}
              >
                {data[0].mcap_change}%
              </span>
            </div>
          </div>
          <div className="min-w-[15rem] bg-[#1D2A41] rounded p-4">
            <p className="pb-4">Volume 24h</p>
            <div className="flex flex-row gap-4">
              <span>{formatNumber(data, 'total_volume', 2)}</span>
              <span
                className={`bg-[#1F3A43] rounded px-1 ${getColor(data[0].volume_change)}`}
              >
                {data[0].volume_change}%
              </span>
            </div>
          </div>
          <div className="min-w-[15rem] bg-[#311B3D] rounded p-4">
            <p className="pb-4">BTC Dominance</p>
            <div className="flex flex-row gap-4">
              <span>{data[0].btc_d}%</span>
              <span className="bg-[#461E3C] rounded px-1">0.31%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCards;
