// components/Carousel.tsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Carousel.module.scss';

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false, // Hide arrows at this breakpoint
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows at this breakpoint
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrevClick}>
        Prev
      </button>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
