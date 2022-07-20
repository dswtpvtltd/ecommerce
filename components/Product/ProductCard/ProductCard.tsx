import { Product } from "@common/types/product";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";

const placeholderImage = "/product-image-placeholder.svg";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <>
      <Link href={`/product/${product.slug}`}>
        <a className={s.root}>
          {variant === "slim" ? (
            <>
              <div className="absolute z-20 flex items-center justify-center inset-0">
                <span className="bg-black text-white p-3 font-bold text-xl">
                  {product.name}
                </span>
              </div>
              {product.images && (
                <div className={s.productImageSlim}>
                  <Image
                    src={placeholderImage}
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
                  {product.price?.value} {product.price?.currencyCode}
                </span>
              </div>
              {product.images && (
                <div className={s.productImage}>
                  <Image
                    src={placeholderImage}
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
