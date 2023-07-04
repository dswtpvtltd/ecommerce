import { ApiConfig } from "@common/types/api";
import { Attribute, customAttributeMetadata } from "@framework/schema";
import { getAttributeValueQuery } from "@framework/utils";

type ReturnType = {
  customAttributeMetadata: customAttributeMetadata;
};

const getAttributeValues = async (
  config: ApiConfig
): Promise<Attribute[] | []> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAttributeValueQuery,
    variables: {
      attribute_code: "location",
    },
  });

  let attributes =
    data.customAttributeMetadata &&
    data.customAttributeMetadata.items.map((attribute: Attribute) => {
      return {
        attribute_code: attribute.attribute_code,
        attribute_options: attribute.attribute_options,
        attribute_type: attribute.attribute_type,
        entity_type: attribute.entity_type,
        input_type: attribute.input_type,
      };
    });

  return attributes ?? [];
};

export default getAttributeValues;
