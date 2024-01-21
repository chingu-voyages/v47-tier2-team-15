function InfoCards() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-[#1A183E] text-white p-4">
        <div className="text-center py-6">
          <p className="text-2xl py-4">All Cryptocurrencies</p>
          <p className="pb-4">View a full list of active cryptocurrencies</p>
        </div>
        <div className="hidden md:flex flex-row items-center justify-center gap-2">
          <div className="min-w-[15rem] bg-[#1D2A41] rounded p-4">
            <p className="pb-4">Market Cap</p>
            <div className="flex flex-row gap-4">
              <span>$1,757,512,361,161</span>
              <span className="bg-[#1F3A43] rounded text-[#34B349] px-1">
                1.00%
              </span>
            </div>
          </div>
          <div className="min-w-[15rem] bg-[#1D2A41] rounded p-4">
            <p className="pb-4">Volume 24h</p>
            <div className="flex flex-row gap-4">
              <span>$80,107,052,528</span>
              <span className="bg-[#1F3A43] rounded text-[#34B349] px-1">
                37.1%
              </span>
            </div>
          </div>
          <div className="min-w-[15rem] bg-[#311B3D] rounded p-4">
            <p className="pb-4">BTC Dominance</p>
            <div className="flex flex-row gap-4">
              <span>47.8%</span>
              <span className="bg-[#461E3C] rounded text-[#F02934] px-1">
                0.31%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCards;
