import useNews from '../useNews';
import { Link } from 'react-router-dom';

function CryptoNews() {
  const { newsData } = useNews();
  return (
    <>
      <div className="bg-[#1A183E] pb-8 md:py-10">
        <div className="flex flex-wrap flex-row justify-around items-center bg-[#24224B] rounded text-white p-4 mx-16 md:mx-32">
          <div className='hidden md:block text-2xl'>
            <p>Crypto</p>
            <p>News</p>
          </div>
          
            <p className='md:hidden text-xl p-2'>Crypto News</p>
          
          <div className="flex flex-col w-full md:w-1/3 gap-2">
            <div className="flex flex-row justify-between bg-white text-gray-600 p-2 md:p-4">
              <span>New feed</span>
              <Link to="/news" className="bg-[#1A183E] rounded text-white text-xs p-2">
                View all
              </Link>
            </div>
            {newsData &&
              newsData.slice(0, 5).map((news, index) => (
                <div key={index} className="flex flex-row p-2">
                  <img
                    className="w-8 h-8"
                    src={news.urlToImage}
                    alt="news-image"
                  />
                  <p className="text-xs px-2">{news.title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoNews;
