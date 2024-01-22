import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/display_data/Header.jsx';
import InfoCards from '../components/display_data/InfoCards.jsx';
import Search from '../components/display_data/Search.jsx';

function DisplayData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/currencies', {
          timeout: 15000,
          withCredentials: true,
        });

        const responseData = response.data.data;

        console.log('Fetched data:', responseData);
        setData(responseData);
        setFilteredData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (searchInput) => {
    if (searchInput) {
      const filteredResults = data.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filteredResults);
      console.log("search results:", filteredResults)
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <Header />
      {error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <>
          <InfoCards data={filteredData} />
          <Search onSearch={handleSearch} /> 
        </>
      )}
    </>
  );
}

export default DisplayData;
