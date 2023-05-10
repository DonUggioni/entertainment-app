'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TrendingThumbnail from '../components/trending-thumbnail/TrendingThumbnail';
import styles from './TrendingCarousel.module.scss';
import { InfoProps, getData } from '@/utils/getData';

const autoplayOptions = {
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export default async function TrendingCarousel() {
  const data = getData();
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  console.log(data);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          {/* {data.map((item)=> <TrendingThumbnail movie={item} />)} */}
        </div>
      </div>
    </div>
  );
}
