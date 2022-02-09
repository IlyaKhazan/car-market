import * as React from "react";

import {useCallback, useState, useEffect} from 'react'
import cn from 'classnames'

import {Values} from '../../types'

import styles from './styles.css'

const Variant = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
}

const Color = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  SECONDARY: 'secondary',
  BLUE: 'blue',

}

const Size = {
  XXS: "xxs",
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
}

type Props = {
  color?: Values<typeof Color>
  variant?: Values<typeof Variant>
  text?: string
  width?: string
  size?: Values<typeof Size>
  pressed?: boolean
  disabled?: boolean
  startIcon?: object
  endIcon?: object
  ariaLabel?: string
  onClick?: any
}




export const Button = ({
                         color = Color.PRIMARY,
                         variant = Variant.TEXT,
                         text,
                         width = "auto",
                         pressed = false,
                         disabled = false,
                         size = Size.M,
                         startIcon,
                         endIcon,
                         ariaLabel,
                         onClick,
                       }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(pressed)
  const [isDisabled, setDisabled] = useState(disabled)

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
        [styles[`button--size_${size}`]]: true,
      })}
      style={{width: `${width}`}}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >   <span className={cn(styles.icon, {
      [styles[`icon--start`]]: true,
    })}>{startIcon}</span>
      {text}
      <span className={cn(styles.icon, {
        [styles[`icon--end`]]: true,
      })}>{endIcon}</span>
    </button>
  )
}
