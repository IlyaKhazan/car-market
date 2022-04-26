import type { FunctionComponent } from 'react';
import cn from 'classnames';

import { capitalize } from '../../utils';

import { ArrowIcon } from './components/ArrowIcon/ArrowIcon';
import { ArrowsSortIcon } from './components/ArrowsSortIcon/ArrowsSortIcon';
import { CalcIcon } from './components/CalcIcon/CalcIcon';
import { CalendarIcon } from './components/CalendarIcon/CalendarIcon';
import { CarIcon } from './components/CarIcon/CarIcon';
import { ChatRoundIcon } from './components/ChatRoundIcon/ChatRoundIcon';
import { ChevronIcon } from './components/ChevronIcon/ChevronIcon';
import { EditIcon } from './components/EditIcon/EditIcon';
import { FileIcon } from './components/FileIcon/FileIcon';
import { FlagUsaIcon } from './components/FlagUsaIcon/FlagUsaIcon';
import { GridIcon } from './components/GridIcon/GridIcon';
import { InfoIcon } from './components/InfoIcon/InfoIcon';
import { ListIcon } from './components/ListIcon/ListIcon';
import { MailIcon } from './components/MailIcon/MailIcon';
import { PeopleIcon } from './components/PeopleIcon/PeopleIcon';
import { PhoneIcon } from './components/PhoneIcon/PhoneIcon';
import { PinIcon } from './components/PinIcon/PinIcon';
import { PlusIcon } from './components/PlusIcon/PlusIcon';
import { SearchIcon } from './components/SearchIcon/SearchIcon';
import { SettingsIcon } from './components/SettingsIcon/SettingsIcon';
import { StarIcon } from './components/StarIcon/StarIcon';
import { SwitchHorizontalIcon } from './components/SwitchHorizontalIcon/SwitchHorizontalIcon';
import { UserIcon } from './components/UserIcon/UserIcon';
import { WorldIcon } from './components/WorldIcon/WorldIcon';

import { Values } from '@types';

import styles from './styles.css';

const VARIANT = {
  ARROW: 'arrow',
  ARROWS_SORT: 'arrows-sort',
  CALC: 'calc',
  CALENDAR: 'calendar',
  CAR: 'car',
  CHAT_ROUND: 'chat-round',
  CHEVRON: 'chevron',
  EDIT: 'edit',
  FILE: 'file',
  FLAG_USA: 'flag-usa',
  GRID: 'grid',
  INFO: 'info',
  LIST: 'list',
  MAIL: 'mail',
  PEOPLE: 'people',
  PHONE: 'phone',
  PIN: 'pin',
  PLUS: 'plus',
  SEARCH: 'search',
  SETTINGS: 'settings',
  STAR: 'star',
  SWITCH_HORIZONTAL: 'switch-horizontal',
  USER: 'user',
  WORLD: 'world',
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
  [VARIANT.ARROWS_SORT]: ArrowsSortIcon,
  [VARIANT.CALC]: CalcIcon,
  [VARIANT.CALENDAR]: CalendarIcon,
  [VARIANT.CAR]: CarIcon,
  [VARIANT.CHAT_ROUND]: ChatRoundIcon,
  [VARIANT.CHEVRON]: ChevronIcon,
  [VARIANT.EDIT]: EditIcon,
  [VARIANT.FILE]: FileIcon,
  [VARIANT.FLAG_USA]: FlagUsaIcon,
  [VARIANT.GRID]: GridIcon,
  [VARIANT.INFO]: InfoIcon,
  [VARIANT.LIST]: ListIcon,
  [VARIANT.MAIL]: MailIcon,
  [VARIANT.PEOPLE]: PeopleIcon,
  [VARIANT.PHONE]: PhoneIcon,
  [VARIANT.PIN]: PinIcon,
  [VARIANT.PLUS]: PlusIcon,
  [VARIANT.SEARCH]: SearchIcon,
  [VARIANT.SETTINGS]: SettingsIcon,
  [VARIANT.STAR]: StarIcon,
  [VARIANT.SWITCH_HORIZONTAL]: SwitchHorizontalIcon,
  [VARIANT.USER]: UserIcon,
  [VARIANT.WORLD]: WorldIcon,
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
      className={cn(styles.icon, { [styles[`size${capitalize(size)}`]]: true })}
      aria-label={ariaLabel}
    >
      <Icon />
    </span>
  );
};
