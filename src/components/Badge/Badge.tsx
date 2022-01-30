import { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './styles.css'

type Props = {
  size?: 'small' | 'medium' | 'big'
  color?: 'grey' | 'green' | 'red'
  text: string
}

export const Badge = ({ size = 'big', color = 'grey', text }: Props) => {
  return (
    <div
      className={cn(styles.badge, {
        [styles[`badge--color_${color}`]]: true,
        [styles[`badge--size_${size}`]]: true,
      })}
    >
      <span>{text}</span>
    </div>
  )
}
