import PropTypes from 'prop-types';
import { getColor, formatTableNumbers } from '../Helpers';

function Table({ data, filter, currentPage, itemsPerPage }) {
  const displayData = filter.length > 0 ? filter : data;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = displayData.slice(startIndex, endIndex);

  return (
    <>
      <div className="bg-[#1A183E] py-4 md:py-8">
        <table className="min-w-3/5 mx-auto divide-y divide-gray-200 rounded-md">
          <thead className="sticky top-0 bg-gray-50 z-10">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Favorite
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Symbol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                1h
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                7d
              </th>
              <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Supply
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#24224B] text-white text-xs divide-y divide-gray-200">
            {pageData.map((coin, index) => (
              <tr key={index}>
                <td className="text-center py-4 whitespace-nowrap">{coin.rank}</td>
                <td className="hidden sm:table-cell py-4 whitespace-nowrap text-center">
                <i className='bx bx-star'></i>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{coin.name}</td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  {coin.symbol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatTableNumbers(coin.price_usd)}$
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_1h)}`}
                >
                  {formatTableNumbers(coin.percent_change_1h)}%
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_7d)}`}
                >
                  {formatTableNumbers(coin.percent_change_7d)}%
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_24h)}`}
                >
                  {formatTableNumbers(coin.percent_change_24h)}%
                </td>
                <td className="hidden lg:table-cell px-6 py-4 text-right whitespace-nowrap">
                  {formatTableNumbers(coin.csupply)}$
                </td>
                <td className="hidden lg:table-cell px-6 py-4 text-right whitespace-nowrap">
                  {formatTableNumbers(coin.tsupply)}$
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  {formatTableNumbers(coin.market_cap_usd)}$
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
