import { usePaystackPayment, PaystackButton } from "react-paystack";

export default function App() {
  const config = {
    reference: `REF-${Date.now()}`,
    email: "customer@example.com",
    amount: 500000,
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxx",
  };

  // Hook
  const initializePayment = usePaystackPayment(config);

  const payWithHook = () => {
    initializePayment({
      onSuccess: (response) => {
        console.log("Hook Success", response);
      },
      onClose: () => {
        console.log("Hook Closed");
      },
    });
  };

  // Component callbacks
  const componentProps = {
    ...config,
    text: "Pay with Component",
    onSuccess: (response: any) => {
      console.log("Component Success", response);
    },
    onClose: () => {
      console.log("Component Closed");
    },
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Paystack Test Page</h1>

      <hr />

      <h2>1. usePaystackPayment Hook</h2>
      <button onClick={payWithHook}>
        Pay with Hook
      </button>

      <hr />

      <h2>2. PaystackButton Component</h2>
      <PaystackButton {...componentProps} />
    </div>
  );
}