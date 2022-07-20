import { FC, ReactNode } from "react";
import style from "./Layout.module.css";

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <main className={style.root}>{children}</main>;
};

export default Layout;
