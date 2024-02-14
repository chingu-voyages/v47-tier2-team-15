import PropTypes from 'prop-types';
import { getColor, formatTableNumbers } from '../Helpers';
import { useContext } from 'react';
import { UserContext } from '../userContext';
import useAddCoin from '../useAddCoin';

function Table({ data, filter, currentPage, itemsPerPage }) {
  const { username } = useContext(UserContext);
  const { handleAddCoin, favoriteCoins, successMessage, errorMessage } = useAddCoin();

  const displayData = filter.length > 0 ? filter : data;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = displayData.slice(startIndex, endIndex);

  const isCoinInFavorites = (coinId) => {
    return favoriteCoins.some((coin) => coin.id === coinId);
  };

  return (
    <>
      <div className="relative bg-[#1A183E] py-4 md:py-8">
        <div
          className="absolute top-0 left-0 right-0 transition-opacity duration-300 z-50 py-2"
          style={{ opacity: successMessage ? 1 : 0 }}
        >
          <p className="text-center text-green-500 bg-[#24224B] rounded p-2">
            {successMessage}
          </p>
        </div>
        <div
          className="absolute top-0 left-0 right-0 transition-opacity duration-300 z-50 py-2"
          style={{ opacity: errorMessage ? 1 : 0 }}
        >
          <p className="text-center text-red-500 bg-[#24224B] rounded p-2">
            {errorMessage}
          </p>
        </div>
        <table className="min-w-3/5 mx-auto divide-y divide-gray-200 rounded-md">
          <thead className="sticky top-0 bg-gray-50 z-10">
            <tr>
              {username && (
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Favorite
                </th>
              )}
              <th className="hidden sm:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
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
              <th className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                1h
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                7d
              </th>
              <th className="hidden lg:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="hidden lg:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Supply
              </th>
              <th className="hidden sm:table-cell px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#24224B] text-white text-xs divide-y divide-gray-200">
            {pageData.map((coin, index) => (
              <tr key={index}>
                {username && (
                  <td className="py-4 whitespace-nowrap text-center">
                    <i
                      className={`bx bx-star cursor-pointer ${
                        isCoinInFavorites(coin.id)
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                      onClick={() => handleAddCoin(coin.id)}
                    ></i>
                  </td>
                )}
                <td className="hidden sm:table-cell text-center py-4 whitespace-nowrap">
                  {coin.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{coin.name}</td>
                <td className="hidden sm:table-cell px-6 py-4 text-center whitespace-nowrap">
                  {coin.symbol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${formatTableNumbers(coin.price_usd)}
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 text-center whitespace-nowrap ${getColor(coin.percent_change_1h)}`}
                >
                  {formatTableNumbers(coin.percent_change_1h)}%
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 text-center whitespace-nowrap ${getColor(coin.percent_change_7d)}`}
                >
                  {formatTableNumbers(coin.percent_change_7d)}%
                </td>
                <td
                  className={`hidden md:table-cell px-6 py-4 text-center whitespace-nowrap ${getColor(coin.percent_change_24h)}`}
                >
                  {formatTableNumbers(coin.percent_change_24h)}%
                </td>
                <td className="hidden lg:table-cell px-6 py-4 text-right whitespace-nowrap">
                  {formatTableNumbers(coin.csupply)}
                </td>
                <td className="hidden lg:table-cell px-6 py-4 text-right whitespace-nowrap">
                  {formatTableNumbers(coin.tsupply)}
                </td>
                <td className="hidden sm:table-cell px-6 py-4 text-right whitespace-nowrap">
                  ${formatTableNumbers(coin.market_cap_usd)}
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
