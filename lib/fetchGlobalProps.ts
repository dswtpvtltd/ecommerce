import { GlobalProps } from "@common/types";
import { getConfig } from "@framework/api/config";
import {
  getAllCategory,
  getAllProducts,
  getAttributeValues,
} from "@framework/product";

export async function fetchGlobalProps(): Promise<GlobalProps> {
  const config = getConfig();
  const categories = await getAllCategory(config);
  const locations = await getAttributeValues(config);
  const products = await getAllProducts(config);

  return {
    products,
    locations,
    categories,
  };
}
