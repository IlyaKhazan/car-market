import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'
import { Button } from '../../components/Button/Button'

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <div className={styles.nav_wrapper}>
          <a className="logo" href="">
            <img
              className="logo-img"
              src="../../img/logo.png"
              width="116px"
              height="32px"
              alt="Логотип CarMarket"
            />
          </a>
          <Button text="Eng" />
          <div className={styles.nav_list}>
            <Button text="New cars" width="auto" />
            <Button text="Used cars" width="auto" />
            <Button text="Sell" width="auto" />
            <Button text="Compare" width="auto" />
            <Button text="News & Reviews" width="auto" />
          </div>
          {/* <ul className={styles.nav_list}>
            <li className="nav__item">New cars</li>
            <li className="nav__item">Used cars</li>
            <li className="nav__item">Sell</li>
            <li className="nav__item">Compare</li>
            <li className="nav__item">News & Reviews</li>
          </ul> */}
        </div>
        <div className={styles.nav__sidebuttons}>
          <Button text="Sign in" variant="text" />
          <Button text="Sell car" variant="contained" color="primary" />
        </div>
      </nav>
    </header>
  )
}
