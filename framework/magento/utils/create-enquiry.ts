import { ApiFetcher } from "@common/types/api";
import { Checkout, CheckoutCreatePayload } from "@framework/schema";
import { createNewEnquiryMutation } from "./mutations";

const createNewEnquiry = async (
  fetch: ApiFetcher<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Checkout> => {
  const { data } = await fetch({
    query: createNewEnquiryMutation,
  });
  const { apisuccess } = data.createNewEnquiry;

  if (!apisuccess) {
    throw new Error("checkout can not be created1");
  }

  return apisuccess;
};

export default createNewEnquiry;
