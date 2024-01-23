import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          timeout: 15000,
          withCredentials: true,
        });

        const responseData = response.data.data;
        console.log('Global data:', responseData);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
}

export default useFetch;
