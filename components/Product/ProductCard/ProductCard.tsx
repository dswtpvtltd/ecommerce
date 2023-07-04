import { Product } from "@common/types/product";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <>
      <Link href={`/product/${product.url_key}`}>
        <a className={s.root}>
          {variant === "slim" ? (
            <>
              <div className="absolute z-20 flex items-center justify-center inset-0">
                <span className="bg-black text-white p-3 font-bold text-xl">
                  {product.name}
                </span>
              </div>
              {product.image && (
                <div className={s.productImageSlim}>
                  <Image
                    src={product.image.url}
                    alt={product.name ?? "Product Name"}
                    height={320}
                    width={320}
                    quality={"85"}
                    layout="fixed"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className={s.productBg}></div>
              <div className={s.productTag}>
                <h3 className={s.productTitle}>
                  <span>{product.name}</span>
                </h3>
                <span className={s.productPrice}>
                  {product.price_range.maximum_price.regular_price.value}
                  {product.price_range.maximum_price.regular_price.currency}
                </span>
              </div>
              {product.image && (
                <div className={s.productImage}>
                  <Image
                    src={product.image.url}
                    alt={product.name}
                    height={540}
                    width={540}
                    quality={"85"}
                    layout="responsive"
                  />
                </div>
              )}
            </>
          )}
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
