import PaystackPop from '@paystack/inline-js';

export const callPaystackPop = (paystackArgs: Record<string, any> | any): void => {
  const paystack = new PaystackPop();
  paystack.newTransaction(paystackArgs);
};
