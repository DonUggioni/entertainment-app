'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TrendingThumbnail from '../components/trending-thumbnail/TrendingThumbnail';
import styles from './TrendingCarousel.module.scss';

const autoplayOptions = {
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export default function TrendingCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <TrendingThumbnail />
        </div>
        <div className={styles.embla__slide}>
          <TrendingThumbnail />
        </div>
        <div className={styles.embla__slide}>
          <TrendingThumbnail />
        </div>
        <div className={styles.embla__slide}>
          <TrendingThumbnail />
        </div>
        <div className={styles.embla__slide}>
          <TrendingThumbnail />
        </div>
      </div>
    </div>
  );
}
