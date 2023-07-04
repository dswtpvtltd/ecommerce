import { ApiConfig } from "@common/types/api";
import { Category } from "@common/types/product";
import { CategoryCollection, CategoryTree } from "@framework/schema";
import {
  categoryProductsToProducts,
  getAllCategoriesQuery,
  normalizeCategoryChild,
} from "@framework/utils";

type ReturnType = {
  categories: CategoryCollection;
};

const getAllCategory = async (config: ApiConfig): Promise<Category[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllCategoriesQuery,
  });
  let categories = data.categories.items.map(
    (category: CategoryTree): Category => {
      const products = category.products
        ? categoryProductsToProducts(category.products.items)
        : [];
      return {
        available_sort_by: category.available_sort_by,
        breadcrumbs: category.breadcrumbs,
        canonical_url: category.canonical_url,
        children: category.children
          ? normalizeCategoryChild(category.children)
          : null,
        children_count: category.children_count,
        cms_block: category.cms_block,
        custom_layout_update_file: category.custom_layout_update_file,
        default_sort_by: category.default_sort_by,
        description: category.description,
        display_mode: category.display_mode,
        filter_price_range: category.filter_price_range,
        image: category.image,
        include_in_menu: category.include_in_menu,
        is_anchor: category.is_anchor,
        landing_page: category.landing_page,
        level: category.level,
        meta_description: category.meta_description,
        meta_keywords: category.meta_keywords,
        meta_title: category.meta_title,
        name: category.name,
        path: category.path,
        path_in_store: category.path_in_store,
        position: category.position,
        product_count: category.product_count,
        products: products,
        relative_url: category.relative_url,
        titlecat: category.titlecat,
        type: category.type,
        uid: category.uid,
        url_key: category.url_key,
        url_path: category.url_path,
        url_suffix: category.url_suffix,
      };
    }
  );
  return categories.length > 0 ? categories : [];
};

export default getAllCategory;
