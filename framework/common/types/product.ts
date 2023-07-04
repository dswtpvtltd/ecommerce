import {
  FixedProductTax,
  Money,
  ProductDiscount,
  ProductStockStatus,
  UrlRewrite,
  ProductItem,
} from "@framework/schema";

export interface Breadcrumb {
  category_level: number;
  category_name: string;
  category_uid: string;
  category_url_key: string;
  category_url_path: string;
}

export interface CmsBlock {
  content: string;
  identifier: string;
  title: string;
}

export type UrlRewriteEntityTypeEnum = "CMS_PAGE" | "PRODUCT" | "CATEGORY";

export interface Category {
  available_sort_by: string[];
  breadcrumbs: Breadcrumb[];
  canonical_url: string;
  children?: Category[] | null;
  children_count: string;
  cms_block: CmsBlock;
  custom_layout_update_file: string;
  default_sort_by: string;
  description: string;
  display_mode: string;
  filter_price_range: number;
  image: string;
  include_in_menu: number;
  is_anchor: number;
  landing_page: number;
  level: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  name: string;
  path: string;
  path_in_store: string;
  position: number;
  product_count: number;
  products: Product[];
  relative_url: string;
  titlecat: string;
  type: UrlRewriteEntityTypeEnum;
  uid: string;
  url_key: string;
  url_path: string;
  url_suffix: string;
}

export interface ProductImage {
  disabled: boolean;
  label: string;
  position: number;
  url: string;
}

export interface ProductOptionValues {
  label: string;
  hexColor?: string;
}

export interface ProductOption {
  id: string;
  displayName: string;
  values: ProductOptionValues[];
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  image?: ProductImage;
  requiresShipping: boolean;
  price: number;
  listPrice: number;
  options: ProductOption[];
}

export type ProductLinks = {
  link_type: string;
  linked_product_sku: string;
  linked_product_type: string;
  position: number;
  sku: string;
};

export type ComplexTextValue = {
  html: string;
};

export type ProductReviews = {};

export type MultiSelectAttributes = {};

export type PriceRange = {
  maximum_price: ProductPrice;
  minimum_price: ProductPrice;
};

type ProductPrice = {
  discount: ProductDiscount;
  final_price: Money;
  fixed_product_taxes: Array<FixedProductTax>;
  regular_price: Money;
};

export interface TierPrice {
  discount: ProductDiscount;
  final_price: Money;
  quantity: number;
}

export interface Product {
  additional_information: string;
  builder: string;
  canonical_url: string;
  categories?: Category[] | null;
  country_of_manufacture: string | null;
  customattributes: MultiSelectAttributes;
  description: ComplexTextValue;
  exterior_designer: string;
  gift_message_available: string;
  image?: ProductImage | null;
  media_gallery: ProductImage[];
  meta_description: string;
  meta_keyword: string;
  meta_title: string;
  name: string;
  new_from_date: string;
  new_to_date: string;
  only_x_left_in_stock: number;
  options_container: string;
  price_range: PriceRange;
  price_tiers: TierPrice[];
  productattribute: string;
  related_products: ProductItem[] | null;
  short_description: ComplexTextValue;
  sku: string;
  small_image?: ProductImage | null;
  special_price: number;
  special_to_date: string;
  stock_status: ProductStockStatus;
  swatch_image: string;
  thumbnail?: ProductImage | null;
  uid: string;
  upgrades: string;
  upsell_products: ProductItem[] | null;
  url_key: string;
  url_rewrites: UrlRewrite[];
  url_suffix: string;
  videoid: string;
  year: string;
}
