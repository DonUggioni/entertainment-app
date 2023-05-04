import React from 'react';

import styles from './AuthInput.module.scss';

export default function AuthInput() {
  return (
    <div className={`${styles.inputWrapper}`}>
      <input
        type='text'
        placeholder='Email address'
        className={`${styles.input}`}
      />
    </div>
  );
}
