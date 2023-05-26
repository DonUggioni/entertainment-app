'use client';

import styles from './AuthInput.module.scss';

interface InputProps {
  placeholder: string;
  autofocus?: boolean;
  type: string;
  name: string;
  error: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AuthInput({
  placeholder,
  autofocus,
  type,
  name,
  error,
  onChange,
}: InputProps) {
  return (
    <div
      className={`${styles.inputWrapper} ${
        !error ? null : styles.wrapperError
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input}`}
        autoFocus={autofocus}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
