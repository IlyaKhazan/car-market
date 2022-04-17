import type { Component } from 'react';
import { useCallback, useState, useEffect } from 'react';
import { capitalize } from '../../utils.js';
import cn from 'classnames';

import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { PlusIcon } from '../PlusIcon/PlusIcon';
import { ChevronIcon } from '../ChevronIcon/ChevronIcon';
import { FlagEnIcon } from '../FlagEnIcon/FlagEnIcon';
import { UserIcon } from '../UserIcon/UserIcon';

import { Values } from '@types';

import styles from './styles.css';

const Variant = {
  ARROW: 'arrow',
  PLUS: 'plus',
  CHEVRON: 'chevron',
  FLAGEN: 'flagen',
  USER: 'user',
  EMPTY: 'empty',
} as const;

const Size = {
  S: 's',
  M: 'm',
  L: 'l',
} as const;

const iconByVariant = {
  [Variant.ARROW]: ArrowIcon,
  [Variant.PLUS]: PlusIcon,
  [Variant.CHEVRON]: ChevronIcon,
  [Variant.FLAGEN]: FlagEnIcon,
  [Variant.USER]: UserIcon,
  [Variant.EMPTY]: 'empty', //пока не пойму, как сделать правильно тут
};

type Props = {
  variant?: Values<typeof Variant>;
  size?: Values<typeof Size>;
  ariaLabel?: string;
  onClick?: any;
};

export const Icon = function Icon({
  variant = 'empty',
  size = 'm',
  ariaLabel,
}: Props) {
  const SelectedIcon = iconByVariant[variant];

  return (
    <span
      className={cn(styles.icon, { [styles[`size${capitalize(size)}`]]: true })}
      aria-label={ariaLabel}
    >
      <SelectedIcon />
    </span>
  );
};
