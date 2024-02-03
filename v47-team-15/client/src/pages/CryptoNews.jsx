import Header from "../components/display_data/Header";
import NewsGrid from "../components/news/NewsGrid";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/display_data/Pagination";
import Footer from "../components/display_data/Footer";

function CryptoNews() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/news', {
          withCredentials: true,
          responseType: 'json',
        });
        setNewsData(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };

    fetchNews();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
        <Header />
        <NewsGrid 
                newsData={newsData}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage} />
        <Pagination 
                totalItems={newsData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange} />
        <Footer />
    </>
  )
}

export default CryptoNews