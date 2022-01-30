import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'

type Props = {
  placeholder: string
  type?: 'text' | 'date' | 'time' | 'tel' | 'email' | 'number'
}

export const Input = ({ placeholder, type = 'text' }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}
