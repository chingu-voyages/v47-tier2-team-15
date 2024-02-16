import { useState, useEffect } from 'react';
import axios from 'axios';

function useNews() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://crypto-view-test.onrender.com/api/news',
          {
            withCredentials: true,
            responseType: 'json',
          },
        );
        setIsLoading(false);
        setNewsData(response.data.articles);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { newsData, isLoading, error };
}

export default useNews;
