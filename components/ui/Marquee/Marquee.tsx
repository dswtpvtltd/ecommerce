import React, { FC, ReactNode } from "react";
//import Ticker from "react-ticker";
import s from "./Marquee.module.css";
import cn from "classnames";

interface MarqueeProps {
  children: ReactNode | ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FC<MarqueeProps> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: variant === "secondary"
    });

  return (
    <div className={rootClassName}>
      <div className={s.container}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
