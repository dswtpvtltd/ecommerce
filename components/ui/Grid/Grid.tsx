import React, { ReactNode, FC } from "react";
import s from "./Grid.module.css";
import cn from "classnames";

type Props = {
  children: ReactNode | ReactNode[];
  layout?: "A" | "B";
};

const Grid: FC<Props> = ({ children, layout = "A" }) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === "A",
    [s.layoutB]: layout === "B",
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
