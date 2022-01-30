import { useCallback, useState, useEffect } from 'react'
import cn from 'classnames'

import { Values } from '../../types'

import styles from './styles.css'

const Variant = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const

type Props = {
  color?: 'primary' | 'accent' | 'secondary'
  variant?: Values<typeof Variant>
  text: string
  width?: 'auto' | '35' | '70' | '120' | '150' | '180'
  pressed?: boolean
}

export const Button = ({
  color = 'primary',
  variant = Variant.TEXT,
  text,
  width = '120',
  pressed = false,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(pressed)

  const handleMouseDown = useCallback(() => {
    setIsPressed(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsPressed(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  useEffect(() => {
    setIsPressed(pressed)
  }, [pressed])

  return (
    <button
      className={cn(styles.button, {
        [styles['button--pressed']]: isPressed,
        [styles['button--hover']]: isHovered,
        [styles[`button--color_${color}`]]: true,
        [styles[`button--variant_${variant}`]]: true,
        [styles[`button--width_${width}`]]: true,
      })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span className={styles.icon}></span>
    </button>
  )
}
