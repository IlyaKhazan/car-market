import { useCallback, useState, useEffect } from 'react';
import cn from 'classnames';

import { Values } from '@types';

import styles from './styles.css';

const Variant = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const;

const Color = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  SECONDARY: 'secondary',
  BLUE: 'blue',
} as const;

const Size = {
  XXS: 'xxs',
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
} as const;

const capitalize = (classsName) => {
  return classsName[0].toUpperCase() + classsName.slice(1);
};

type Props = {
  color?: Values<typeof Color>;
  variant?: Values<typeof Variant>;
  text?: string;
  width?: string;
  size?: Values<typeof Size>;
  pressed?: boolean;
  disabled?: boolean;
  startIcon?: object;
  endIcon?: object;
  ariaLabel?: string;
  onClick?: any;
};

export function Button({
  color = Color.PRIMARY,
  variant = Variant.TEXT,
  text,
  width = 'auto',
  pressed = false,
  disabled = false,
  size = Size.M,
  startIcon,
  endIcon,
  ariaLabel,
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(pressed);
  const [isDisabled, setDisabled] = useState(disabled);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);

    document.addEventListener('mouseup', handleMouseUp, { once: true });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    setIsPressed(pressed);
  }, [pressed]);

  useEffect(
    () => () => {
      document.removeEventListener('mouseup', handleMouseUp);
    },
    []
  );

  return (
    <button
      className={cn(styles.button, {
        [styles['pressed']]: isPressed,
        [styles['hover']]: isHovered,
        [styles[`color${capitalize(color)}`]]: true,
        [styles[`variant${capitalize(variant)}`]]: true,
        [styles[`size${capitalize(size)}`]]: true,
      })}
      style={{ width: `${width}` }}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {' '}
      <span className={styles.icon}>{startIcon}</span>
      {text}
      <span className={styles.icon}>{endIcon}</span>
    </button>
  );
}
