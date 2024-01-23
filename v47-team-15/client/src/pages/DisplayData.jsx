import { useState } from 'react';
import Header from '../components/display_data/Header.jsx';
import InfoCards from '../components/display_data/InfoCards.jsx';
import Search from '../components/display_data/Search.jsx';
import Table from '../components/display_data/Table.jsx';
import useFetch from '../components/useFetch.jsx';

function DisplayData() {
  const { data, error } = useFetch('http://localhost:3003/api/currencies')
  const [ filteredData, setFilteredData ] = useState([])
 

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
          <InfoCards />
          <Search onSearch={handleSearch} /> 
          <Table data={data} filter={filteredData} />
        </>
      )}
    </>
  );
}

export default DisplayData;
