'use client';

import styles from './AuthInput.module.scss';

interface InputProps {
  placeholder: string;
  autofocus?: boolean;
  type: string;
}

export default function AuthInput({
  placeholder,
  autofocus,
  type,
}: InputProps) {
  return (
    <div className={`${styles.inputWrapper}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input}`}
        autoFocus={autofocus}
      />
    </div>
  );
}
