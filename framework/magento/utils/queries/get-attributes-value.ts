const getAttributeValueQuery = `
query attributes($attribute_code: String) {
  customAttributeMetadata(
    attributes: [
      {
        attribute_code: $attribute_code,
        entity_type: "catalog_product"
      }
    ]
  ) {
    items {
      attribute_code
      attribute_type
      entity_type
      input_type
      attribute_options {
        value
        label
      }
    }
  }
}`;

export default getAttributeValueQuery;
