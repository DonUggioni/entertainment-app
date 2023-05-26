'use client';

import React, { useState } from 'react';
import styles from './Auth.module.scss';
import logoIcon from '../../../public/assets/icons/logo.svg';
import Image from 'next/image';
import HeadingLarge from '../typography/headings/heading-L/HeadingLarge';
import AuthInput from '../inputs/input/AuthInput';
import Button from '../button/Button';
import TextMedium from '../typography/text/text-medium/TextMedium';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const accountText = isLogin
    ? "Don't have an account?"
    : 'Already have an account?';

  function authHandler() {
    if (isLogin) {
      if (!userInfo.email || !userInfo.password) {
        alert('Error');
      }
    }
  }

  return (
    <main className={styles.container}>
      <Image src={logoIcon} alt='Logo' />
      <div className={styles.innerWrapper}>
        <HeadingLarge>{isLogin ? 'Login' : 'Sign Up'}</HeadingLarge>
        <div className={styles.inputsWrapper}>
          <AuthInput placeholder='Email address' type='text' autofocus />
          <AuthInput placeholder='Password' type='password' />
          {!isLogin ? (
            <AuthInput placeholder='Repeat password' type='password' />
          ) : null}
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={authHandler}>
            {isLogin ? 'Login to your account' : 'Create an account'}
          </Button>
          <div className={styles.optionTextWrapper}>
            <TextMedium>{accountText}</TextMedium>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
