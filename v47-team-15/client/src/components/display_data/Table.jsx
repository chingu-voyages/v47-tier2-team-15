import PropTypes from 'prop-types';

function Table({ data }) {
    console.log(data)
  return (
    <>
        <div>
            <ul>
            {data.map((coin, index) => (
                <li key={index}>{coin.market_cap_usd}</li>
            ))}
            </ul>
        </div>
    </>
  )
}

Table.propTypes = {
    data: PropTypes.array.isRequired, 
  };

export default Table