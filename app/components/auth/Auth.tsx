'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.scss';
import logoIcon from '../../../public/assets/icons/logo.svg';
import Image from 'next/image';
import HeadingLarge from '../typography/headings/heading-L/HeadingLarge';
import AuthInput from '../inputs/input/AuthInput';
import Button from '../button/Button';
import TextMedium from '../typography/text/text-medium/TextMedium';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState({ email: '', isValid: true });
  const [password, setPassword] = useState({ password: '', isValid: true });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: '',
    isValid: true,
  });
  const accountText = isLogin
    ? "Don't have an account?"
    : 'Already have an account?';

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'email') {
      setEmail({ ...email, email: e.target.value, isValid: true });
    }

    if (e.target.name === 'password') {
      setPassword({ ...password, password: e.target.value, isValid: true });
    }

    if (e.target.name === 'confirmPassword') {
      setConfirmPassword({
        ...confirmPassword,
        confirmPassword: e.target.value,
        isValid: true,
      });
    }
  }

  function checkError() {
    let error = false;
    if (!email.email.length) {
      setEmail({ ...email, isValid: false });
      error = true;
    }

    if (!password.password.length) {
      setPassword({ ...password, isValid: false });
      error = true;
    }

    if (!isLogin && !confirmPassword.confirmPassword.length) {
      setConfirmPassword({ ...confirmPassword, isValid: false });
      error = true;
    }

    return error;
  }

  function authHandler() {
    const error = checkError();

    if (error) return;

    router.push('/home');
  }

  return (
    <main className={styles.container}>
      <Image src={logoIcon} alt='Logo' />
      <div className={styles.innerWrapper}>
        <HeadingLarge>{isLogin ? 'Login' : 'Sign Up'}</HeadingLarge>
        <div className={styles.inputsWrapper}>
          <AuthInput
            placeholder='Email address'
            type='text'
            autofocus
            name='email'
            onChange={(e) => changeHandler(e)}
            error={!email.isValid}
          />
          <AuthInput
            placeholder='Password'
            type='password'
            name='password'
            onChange={(e) => changeHandler(e)}
            error={!password.isValid}
          />
          {!isLogin ? (
            <AuthInput
              placeholder='Repeat password'
              type='password'
              name='confirmPassword'
              onChange={(e) => changeHandler(e)}
              error={!confirmPassword.isValid}
            />
          ) : null}
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={() => authHandler()}>
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
