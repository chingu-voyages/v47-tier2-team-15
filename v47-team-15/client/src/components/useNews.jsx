import { useState, useEffect } from 'react';
import axios from 'axios';

function useNews() {
    const [newsData, setNewsData] = useState([]);
  
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

    return { newsData }
}


export default useNews