export const MAGENTO_CHECKOUT_URL_COOKIE = "magento_checkouturl";
export const MAGENTO_COOKIE_EXPIRE = 90;

export const API_URL =
  process.env.NEXT_PUBLIC_FRAMEWORK === "magento_local"
    ? process.env.NEXT_PUBLIC_LOCAL_STORE_DOMAIN
    : process.env.NEXT_PUBLIC_MAGENTO_STORE_DOMAIN;

export const MAGENTO_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === "magento_local"
    ? "magento_local_checkoutid"
    : "magento_checkoutid";
