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
          const response = await axios.get('/api/news', {
            withCredentials: true,
            responseType: 'json',
          });
          setIsLoading(false)
          setNewsData(response.data.articles);
          console.log(response.data.articles);
        } catch (error) {
          console.error('Error fetching news data:', error.message);
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchNews();
    }, []); 

    return { newsData, isLoading, error }
}


export default useNews