import type { FunctionComponent } from 'react';
import cn from 'classnames';

// import { capitalize } from '../../utils'; TODO
import { ArrowIcon } from './components/ArrowIcon/ArrowIcon';
import { PlusIcon } from './components/PlusIcon/PlusIcon';
import { ChevronIcon } from './components/ChevronIcon/ChevronIcon';
import { FlagUsaIcon } from './components/FlagUsaIcon/FlagUsaIcon';
import { UserIcon } from './components/UserIcon/UserIcon';

import { Values } from '@types';

import styles from './styles.css';

const VARIANT = {
  ARROW: 'arrow',
  PLUS: 'plus',
  CHEVRON: 'chevron',
  FLAG_USA: 'flag-usa',
  USER: 'user',
} as const;

type Variant = Values<typeof VARIANT>;

const SIZE = {
  S: 's',
  M: 'm',
  L: 'l',
  AUTO: 'auto',
} as const;

type Size = Values<typeof SIZE>;

const ICON_BY_VARIANT: Record<Variant, FunctionComponent> = {
  [VARIANT.ARROW]: ArrowIcon,
  [VARIANT.PLUS]: PlusIcon,
  [VARIANT.CHEVRON]: ChevronIcon,
  [VARIANT.FLAG_USA]: FlagUsaIcon,
  [VARIANT.USER]: UserIcon,
};

type Props = {
  variant: Variant;
  size?: Size;
  ariaLabel?: string;
};

// TODO Откалибровать по размерам компонента TEXT
export const Icon = function Icon({
  variant,
  size = SIZE.AUTO,
  ariaLabel,
}: Props) {
  const Icon = ICON_BY_VARIANT[variant];

  return (
    <span
      // className={cn(styles.icon, { [styles[`size${capitalize(size)}`]]: true })} // TODO
      className={cn(styles.icon, { [styles[`size${size[0].toUpperCase()}${size.slice(1)}`]]: true })}
      aria-label={ariaLabel}
    >
      <Icon />
    </span>
  );
};
