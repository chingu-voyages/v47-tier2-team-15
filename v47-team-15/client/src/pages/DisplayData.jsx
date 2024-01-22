import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/display_data/Header.jsx';
import InfoCards from '../components/display_data/InfoCards.jsx';
import Search from '../components/display_data/Search.jsx';

function DisplayData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/currencies', {
          timeout: 15000,
          withCredentials: true,
        });
        console.log('Fetched data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Header />
      {error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <>
          <InfoCards data={data} />
          <Search />
        </>
      )}
    </>
  );
}

export default DisplayData;
