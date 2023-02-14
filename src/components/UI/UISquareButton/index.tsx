import {FC, ReactNode } from 'react'
import style from './UISquareButton.module.scss'

type Props = {
    children: ReactNode;
    icon?: ReactNode;
    onClick?: () => any
}

const UISquareButton: FC<Props> = ({children, icon}) => {
    if(icon) {
        return <button className={`${style.buttonWithIcon} ${style.button}`}>{children} <span className={`${style.icon}`}>{icon}</span></button>
    }
  return (
    <button className={`${style.buttonWithoutIcon} ${style.button}`}>{children}</button>
  )
}

export default UISquareButton