import {useCallback, useState} from 'react'
import cn from 'classnames'

import styles from './styles.css'
import {Button} from '../../components/Button/Button'
import Logo from '../../img/icons/user.svg';
import MainLogo from '../../img/logo.png'
import UserIcon from '../../img/icons/user.svg'
import PlusIcon from '../../img/icons/plus.svg'
import EnFlagIcon from '../../img/icons/flag-en.svg'
import ChevronIcon from '../../img/icons/chevron.svg'



export const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <div className={styles.nav_wrapper}>
          <a className={styles.header_logo} href="#">
            <img src={MainLogo} alt="CarMarket logo" width="116px" height="32px"/>
          </a>

          <Button text="Eng" width="66px" startIcon={<EnFlagIcon/>} endIcon={<ChevronIcon/>} />
          <div className={styles.nav_list}>
            <Button text="New cars" size="xs" />
            <Button text="Used cars" size="xs" />
            <Button text="Sell" size="xs" />
            <Button text="Compare" size="xs" />
            <Button text="News & Reviews" size="xs" />
          </div>
        </div>
        <div className={styles.nav_sidebuttons}>
          <Button text="Sign in" variant="text" width="110px" size="xs" startIcon={<UserIcon/>} />
          <Button text="Sell car" variant="contained" color="primary" width="110px" size="xs" startIcon={<PlusIcon/>}  />

        </div>
      </nav>
    </header>
  )
}
