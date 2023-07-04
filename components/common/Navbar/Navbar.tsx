import React, { FC } from "react";
import { Container } from "@components/ui";
import { Usernav } from "@components/common";
import Link from "next/link";
//import { useCategoryUI } from "@components/ui/categoryContext";
import s from "./Navbar.module.css";
import { GlobalProps } from "@lib/GlobalProps/GlobalProps";

const Navbar: FC<{}> = () => {
  //const { isSidebarOpen } = useCategoryUI();
  const { categories } = GlobalProps.use();
  console.log("categories: ", categories);
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link href={"/"}>
            <a className={s.logo}>Ecommerce Shopify</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href={"/"}>
              <a className={s.link}>Home</a>
            </Link>
            <Link href={"/"}>
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href={"/"}>
              <a className={s.link}>Accessories</a>
            </Link>
            <Link href={"/"}>
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
