import { checkoutDetailFragment } from "../common";

const createCheckout = `
mutation checkoutCreate($input: CheckoutCreateInput! = {}){
  checkoutCreate(input: $input) {
    checkoutUserErrors {
      field
      message
    }
    checkout {
      ${checkoutDetailFragment}
    }
  }
}`;

export default createCheckout;
