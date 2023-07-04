import React, { ButtonHTMLAttributes, ComponentType, FC, HTMLAttributes, ReactNode } from "react";
import s from './Button.module.css';
import cn from 'classnames';
import {LoadingDots} from "@components/ui";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string
}

const Button: FC<Props> = ({
  children,
  onClick,
  isLoading=false,
  className,
  Component = "button",
  ...rest
}) => {
  const rootClassName = cn(
      s.root,
      className,
      {
        [s.loading]: isLoading
      }
    )
  return <Component {...rest} className={rootClassName} onClick={onClick}>
      {children}
      {` `}{isLoading && <div className="pl-2 m-0 flex"><LoadingDots /></div>}
    </Component>
}

export default Button;
