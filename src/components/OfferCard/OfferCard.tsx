import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'

import { Badge } from '../Badge/Badge'

type Props = {
  variant?: 'main' | 'aside'
  year: number
  carName: string
  price: number
  location: string
}

export const OfferCard = ({
  variant = 'aside',
  year,
  carName,
  price,
  location,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div
      className={cn(styles.offercard, {
        [styles[`offercard--hover`]]: isHovered,
        [styles[`offercard--variant_${variant}`]]: true,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.offercard_image}>
        <img src="" alt="" />
      </div>
      <div className={styles.offercard_wrapper}>
        <div className={styles.offercard_innerwrapper}>
          <ul className={styles.offercard_infolist}>
            <li
              className={cn(styles.offercard_infoitem, {
                [styles[`offercard_infoitem--year`]]: true,
              })}
            >
              {year}
            </li>
            <li
              className={cn(styles.offercard_infoitem, {
                [styles[`offercard_infoitem--carName`]]: true,
              })}
            >
              {carName}
            </li>
            <li
              className={cn(styles.offercard_infoitem, {
                [styles[`offercard_infoitem--price`]]: true,
              })}
            >
              {`$ ${price}`}
            </li>
            <li
              className={cn(styles.offercard_infoitem, {
                [styles[`offercard_infoitem--location`]]: true,
              })}
            >
              {location}
            </li>
          </ul>
          <div>
            <input type="checkbox" />
            <span>Compare</span>
          </div>
        </div>
        <div className={styles.offercard_badgegroup}>
          <Badge text="278k KM" />
          <Badge text="Manual" />
          <Badge text="Diesel" />
        </div>
      </div>
    </div>
  )
}
