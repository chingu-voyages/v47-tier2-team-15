import { useState } from 'react';
import Header from '../components/display_data/Header.jsx';
import InfoCards from '../components/display_data/InfoCards.jsx';
import Search from '../components/display_data/Search.jsx';
import Table from '../components/display_data/Table.jsx';
import useFetch from '../components/useFetch.jsx';
import Footer from '../components/display_data/Footer.jsx';
import Pagination from '../components/display_data/Pagination.jsx';
import Spinner from '../components/display_data/Spinner.jsx';
import Registration from '../components/user_auth/Registration.jsx';

function DisplayData() {
  const { data, error, isLoading } = useFetch(
    'https://crypto-view-test.onrender.com/api/currencies',
  );
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = (searchInput) => {
    if (data) {
      if (searchInput) {
        const filteredResults = data.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setFilteredData(filteredResults);
      } else {
        setFilteredData(data);
      }
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="bg-[#1A183E] min-h-screen">
        <Header />
        {error ? (
          <div className="text-center">
            Error fetching data: {error.message}
          </div>
        ) : (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <InfoCards />
                <Registration />
                <Search
                  onSearch={handleSearch}
                  setFilteredData={setFilteredData}
                  data={data}
                />
                <Table
                  data={data || []}
                  filter={filteredData || []}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                />
                <Pagination
                  totalItems={
                    filteredData.length > 0 ? filteredData.length : data.length
                  }
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
                <Footer />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default DisplayData;
