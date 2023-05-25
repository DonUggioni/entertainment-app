'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TrendingThumbnail from '../components/trending-thumbnail/TrendingThumbnail';
import styles from './TrendingCarousel.module.scss';
import { InfoProps } from '@/utils/getData';
import { useAppContext } from '../store/AppContext';

const autoplayOptions = {
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export default function TrendingCarousel() {
  const { setMoviesData, moviesData } = useAppContext();
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const trending = moviesData.filter((item) => item.isTrending === true);

  function bookmarkHandler(item: InfoProps) {
    setMoviesData((prevMoviesData) => {
      const updatedMoviesData = prevMoviesData.map((movie) => {
        if (movie === item) {
          return {
            ...movie,
            isBookmarked: !item.isBookmarked,
          };
        }
        return movie;
      });

      return updatedMoviesData;
    });
  }

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {trending.map((item) => (
          <div className={styles.embla__slide} key={item.title}>
            <TrendingThumbnail
              onClick={() => bookmarkHandler(item)}
              item={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
