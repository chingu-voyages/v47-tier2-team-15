import PropTypes from 'prop-types';
import defaultImage from '../../assets/img/news.png';

function NewsGrid({ newsData, itemsPerPage, currentPage }) {

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = newsData.slice(startIndex, endIndex);

  const formatPublishedDate = (publishedDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <div className="bg-[#1A183E] p-12">
      <p className="text-center text-white text-2xl">Latest Cryptocurrency News</p>
      <div className="flex flex-wrap justify-center px-32 mt-10">
        {pageData.map((news, index) => (
          <div key={index} className="p-4 max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
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
                  src={defaultImage}
                  alt="default-news-image"
                />
              )}
              
              <div className="p-4">
              <small className='text-gray-500'>{formatPublishedDate(news.publishedAt)}</small>
                <h2 className="text-white h-20 dark:text-white text-md font-medium mb-2 py-1">{news.title}</h2>
                <p className="leading-relaxed h-24 text-sm text-white dark:text-gray-300 py-2 mb-4">
                {news.description && news.description.length > 100
                ? `${news.description.substring(0, 130)}...`
                : news.description}
                </p>
                <hr/>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 inline-flex items-center text-sm py-1"
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
      {/* <div className="flex justify-center mt-4">
        <button onClick={handlePrevPage} className="mx-2 text-white" disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className="mx-2 text-white">
            {i + 1}
          </button>
        ))}
        <button onClick={handleNextPage} className="mx-2 text-white" disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
    </div>
  );
}

NewsGrid.propTypes = {
  newsData: PropTypes.array.isRequired,
};

export default NewsGrid;
