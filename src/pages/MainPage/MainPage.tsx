import * as React from 'react'
import cn from 'classnames'

import styles from './styles.css'
import { Intro } from './Intro/Intro'
import { SearchBar } from './SearchBar/SearchBar'
import { BodyTypes } from './BodyTypes/BodyTypes'
import { TopOffers } from './TopOffers/TopOffers'
import { Features } from './Features/Features'
import { LatestCars } from './LatestCars/LatestCars'
import { AutoMarket } from './AutoMarket/AutoMarket'
import { Download } from './Download/Download'
import { LatestNews } from './LatestNews/LatestNews'
import {Icon} from '../../components/Icon/Icon';

export const MainPage = ({ onInit }) => {
  React.useEffect(() => {
    onInit()
  }, [])

  return (
    <main>
        Америка <Icon variant="flag-usa" />
      <Intro />
      <SearchBar />
      <BodyTypes />
      <TopOffers />
      <Features />
      <LatestCars />
      <AutoMarket />
      <Download />
      <LatestNews />
    </main>
  )
}
