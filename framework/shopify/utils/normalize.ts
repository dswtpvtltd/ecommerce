import { Checkout,
  CheckoutLineItemEdge,
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption } from "../schema";
import { Product } from "@common/types/product";
import { Cart, LineItem } from "@common/types/cart";

export const normalizeCart = (checkout: Checkout): Cart => {
  return {
    id: checkout.id,
    createAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode
    },
    taxesIncluded: checkout.taxesIncluded,

    //taxes, discount excluded
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,

    // taxes, discount included
    totalPrice: checkout.totalPriceV2.amount,
    lineItems: checkout.lineItems.edges.map(normalizeLineItem),
    discount: []
  };
}

const normalizeLineItem = (lineItemEdge: CheckoutLineItemEdge): LineItem => {
  const { node: {id, title, variant, quantity, ...rest} } = lineItemEdge;
  return {
    id,
    variantId: String(variant?.id),
    productId: String(variant?.id),
    name: title,
    quantity,
    path: String(variant?.product?.handle) ?? "",
    discount: [],
    options: variant?.selectedOptions.map(({name, value}: SelectedOption) => {
      const option = normalizeProductOption({
        id,
        name,
        values: [value]
      });

      return option;
    }),
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? "",
      image: {
        url: process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify' ?
        `/images/${variant?.image?.originalSrc}` : variant?.image?.originalSrc ?? "/images/product-image-placeholder.svg"
      },
      requiresShipping: variant?.requiresShipping ?? false,
      //price is actual price
      price: variant?.priceV2.amount,
      // this is base price
      listPrice: variant?.compareAtPriceV2?.amount,
    },
    ...rest
  }
}

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

function normalizeProductOption({ id, values, name: displayName }: ProductOption) {
  const narmalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {label: value};

      if(displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }
      return output;
    })
  };

  return narmalized;
}

export function normalizeProductVariants(variants: ProductVariantConnection) {
    const { edges } = variants;
    return edges.map(({node}) => {
      const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;

      return {
        id,
        name: title,
        sku: sku || id,
        price: +priceV2.amount,
        listPrice: +compareAtPriceV2?.amount,
        requiresShipping: true,
        options: selectedOptions.map(({name, value}: SelectedOption) => {
          const option = normalizeProductOption({
            id,
            name,
            values: [value]
          });

          return option;
        })
      }
    });
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
    options,
    variants,
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
    options: options ? options.filter(o => o.name !== "Title")
                              .map(o => normalizeProductOption(o)) : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };
  return product;
}
