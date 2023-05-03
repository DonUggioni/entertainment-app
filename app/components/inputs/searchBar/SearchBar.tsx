import React from 'react';
import styles from './SearchBar.module.scss';
import Image from 'next/image';
import image from '../../../../public/assets/icons/icon-search.svg';

export default function SearchBar() {
  return (
    <div>
      <Image style={{ fill: '#666666' }} priority src={image} alt={'Search'} />
    </div>
  );
}
