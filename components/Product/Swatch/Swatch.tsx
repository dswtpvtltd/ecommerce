import { Check } from "@components/icons";
import React, { FC } from "react";
import { isDark } from "@lib/color";
import s from './Swatch.module.css';
import cn from 'classnames';

interface Props {
  color?: string;
  label?: string;
  variant?: "size" | 'color' | string;
  onClick: () => void;
  active?: boolean;
  size?: "sm" | "md" | "lg";
}

const Swatch: FC<Props> = ({color, label, size="md", variant, onClick, active, ...rest}) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const activeClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.color]: color,
      [s.size]: variant === 'size',
      [s.dark]: color && isDark(color),
      [s.sm]: size === 'sm'
    }
  );

  return <button
    onClick={onClick}
    style={color?{backgroundColor: color}: {}}
    className={activeClassName}
    {...rest}
    >
    {variant === 'color' && active && (<span>
      <Check />
    </span>)}
    {variant?.toLowerCase() === 'size' ? label : null}
  </button>
}

export default Swatch;
