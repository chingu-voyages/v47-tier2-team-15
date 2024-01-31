import Chart from "../Chart"
import FavoriteTable from "../user_profile/FaboriteTable"

function FavoriteCoins() {
  return (
    <>
        <div className="w-full bg-[#1A183E] px-32">
            <div className="flex flex-row">
            <div className="w-1/3 flex flex-col bg-[#24224B] p-6">
            <Chart />
            <div className="w-full text-white">
                <p>
                    <span className="">Bitcoin</span>
                    <span className="">123456$</span>
                </p>
                <p>
                    <span className="">Ethereum</span>
                    <span className="">123456$</span>
                </p>
                <p className="w-full px-4">
                    <span className="text-left">Tether</span>
                    <span className="text-right">123456$</span>
                </p>
            </div>
            </div>
            <FavoriteTable />
            </div>
        </div>
    </>
  )
}

export default FavoriteCoins