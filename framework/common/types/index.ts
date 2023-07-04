import { Attribute } from "@framework/schema";
import { Category, Product } from "./product";

export type GlobalProps = {
  products: Product[];
  categories: Category[];
  locations: Attribute[];
};
