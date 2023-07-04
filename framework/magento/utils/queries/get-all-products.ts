import {
  relatedProductFragement,
  crossseleProductFragement,
  customattributesFragement,
  mediaGallaryFragement,
  imageFragement,
  priceRangeFragement,
  tierPriceFragement,
  imageAttributes,
} from "../common";

const getAllProductsQuery = `
query ProductList($search: String, $filter: ProductAttributeFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput) {
  products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
    aggregations {
      attribute_code
      count
      label
      options {
        count
        label
        value
      }
      position
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    sort_fields {
      default
      options {
        label
        value
      }
    }
    suggestions {
      search
    }
    items {
      additional_information
      builder
      canonical_url
      categories {
        available_sort_by
        canonical_url
        children_count
        custom_layout_update_file
        default_sort_by
        description
        display_mode
        filter_price_range
        image
        include_in_menu
        is_anchor
        landing_page
        level
        meta_title
        meta_description
        meta_keywords
        name
        path
        path_in_store
        position
        product_count
        titlecat
        uid
        url_key
        url_path
        url_suffix
      }
      country_of_manufacture
      ${crossseleProductFragement}
      ${customattributesFragement}
      description {
        html
      }
      exterior_designer
      gift_message_available
      ${imageFragement}
      ${mediaGallaryFragement}
      meta_description
      meta_keyword
      meta_title
      name
      new_from_date
      new_to_date
      only_x_left_in_stock
      options_container
      ${priceRangeFragement}
      ${tierPriceFragement}
      productattribute
      rating_summary
      ${relatedProductFragement}
      review_count
      short_description {
        html
      }
      sku
      small_image {
        ${imageAttributes}
      }
      thumbnail{
        ${imageAttributes}
      }
      special_price
      special_to_date
      stock_status
      swatch_image
      uid
      upgrades
      url_key
      url_rewrites {
        parameters {
          name
          value
        }
        url
      }
      url_suffix
      videoid
      year
    }
    total_count
  }
}
`;

export default getAllProductsQuery;
