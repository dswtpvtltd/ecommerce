export const checkoutDetailFragment = `
      id
      webUrl
      subtotalPriceV2{
        amount
        currencyCode
      }
      totalTaxV2 {
        amount
        currencyCode
      }
      totalPriceV2 {
        amount
        currencyCode
      }
      completedAt
      createdAt
      taxesIncluded
      lineItems(first: 250) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            variant {
              id
              sku
              title
              selectedOptions{
                name,
                value
              }
              image {
                originalSrc
                altText
                width
                height
              }
              priceV2{
                amount
                currencyCode
              }
              compareAtPriceV2{
                amount
                currencyCode
              }
              product {
                handle
              }
            }
            quantity
          }
        }
      }
`;

export const imageAttributes = `
  disabled
  label
  position
  url
`;

export const mediaGallaryFragement = `
media_gallery {
  ${imageAttributes}
}
`;

export const imageFragement = `
image {
  ${imageAttributes}
}
`;

export const pageInfoFragement = `
page_info {
  current_page
  page_size
  total_pages
}
`;

export const tierPriceFragement = `
price_tiers {
  discount {
    amount_off
    percent_off
  }
  final_price {
    currency
    value
  }
  quantity
}
`;

export const customattributesFragement = `
  customattributes {
    MultiSelectAttributes {
      attributeenable
      location
      locationsummer
      locationwinter
      paymenttype
      catering
      byo
    }
  }
`;

export const priceRangeFragement = `
price_range {
  maximum_price {
    discount {
      amount_off
      percent_off
    }
    final_price {
      currency
      value
    }
    fixed_product_taxes {
      amount {
        currency
        value
      }
      label
    }
    regular_price {
      currency
      value
    }
  }
  minimum_price {
    discount {
      amount_off
      percent_off
    }
    final_price {
      currency
      value
    }
    fixed_product_taxes {
      amount {
        currency
        value
      }
      label
    }
    regular_price {
      currency
      value
    }
  }
}
`;

export const crossseleProductFragement = `
crosssell_products {
    additional_information
    builder
    canonical_url
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
    uid
  }
`;

export const relatedProductFragement = `
related_products {
    additional_information
    builder
    canonical_url
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
    uid
  }
`;

export const breadCrumbFragement = `
breadcrumbs {
  category_uid
  category_name
  category_level
  category_url_key
  category_url_path
}
`;

export const cmsBlockFragement = `
cms_block {
  content
  identifier
  title
}
`;

export const productsFragement = `
products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
    items {
      additional_information
      builder
      canonical_url
      categories {
        available_sort_by
        ${breadCrumbFragement}
        canonical_url
        children {
          available_sort_by
          ${breadCrumbFragement}
          canonical_url
          children_count
          ${cmsBlockFragement}
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
          relative_url
          titlecat
          type
          uid
          url_key
          url_path
          url_suffix
        }
        children_count
        ${cmsBlockFragement}
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
        relative_url
        titlecat
        type
        uid
        url_key
        url_path
        url_suffix
      }
      ${crossseleProductFragement}
      ${relatedProductFragement}
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
      uid
    }
    ${pageInfoFragement}
    total_count
}`;

export const productFragement = `
products(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
    items {
      additional_information
      builder
      canonical_url
      categories {
        available_sort_by
        ${breadCrumbFragement}
        canonical_url
        children {
          available_sort_by
          ${breadCrumbFragement}
          canonical_url
          children_count
          ${cmsBlockFragement}
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
          relative_url
          titlecat
          type
          uid
          url_key
          url_path
          url_suffix
        }
        children_count
        ${cmsBlockFragement}
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
        relative_url
        titlecat
        type
        uid
        url_key
        url_path
        url_suffix
      }
      ${crossseleProductFragement}
      ${relatedProductFragement}
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
      uid
    }
    ${pageInfoFragement}
    total_count
}`;
