import useFetch from '../useFetch';
import useAddCoin from '../useAddCoin';
import axios from 'axios';
import { formatTableNumbers } from '../Helpers';
import { getColor } from '../Helpers';

function AddCoins() {
  const {
    selectedCoinId,
    setSelectedCoinId,
    handleAddCoin,
    favoriteCoins,
    setFavoriteCoins,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useAddCoin();
  const { data } = useFetch(' https://crypto-view-test.onrender.com/api/currencies');

  const handleDropdownChange = (e) => {
    const coinId = e.target.value;
    setSelectedCoinId(coinId);
    handleAddCoin(coinId);
  };

  const handleDelete = async (coinId) => {
    try {
      await axios.post(
        ' https://crypto-view-test.onrender.com/api/favorites/remove',
        { coinId },
        {
          withCredentials: true,
          responseType: 'json',
        },
      );

      const updatedCoins = favoriteCoins.filter((coin) => coin.id !== coinId);
      setFavoriteCoins([...updatedCoins]);
      setSuccessMessage('Coin deleted successfully!');
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage(`Coin with ID ${coinId} not found.`);
      } else {
        setErrorMessage('Error deleting coin!');
      }
    }
  };

  return (
    <>
      <div className="relative bg-[#1A183E] pt-10">
        <div
          className="absolute top-0 left-0 right-0 transition-opacity duration-300 z-50"
          style={{ opacity: successMessage ? 1 : 0 }}
        >
          <p className="text-center text-green-500 bg-[#24224B] rounded p-2">
            {successMessage}
          </p>
        </div>
        <div
          className="absolute top-0 left-0 right-0 transition-opacity duration-300 z-50"
          style={{ opacity: errorMessage ? 1 : 0 }}
        >
          <p className="text-center text-red-500 bg-[#24224B] rounded p-2">
            {errorMessage}
          </p>
        </div>
        <div className="flex flex-wrap flex-row justify-around  gap-4 lg:gap-0 lg:pt-6">
          <div className="flex flex-col justify-center items-center text-white gap-4 bg-[#24224B] h-40 p-6">
            <h1 className="text-2xl">Add favorite coins</h1>
            <small>Track your favorite cryptocurrencies easily.</small>
            <select
              className="text-gray-500 rounded p-2"
              id="coinDropdown"
              onChange={handleDropdownChange}
              value={selectedCoinId}
            >
              <option className="text-gray-500" value="">
                Select a coin
              </option>
              {data.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="bg-[#1A183E] pb-16">
              {favoriteCoins.length === 0 ? (
                <div className="flex flex-col justify-between gap-6">
                  <p className="text-white text-center text-xl">
                    Track your favorite cryptocurrencies easily
                  </p>
                  <div className="text-center">
                    <i
                      className="bx bxl-bitcoin text-yellow-600 text-[3rem] animate-bounce"
                      style={{ animationDelay: '0s' }}
                    ></i>
                    <i
                      className="bx bxl-bitcoin text-yellow-600 text-[1.5rem] animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></i>
                    <i
                      className="bx bxl-bitcoin text-yellow-600 text-[4rem] animate-bounce"
                      style={{ animationDelay: '0.7s' }}
                    ></i>
                  </div>
                </div>
              ) : (
                <table className="min-w-3/5 mx-auto divide-y divide-gray-200 rounded-md">
                  <thead className="sticky top-0 bg-gray-50 z-10">
                    <tr>
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
                      <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        24h
                      </th>
                      <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Market Cup
                      </th>
                      <th className="table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#24224B] text-white text-xs divide-y divide-gray-200">
                    {favoriteCoins &&
                      favoriteCoins.map((coin, index) => (
                        <tr key={index}>
                          <td className="hidden sm:table-cell text-center py-4 whitespace-nowrap">
                            {coin.rank}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {coin.name}
                          </td>
                          <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                            {coin.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {formatTableNumbers(coin.price_usd)}$
                          </td>
                          <td
                            className={`hidden md:table-cell px-6 py-4 whitespace-nowrap ${getColor(coin.percent_change_24h)}`}
                          >
                            {formatTableNumbers(coin.percent_change_24h)}%
                          </td>
                          <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                            {formatTableNumbers(coin.market_cap_usd)}$
                          </td>
                          <td className="table-cell px-6 py-4 whitespace-nowrap">
                            <button
                              className="bg-[#461E3C] rounded px-1"
                              onClick={() => handleDelete(coin.id)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCoins;
