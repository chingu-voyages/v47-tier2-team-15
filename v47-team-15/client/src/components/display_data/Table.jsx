import PropTypes from 'prop-types';
import { getColor } from '../Helpers';

function Table({ data, filter, currentPage, itemsPerPage  }) {
  const displayData = filter.length > 0 ? filter : data;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = displayData.slice(startIndex, endIndex);

  return (
    <>
      <div className='bg-[#1A183E] py-8'>
      <table className="min-w-3/5 mx-auto divide-y divide-gray-200 rounded-md">
        {/* <div className='overflow-y-auto max-h-[35rem]'> */}
        <thead className="sticky top-0 bg-gray-50 z-10">
          <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap (USD)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              1h
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              7d
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Circulating Supply
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Supply
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            
          </tr>
        </thead>
        <tbody className="bg-[#24224B] text-white text-xs divide-y divide-gray-200">
          {pageData.map((coin, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{coin.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.market_cap_usd}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.price_usd}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_1h)}`}>{coin.percent_change_1h}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_7d)}`}>{coin.percent_change_7d}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_24h)}`}>{coin.percent_change_24h}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.csupply}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.tsupply}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.market_cap_usd}</td>
            </tr>
          ))}
        </tbody>
        {/* </div> */}
      </table>
    </div>
      {/* <div className="bg-[#1A183E] py-8">
        <table className="text-left w-4/5 divide-y divide-gray-200 mx-auto">
          <thead className="bg-gray-50 flex text-gray-700 w-full">
            <tr className="flex w-full">
              <th className="p-1 w-1/4">Rank</th>
              <th className="p-1 w-1/4">Name</th>
              <th className="p-1 w-1/4">Symbol</th>
              <th className="p-1 w-1/4">Market Cap (USD)</th>
              <th className="p-1 w-1/4">Price</th>
              <th className="p-1 w-1/4">1h</th>
              <th className="p-1 w-1/4">24h</th>
              <th className="p-1 w-1/4">7d</th>
              <th className="p-1 w-1/4">Circulating Supply</th>
              <th className="p-1 w-1/4">Total Supply</th>
              <th className="p-1 w-1/4">Market Cap</th>
            </tr>
          </thead>
          <tbody className="bg-[#24224B] divide-y divide-gray-200 text-white flex flex-col items-center justify-between overflow-y-scroll w-full h-[50vh]">
            {displayData.map((coin, index) => (
              <tr key={index} className="flex w-full text-xs mb-4">
                <td className="p-4 w-1/4">{coin.rank}</td>
                <td className="p-4 w-1/4">{coin.name}</td>
                <td className="p-4 w-1/4">{coin.symbol}</td>
                <td className="p-4 w-1/4">{coin.market_cap_usd}</td>
                <td className="p-4 w-1/4">{coin.price_usd}</td>
                <td className={`p-4 w-1/4 ${getColor(coin.percent_change_1h)}`}>
                  {coin.percent_change_1h}
                </td>
                <td
                  className={`p-4 w-1/4 ${getColor(coin.percent_change_24h)}`}
                >
                  {coin.percent_change_24h}
                </td>
                <td className={`p-4 w-1/4 ${getColor(coin.percent_change_7d)}`}>
                  {coin.percent_change_7d}
                </td>
                <td className="p-4 w-1/4">{coin.csupply}</td>
                <td className="p-4 w-1/4">{coin.tsupply}</td>
                <td className="p-4 w-1/4">{coin.market_cap_usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Table;
