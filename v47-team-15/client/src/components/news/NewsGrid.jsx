import news from '../../assets/img/news.png';
// import useFetch from '../useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function NewsGrid() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const backendResponse = await axios.get('http://localhost:3003/api/news', {
          withCredentials: true,
          responseType: 'json',
        });
        // const { query, fromDate, apiKey } = backendResponse.data;
        // const response = await axios.get(
        //   `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=publishedAt&apiKey=${apiKey}&searchin=title,content`
        // );

        // setNewsData(response.data.articles);
        console.log(backendResponse);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };
    
    fetchNews();
  }, []);

  return (
    <>
      <div className="bg-[#1A183E] p-12">
        <p className="text-center text-white text-2xl">
          Latest Cryptocurrency News
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-[#24224B] flex-col">
              <div className="flex flex-col items-center mb-3">
                <img src={news} alt="bitcoin-image"></img>
                <h2 className="text-white dark:text-white text-lg font-medium p-4">
                  Here’s a Timeline of Events Leading to Spot Bitcoin ETF
                  Approval in The US
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300 p-4">
                  The journey began ten years ago, and there are industry
                  participants who laid the foundation for the SEC's decision.
                  (Read More...)
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center p-4"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsGrid;
