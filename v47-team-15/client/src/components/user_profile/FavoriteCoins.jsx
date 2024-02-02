import useUserProfile from '../useUserProfile';

function FavoriteCoins() {
  const { favoriteCoins } = useUserProfile();
  console.log('fav coins', favoriteCoins);

  const sortedCoins = favoriteCoins.slice().sort((a, b) => b.price - a.price);

  const top5Coins = sortedCoins.slice(0, 5);

  return (
    <>
      <div className="w-full bg-[#1A183E] pb-8">
        <div className="bg-[#24224B] text-white py-10">
          <h1 className="text-center text-3xl pb-4">My Favorite Coins</h1>
          <p className="text-center text-sm pb-6">
            View and manage your favorite cryptocurrencies.
          </p>
          <div className="flex flex-row justify-around items-center gap-4 pt-4">
            {top5Coins.map((coin) => (
              <div className="flex flex-col items-center" key={coin.id}>
                <i className="bx bx-star text-yellow-500 text-2xl"></i>
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
                <p>{coin.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteCoins;
