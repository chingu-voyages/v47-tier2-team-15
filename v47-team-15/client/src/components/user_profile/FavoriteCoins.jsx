function FavoriteCoins() {
  return (
    <>
      <div className="w-full bg-[#1A183E] pb-8">
        <div className=" bg-[#24224B] text-white py-10">
          <h1 className="text-center text-3xl pb-4">My Favorite Coins</h1>
          <p className="text-center text-sm pb-6">
            View and manage your favorite cryptocurrencies.
          </p>
          <div className="flex flex-row justify-around items-center gap-4 pt-4">
            <div className="flex flex-col items-center">
              <i className="bx bx-star text-yellow-500 text-2xl"></i>
              <p>Bitcoin</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="bx bx-star text-yellow-500 text-2xl"></i>
              <p>Bitcoin</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="bx bx-star text-yellow-500 text-2xl"></i>
              <p>Bitcoin</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="bx bx-star text-yellow-500 text-2xl"></i>
              <p>Bitcoin</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="bx bx-star text-yellow-500 text-2xl"></i>
              <p>Bitcoin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteCoins;
