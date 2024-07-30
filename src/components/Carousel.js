import React, { useState, useEffect } from 'react';
import './Carousel.css';
import axios from 'axios';

const Slide = ({ carouselData, currentIndex }) => {
    return (
      <div className="slide" >
        {carouselData.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? 'active' : ''}`} 
            key={index}
            style={{
        backgroundImage: `url(${item.other_images.landscape_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
          >
            <div className="content">
              <div className="name">{item.title}</div>
              <div className="des">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]); // State to store API data
  const [isLoading, setIsLoading] = useState(true); // State to indicate loading
  const [error, setError] = useState(null); // State to store any errors
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english'
        );
        localStorage.setItem('apiData', JSON.stringify(response.data));
        setCarouselData(response.data.items[0].banners); 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (carouselData.length > 0) {
      setCurrentIndex(0);
    }
  }, [carouselData]);

  useEffect(() => {
    const interval = setInterval(() => {
        const updatedData = [...carouselData];
        const firstItem = updatedData.shift();
        updatedData.push(firstItem);
        setCarouselData(updatedData);
        setCurrentIndex((currentIndex - 1 + updatedData.length) % updatedData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselData]);

  const handleNextClick = () => {
      setIsLoading(true);
      const updatedData = [...carouselData];
      const firstItem = updatedData.shift();
      updatedData.push(firstItem);
      setCarouselData(updatedData);
      setCurrentIndex((currentIndex - 1 + updatedData.length) % updatedData.length);
      setIsLoading(false);
};

const handlePrevClick = () => {
      setIsLoading(true);
      const updatedData = [...carouselData];
      const lastItem = updatedData.pop();
      updatedData.unshift(lastItem);
      setCarouselData(updatedData);
      setCurrentIndex((currentIndex + 1) % updatedData.length);
      setIsLoading(false);
  };

  return (
    <div id="carousels">
      {isLoading && <p>Loading carousel data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {carouselData.length > 0 && (
        <div className="containerSlide">
          <Slide carouselData={carouselData} currentIndex={currentIndex} />
          <div className="button">
            <button className="prev" onClick={handlePrevClick} disabled={isLoading}>
              prev
            </button>
            <button className="next" onClick={handleNextClick} disabled={isLoading}>
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}