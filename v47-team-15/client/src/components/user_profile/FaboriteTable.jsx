function FaboriteTable() {
  return (
    <>
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
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#24224B] text-white text-xs divide-y divide-gray-200">
              <tr>
                <td className="hidden sm:table-cell text-center py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Bitcoin</td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  BTC
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  1234567890$
                </td>
                <td
                  className="hidden md:table-cell px-6 py-4 whitespace-nowrap"
                >
                  23%
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  23$
                </td>
              </tr>
          </tbody>
        </table>
    </>
  )
}

export default FaboriteTable