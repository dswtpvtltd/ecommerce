import { getAllProductsQuery, normalizeCategoryChild } from "../utils";
import { ProductCollections, ProductItem } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

//Return Type
type ReturnType = { products: ProductCollections };

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
    variables: {
      filter: {},
      pageSize: 12,
    },
  });
  return (
    data.products.items.map((item: ProductItem) => {
      return {
        additional_information: item.additional_information,
        builder: item.builder,
        canonical_url: item.canonical_url,
        categories: normalizeCategoryChild(item.categories),
        country_of_manufacture: item.country_of_manufacture,
        customattributes: item.customattributes,
        description: item.description,
        exterior_designer: item.exterior_designer,
        gift_message_available: item.gift_message_available,
        image: item.image,
        media_gallery: item.media_gallery,
        meta_description: item.meta_description,
        meta_keyword: item.meta_keyword,
        meta_title: item.meta_title,
        name: item.name,
        new_from_date: item.new_from_date,
        new_to_date: item.new_to_date,
        only_x_left_in_stock: item.only_x_left_in_stock,
        options_container: item.options_container,
        price_range: item.price_range,
        price_tiers: item.price_tiers,
        productattribute: item.productattribute,
        related_products: item.related_products ?? null,
        short_description: item.short_description,
        sku: item.sku,
        small_image: item.small_image,
        special_price: item.special_price,
        special_to_date: item.special_to_date,
        stock_status: item.stock_status,
        swatch_image: item.swatch_image,
        thumbnail: item.thumbnail,
        uid: item.uid,
        upgrades: item.upgrades,
        upsell_products: item.upsell_products ?? null,
        url_key: item.url_key ?? null,
        url_rewrites: item.url_rewrites,
        url_suffix: item.url_suffix,
        videoid: item.videoid,
        year: item.year,
      };
    }) ?? []
  );
};

export default getAllProducts;
