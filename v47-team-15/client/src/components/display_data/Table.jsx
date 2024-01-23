import PropTypes from 'prop-types';

function Table({ data }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
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
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((coin, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{coin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.market_cap_usd}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.price_usd}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.percent_change_1h}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.percent_change_7d}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.percent_change_24h}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.csupply}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.tsupply}</td>
              <td className="px-6 py-4 whitespace-nowrap">{coin.market_cap_usd}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
