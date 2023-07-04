import { ProductOption, ProductVariant } from "./product"

export interface Discount {
  value: number
}

export interface LineItem {
  id: string
  variantId: string
  productId: string
  name: string
  path: string
  quantity: number
  discount: Discount[]
  options?: ProductOption[]
  variant: Partial<ProductVariant>
}

export interface Cart {
  id: string
  createAt: string
  currency: {
    code: string
  },
  taxesIncluded: boolean
  lineItemsSubtotalPrice: number
  totalPrice: number
  lineItems: any[]
  discount: Discount[]
}
