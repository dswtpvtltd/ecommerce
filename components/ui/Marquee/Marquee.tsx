import React, { FC, ReactNode } from "react";
import Ticker from "react-ticker";
import s from "./Marquee.module.css";

interface MarqueeProps {
  children: ReactNode | ReactNode[];
}

const Marquee: FC<MarqueeProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Ticker offset="run-in" speed={10}>
        {({ index }) => (
          <div key={index} className={s.container}>
            {children}
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default Marquee;
