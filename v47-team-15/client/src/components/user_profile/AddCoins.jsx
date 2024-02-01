import FavoriteTable from './FavoriteTable'

function AddCoins() {
  return (
    <>
        <div className='bg-[#1A183E] flex flex-row justify-around py-6'>
            <div className='flex flex-col justify-center items-center text-white gap-4'>
                <h1 className='text-2xl'>Add favorite coins</h1>
                <small>Track your favorite cryptocurrencies easily.</small>
                <input></input>
                <button className='border border-white rounded-md p-2'>Add coin</button>
            </div>
            <FavoriteTable />
        </div>
    </>
  )
}

export default AddCoins;