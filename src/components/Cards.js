import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const cardData = JSON.parse(localStorage.getItem('apiData'));
        setCards(cardData.items[3].mixed_content_items);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
<p className='font-bold flex ml-20 text-2xl flex-start'>
    Discover our top 10 audio books
    </p>
    <br/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-20">
        {error && <div>Error fetching data: {error.message}</div>}
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg h-96 w-60">
            
          <img className="w-full h-50" src={card.image} alt={card.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
            {card.title.length > 10
                ? card.title.slice(0, 10) + '...'
                : card.title}</div>
            <p className="text-gray-700 text-base">{card.description.length > 40
                ? card.description.slice(0, 40) + '...'
                : card.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
          </div>
          </div>
        ))
      ) : (
        <div>Loading cards...</div>
      )}
    </div>
    </>
  );
};

export default Cards;