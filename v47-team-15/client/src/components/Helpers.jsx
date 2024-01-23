

    export const formatNumber = (data, name, decimal) => {
        const value = data[0]?.[name];
    
        if (value !== undefined && value !== null) {
          return value.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
          return 'N/A';
        }
      };
     
      export function getColor(number) {
        return number >= 0 ? 'text-[#34B349]' : 'text-[#F02934]';
      }

      export const formatAllNumber = (data, name, decimal) => {
        let value;
    
        if (Array.isArray(data)) {
            value = data[0]?.[name];
        } else if (typeof data === 'object') {
            value = data[name];
        } else {
            value = data; 
        }
    
        if (typeof value === 'number') {
            return Number(value).toLocaleString(undefined, {
                minimumFractionDigits: decimal,
                maximumFractionDigits: decimal,
            });
        } else {
            return 'N/A';
        }
    };
