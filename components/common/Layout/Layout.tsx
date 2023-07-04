import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@framework";

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className={s.root}>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
