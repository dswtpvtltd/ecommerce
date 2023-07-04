import { GlobalProps } from "@common/types";
import { defaultGlobalPropsContextValue } from "./contexts/GlobalPropsContext";
import { getConfig } from "@framework/api/config";
import {
  getAllCategory,
  getAllProducts,
  getAttributeValues,
} from "@framework/product";

export async function extractGlobalProps(data: any): Promise<GlobalProps> {
  if (!data) return defaultGlobalPropsContextValue;
  const config = getConfig();
  const categories = await getAllCategory(config);
  const locations = await getAttributeValues(config);
  const products = await getAllProducts(config);

  return {
    products,
    categories,
    locations,
  };
}
