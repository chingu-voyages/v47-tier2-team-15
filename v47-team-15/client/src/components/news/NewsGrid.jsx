import { useState } from 'react';
import useNews from '../useNews';
import Spinner from '../display_data/Spinner';
import news from '../../assets/img/news.png';

function NewsGrid() {
  const { newsData, isLoading, error } = useNews();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(8);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const formatPublishedDate = (publishedDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(publishedDate).toLocaleDateString(
      'en-US',
      options,
    );
    return formattedDate;
  };

  return (
    <>
      {error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="bg-[#1A183E] p-12">
              <p className="text-center text-white text-2xl">
                Latest Cryptocurrency News
              </p>
              <div className="flex flex-wrap justify-center mt-10">
                {currentNews.map((news, index) => (
                  <div
                    key={index}
                    className="p-4 max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <div className="flex flex-col bg-[#24224B] rounded-lg overflow-hidden">
                      {news.urlToImage ? (
                        <img
                          className="w-full h-32 object-cover"
                          src={news.urlToImage}
                          alt="news-image"
                        />
                      ) : (
                        <img
                          className="w-full h-32 object-cover"
                          src={news}
                          alt="default-news-image"
                        />
                      )}
                      <div className="p-4">
                      <small className="text-gray-500">
                        {formatPublishedDate(news.publishedAt)}
                      </small>
                        <h2 className="h-24 text-white dark:text-white text-base font-medium mb-2">
                          {news.title}
                        </h2>
                        <p className="leading-relaxed text-sm text-white dark:text-gray-300 mb-4">
                          {news.description.slice(0, 150)}...
                        </p>
                        <hr />
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 inline-flex items-center pt-1"
                        >
                          Go to original source
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
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePrevPage}
                  className="mx-2 text-white"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className="mx-2 text-white"
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  className="mx-2 text-white"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default NewsGrid;
