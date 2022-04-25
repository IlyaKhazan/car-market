import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'
import { Button } from '../../../components/Button/Button'
import { CarBodyButton } from '../../../components/Icon/components/CarBodyButton/CarBodyButton'

import ArrowIcon from '../../../img/icons/arrow.svg'

export const BodyTypes = (props) => {
  return (
    <section className={styles.bodytypes}>
      <div className={styles.bodytypes_titlewrapper}>
        <h2 className={styles.bodytypes_title}>Popular car body types</h2>
        <Button text="View all" endIcon={<ArrowIcon />} />
      </div>
      <div className={styles.bodytypes_cardswrapper}>
        <CarBodyButton text="Sedan" />
        <CarBodyButton text="SUV" />
        <CarBodyButton text="Wagon" />
        <CarBodyButton text="Crossover" />
        <CarBodyButton text="Coupe" />
        <CarBodyButton text="Pickup" />
        <CarBodyButton text="Sport Coupe" />
        <CarBodyButton text="Compact" />
        <CarBodyButton text="Convertible" />
        <CarBodyButton text="Family MPV" />
      </div>
    </section>
  )
}
