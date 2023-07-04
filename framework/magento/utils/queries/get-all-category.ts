const getAllCategoriesQuery = `
query ProductList(
  $filters: CategoryFilterInput
  $pageSize: Int
  $currentPage: Int
  $sort: ProductAttributeSortInput
) {
  categories(pageSize: $pageSize, filters: $filters) {
    items {
      available_sort_by
      breadcrumbs {
        category_uid
        category_name
        category_level
        category_url_key
        category_url_path
      }
      canonical_url
      children {
        available_sort_by
        breadcrumbs {
          category_uid
          category_name
          category_level
          category_url_key
          category_url_path
        }
        canonical_url
        children {
          available_sort_by
          breadcrumbs {
            category_uid
            category_name
            category_level
            category_url_key
            category_url_path
          }
          canonical_url
          children_count
          cms_block {
            content
            identifier
            title
          }
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
          products(
            pageSize: $pageSize
            currentPage: $currentPage
            sort: $sort
          ) {
            items {
              additional_information
              builder
              canonical_url
              crosssell_products {
                additional_information
                builder
                canonical_url
                customattributes {
                  MultiSelectAttributes {
                    byo
                    attributeenable
                    catering
                    location
                    locationsummer
                    locationwinter
                    paymenttype
                  }
                }
                description {
                  html
                }
                exterior_designer
                gift_message_available
                image {
                  disabled
                  label
                  position
                  url
                }
                media_gallery {
                  disabled
                  label
                  position
                  url
                }
                meta_description
                meta_keyword
                meta_title
                name
                new_from_date
                new_to_date
                only_x_left_in_stock
                options_container
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
                uid
              }
              related_products {
                additional_information
                builder
                canonical_url
                customattributes {
                  MultiSelectAttributes {
                    byo
                    attributeenable
                    catering
                    location
                    locationsummer
                    locationwinter
                    paymenttype
                  }
                }
                description {
                  html
                }
                exterior_designer
                gift_message_available
                image {
                  disabled
                  label
                  position
                  url
                }
                media_gallery {
                  disabled
                  label
                  position
                  url
                }
                meta_description
                meta_keyword
                meta_title
                name
                new_from_date
                new_to_date
                only_x_left_in_stock
                options_container
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
                uid
              }
              customattributes {
                MultiSelectAttributes {
                  byo
                  attributeenable
                  catering
                  location
                  locationsummer
                  locationwinter
                  paymenttype
                }
              }
              description {
                html
              }
              exterior_designer
              gift_message_available
              image {
                disabled
                label
                position
                url
              }
              media_gallery {
                disabled
                label
                position
                url
              }
              meta_description
              meta_keyword
              meta_title
              name
              new_from_date
              new_to_date
              only_x_left_in_stock
              options_container
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
              uid
            }
            page_info {
              current_page
              page_size
              total_pages
            }
            total_count
          }
          relative_url
          titlecat
          type
          uid
          url_key
          url_path
          url_suffix
        }
        children_count
        cms_block {
          content
          identifier
          title
        }
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
        products(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
          items {
            additional_information
            builder
            canonical_url
            crosssell_products {
              additional_information
              builder
              canonical_url
              customattributes {
                MultiSelectAttributes {
                  byo
                  attributeenable
                  catering
                  location
                  locationsummer
                  locationwinter
                  paymenttype
                }
              }
              description {
                html
              }
              exterior_designer
              gift_message_available
              image {
                disabled
                label
                position
                url
              }
              media_gallery {
                disabled
                label
                position
                url
              }
              meta_description
              meta_keyword
              meta_title
              name
              new_from_date
              new_to_date
              only_x_left_in_stock
              options_container
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
              uid
            }
            related_products {
              additional_information
              builder
              canonical_url
              customattributes {
                MultiSelectAttributes {
                  byo
                  attributeenable
                  catering
                  location
                  locationsummer
                  locationwinter
                  paymenttype
                }
              }
              description {
                html
              }
              exterior_designer
              gift_message_available
              image {
                disabled
                label
                position
                url
              }
              media_gallery {
                disabled
                label
                position
                url
              }
              meta_description
              meta_keyword
              meta_title
              name
              new_from_date
              new_to_date
              only_x_left_in_stock
              options_container
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
              uid
            }
            customattributes {
              MultiSelectAttributes {
                byo
                attributeenable
                catering
                location
                locationsummer
                locationwinter
                paymenttype
              }
            }
            description {
              html
            }
            exterior_designer
            gift_message_available
            image {
              disabled
              label
              position
              url
            }
            media_gallery {
              disabled
              label
              position
              url
            }
            meta_description
            meta_keyword
            meta_title
            name
            new_from_date
            new_to_date
            only_x_left_in_stock
            options_container
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
            uid
          }
          page_info {
            current_page
            page_size
            total_pages
          }
          total_count
        }
        relative_url
        titlecat
        type
        uid
        url_key
        url_path
        url_suffix
      }
      children_count
      cms_block {
        content
        identifier
        title
      }
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
      products(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
        items {
          additional_information
          builder
          canonical_url
          crosssell_products {
            additional_information
            builder
            canonical_url
            customattributes {
              MultiSelectAttributes {
                byo
                attributeenable
                catering
                location
                locationsummer
                locationwinter
                paymenttype
              }
            }
            description {
              html
            }
            exterior_designer
            gift_message_available
            image {
              disabled
              label
              position
              url
            }
            media_gallery {
              disabled
              label
              position
              url
            }
            meta_description
            meta_keyword
            meta_title
            name
            new_from_date
            new_to_date
            only_x_left_in_stock
            options_container
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
            uid
          }
          related_products {
            additional_information
            builder
            canonical_url
            customattributes {
              MultiSelectAttributes {
                byo
                attributeenable
                catering
                location
                locationsummer
                locationwinter
                paymenttype
              }
            }
            description {
              html
            }
            exterior_designer
            gift_message_available
            image {
              disabled
              label
              position
              url
            }
            media_gallery {
              disabled
              label
              position
              url
            }
            meta_description
            meta_keyword
            meta_title
            name
            new_from_date
            new_to_date
            only_x_left_in_stock
            options_container
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
            uid
          }
          customattributes {
            MultiSelectAttributes {
              byo
              attributeenable
              catering
              location
              locationsummer
              locationwinter
              paymenttype
            }
          }
          description {
            html
          }
          exterior_designer
          gift_message_available
          image {
            disabled
            label
            position
            url
          }
          media_gallery {
            disabled
            label
            position
            url
          }
          meta_description
          meta_keyword
          meta_title
          name
          new_from_date
          new_to_date
          only_x_left_in_stock
          options_container
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
          uid
        }
        page_info {
          current_page
          page_size
          total_pages
        }
        total_count
      }
      relative_url
      titlecat
      type
      uid
      url_key
      url_path
      url_suffix
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`;

export default getAllCategoriesQuery;
