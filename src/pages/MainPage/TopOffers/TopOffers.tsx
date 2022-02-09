import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'
import { OfferCard } from '../../../components/OfferCard/OfferCard'
import { Button } from '../../../components/Button/Button'

import ArrowIcon from '../../../img/icons/arrow.svg'

export const TopOffers = (props) => {
  return (
    <section className={styles.topoffers}>
      <div className={styles.topoffers_titlewrapper}>
        <h2 className={styles.topoffers_title}>Top offers</h2>
        <Button text="View all offers" endIcon={<ArrowIcon/>} />
      </div>
      <div className={styles.topoffers_cardswrapper}>
        <OfferCard
          variant="main"
          year={2014}
          carName="Mercedes Benz Convertible Coupe"
          price={25880}
          location="New York"
        />
        <OfferCard
          year={1995}
          carName="Ford Truck Lifted"
          price={24000}
          location="Chicago"
        />
        <OfferCard
          year={2020}
          carName="Mercedes Benz C300 Sport "
          price={54420}
          location="San Francisco"
        />
      </div>
    </section>
  )
}
