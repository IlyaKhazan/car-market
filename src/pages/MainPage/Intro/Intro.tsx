import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'

export const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <p>Easy way to find the right car</p>
      <p>
        CarMarket is a leading digital marketplace for the automotive industry
        that connects car shoppers with sellers.
      </p>
    </section>
  )
}
