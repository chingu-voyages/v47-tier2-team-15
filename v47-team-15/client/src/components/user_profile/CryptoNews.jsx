function CryptoNews() {
  return (
    <>
        <div className="bg-[#1A183E] py-4 md:py-8">
            <div className="flex flex-row justify-around items-center bg-[#24224B] text-white p-4 mx-32">
                <div>
                CryptoNews
                </div>
                <div>
                    <div className="flex flex-row justify-between bg-white text-gray-600 p-4">
                        <span>New feed</span>
                        <button className="bg-[#1A183E] text-white">View all</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CryptoNews
