'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TrendingThumbnail from '../components/trending-thumbnail/TrendingThumbnail';
import styles from './TrendingCarousel.module.scss';
import { InfoProps } from '@/utils/getData';

const autoplayOptions = {
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export default function TrendingCarousel({ items }: { items: InfoProps[] }) {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const trending = items.filter((item) => item.isTrending === true);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {trending.map((item, index) => (
          <div className={styles.embla__slide} key={index}>
            <TrendingThumbnail item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
