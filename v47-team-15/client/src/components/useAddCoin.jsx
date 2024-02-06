import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function useAddCoin() {
    const [selectedCoinId, setSelectedCoinId] = useState('');
    const [favorites, setFavorites] = useState([]);

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3003/api/favorites/add', { coinId: selectedCoinId }, {
              withCredentials: true,
              responseType: 'json',
            });
            console.log('Response from server:', response);
            setFavorites(response.data.favoriteCoinIds);
            console.log("Coin added");
            alert('Coin added successfully!');
          // } else {
          //   console.error('No coin selected');
          //   alert('Please select a coin before adding.');
          // }
          } catch (error) {
          console.error('Error adding favorite coin:', error);
          alert('Failed to add coin. Please try again.');
        }
      };
  return { selectedCoinId, setSelectedCoinId, handleClick }
}

export default useAddCoin