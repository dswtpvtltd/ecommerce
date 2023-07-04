import {
  CategoryProducts as MagentoProduct,
  CategoryTree,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
  Checkout,
  ProductItem,
} from "../schema";
import { Product, Category, ProductImage } from "@common/types/product";

function normalizeProductImages(image: ProductImage): ProductImage | null {
  if (!image) return null;
  return {
    disabled: image.disabled,
    label: image.label,
    position: image.position,
    url: image.url,
  };
}

export function normalizeCart(checkout: Checkout) {}

function normalizeProductOption({
  id,
  values,
  name: displayName,
}: ProductOption) {
  const narmalized = {
    id,
    displayName,
    values: values.map((value) => {
      let output: any = { label: value };

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }
      return output;
    }),
  };

  return narmalized;
}

export function normalizeProductVariants(variants: ProductVariantConnection) {
  const { edges } = variants;
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value],
        });

        return option;
      }),
    };
  });
}

export function categoryProductsToProducts(
  products: ProductItem[]
): Array<Product> {
  return products.map((product: ProductItem): Product => {
    const { image, thumbnail, small_image, url_key, price_range } = product;
    return {
      ...product,
      url_key: url_key ?? null,
      image: image ? normalizeProductImages(image) : null,
      thumbnail: thumbnail ? normalizeProductImages(thumbnail) : null,
      small_image: small_image ? normalizeProductImages(small_image) : null,
      price_range,
      categories: product.categories
        ? normalizeCategoryChild(product.categories)
        : null,
    };
  });
}

export function normalizeProduct(
  products: MagentoProduct
): Array<Product> | [] {
  if (!products) {
    return [];
  }
  const items = products.items.map((product) => {
    const {
      uid,
      name,
      image,
      thumbnail,
      small_image,
      url_key,
      description,
      price_range,
    } = product;
    return {
      ...product,
      uid,
      name,
      url_key: url_key ?? null,
      description,
      price_range,
      image: image ? normalizeProductImages(image) : null,
      thumbnail: thumbnail ? normalizeProductImages(thumbnail) : null,
      small_image: small_image ? normalizeProductImages(small_image) : null,
      categories: normalizeCategoryChild(product.categories),
    };
  });
  return items;
}

export const normalizeCategoryChild = (
  categories: CategoryTree[]
): Category[] | [] => {
  if (!categories) {
    return [];
  }
  return (
    categories &&
    categories.map((category: CategoryTree): Category => {
      return {
        ...category,
        children: category.children
          ? normalizeCategoryChild(category.children)
          : null,
        products: category.products?.items
          ? normalizeProduct(category.products)
          : [],
      };
    })
  );
};
