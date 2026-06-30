import { usePaystackPayment } from "react-paystack";
import "./index.css"
import "./App.css"

export default function App() {
  const initializePayment = usePaystackPayment({
    email: "customer@example.com",
    amount: 500000, // ₦5,000 (amount is in kobo)
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxx",
    reference: `REF-${Date.now()}`,
  });

  const handlePayment = () => {
    initializePayment({
      onSuccess: (response) => {
        console.log("Payment successful:", response);
      },
      onClose: () => {
        console.log("Payment cancelled");
      },
    });
  };

  return (
    <div>
      <h1>React Paystack Demo</h1>

      <button onClick={handlePayment}>
        Pay ₦5,000
      </button>
    </div>
  );
}