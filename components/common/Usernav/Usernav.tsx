import React, { FC } from "react";
import Link from "next/link";
import s from './Usernav.module.css';
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  const {data} = useCart();

  const itemCount = data?.lineItems.reduce((count: number, item: LineItem) => {
    return count + item.quantity;
  }, 0) ?? 0;

  return <nav>
    <ul className={s.list}>
      <li className={s.item}>
        <Cart onClick={openSidebar} />
        {itemCount > 0 && <span className={s.bagCount}>{itemCount}</span>}
      </li>
      <li className={s.item}>
        <Link href={"/wishlist"}>
          <a><Heart /></a>
        </Link>
      </li>
    </ul>
  </nav>
}

export default Usernav;