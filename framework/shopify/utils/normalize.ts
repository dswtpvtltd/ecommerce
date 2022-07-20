import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc, ...rest } }) => {
    return {
      url: `/images/${originalSrc}`,
      ...rest,
    };
  });
}

function normalizeProductPrice({ amount, currencyCode }: MoneyV2) {
  return {
    value: +amount,
    currencyCode,
  };
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    images: imageCollection,
    handle,
    vendor,
    description,
    priceRange,
    ...rest
  } = productNode;
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    images: normalizeProductImages(imageCollection),
    slug: handle.replace(/^\/+|\/+$/g, ""),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };
  return product;
}
