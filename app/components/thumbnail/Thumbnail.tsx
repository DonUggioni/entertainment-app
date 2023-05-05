import styles from './Thumbnail.module.scss';
import Image from 'next/image';
import imageLarge from '../../../public/assets/thumbnails/112/regular/large.jpg';
import tvIcon from '../../../public/assets/icons/icon-category-tv.svg';
import HeadingExtraSmall from '../typography/headings/heading-XS/HeadingExtraSmall';
import TextSmall from '../typography/text/text-small/TextSmall';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import BookmarkFull from '../icons/BookmarkFull';
import PlayIcon from '../icons/PlayIcon';

export default function Thumbnail() {
  return (
    <div className={styles.container}>
      <button className={styles.bookmarkIconContainer}>
        <BookmarkEmpty />
      </button>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src='/assets/thumbnails/112/regular/large.jpg'
          alt='Thumbnail displaying image of movie'
          width={280}
          height={175}
        />
        <div className={styles.imageContainerOverlay}>
          <div>
            <PlayIcon />
            <HeadingExtraSmall>Play</HeadingExtraSmall>
          </div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <TextSmall>2019 </TextSmall>
        <span>&#8226;</span>
        <div className={styles.categoryContainer}>
          <Image
            className={styles.icon}
            src={tvIcon}
            alt='Icon displaying category'
          />
          <TextSmall>Movie</TextSmall>
          <span>&#8226;</span>
        </div>
        <TextSmall>PG</TextSmall>
      </div>
      <HeadingExtraSmall>The Great Lands</HeadingExtraSmall>
    </div>
  );
}
