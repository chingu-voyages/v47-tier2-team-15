export const formatNumber = (data, name, decimal) => {
  const value = data[0]?.[name];

  if (value !== undefined && value !== null) {
    return value.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return 'N/A';
  }
};

export const formatTableNumbers = (data) => {
  const value = parseFloat(data);
  if (!isNaN(value)) {
    return (value + 2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return 'N/A';
  }
};

export function getColor(number) {
  return number >= 0 ? 'text-[#34B349]' : 'text-[#F02934]';
}
