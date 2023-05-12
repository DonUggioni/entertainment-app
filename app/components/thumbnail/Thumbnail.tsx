import styles from './Thumbnail.module.scss';
import Image from 'next/image';
import tvIcon from '../../../public/assets/icons/icon-category-tv.svg';
import movieIcon from '../../../public/assets/icons/icon-category-movie.svg';
import HeadingExtraSmall from '../typography/headings/heading-XS/HeadingExtraSmall';
import TextSmall from '../typography/text/text-small/TextSmall';
import PlayIcon from '../icons/PlayIcon';
import { InfoProps } from '@/utils/getData';
import BookmarkButton from '../bookmark-button/BookmarkButton';
import { getWindowWidth } from '@/utils/getWindowWidth';

export default function Thumbnail({ items }: { items: InfoProps }) {
  const screenWidth = getWindowWidth();

  function renderImage() {
    if (screenWidth >= 1024) {
      return items.thumbnail.regular?.large!;
    }

    if (screenWidth < 1024 && screenWidth >= 768) {
      return items.thumbnail.regular?.medium!;
    }

    return items.thumbnail.regular?.small!;
  }

  return (
    <div className={styles.container}>
      <BookmarkButton items={items} />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={renderImage()}
          alt='Thumbnail displaying image of movie'
          width={280}
          height={174}
        />
        <div className={styles.imageContainerOverlay}>
          <div>
            <PlayIcon />
            <HeadingExtraSmall>Play</HeadingExtraSmall>
          </div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <TextSmall>{items.year}</TextSmall>
        <span>&#8226;</span>
        <div className={styles.categoryContainer}>
          <Image
            className={styles.icon}
            src={items.category === 'Movie' ? movieIcon : tvIcon}
            alt='Icon displaying category'
          />
          <TextSmall>{items.category}</TextSmall>
          <span>&#8226;</span>
        </div>
        <TextSmall>{items.rating}</TextSmall>
      </div>
      <HeadingExtraSmall>{items.title}</HeadingExtraSmall>
    </div>
  );
}
