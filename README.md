# React Paystack

A modern React library for integrating the Paystack payment gateway into your React applications.

This package supports **React 18** and **React 19** and is built with modern React and TypeScript.

## Features

- ⚡ Simple Paystack integration
- ⚛️ React 18 & React 19 support
- 🪝 Hook-based API
- 🔘 Ready-to-use payment button
- 🧩 Context consumer API
- 📦 TypeScript support
- 🚀 Lightweight with zero unnecessary dependencies

---

# Installation

Using npm:

```bash
npm install @aro-wolo/react-paystack
```

Using Yarn:

```bash
yarn add @aro-wolo/react-paystack
```

Using pnpm:

```bash
pnpm add @aro-wolo/react-paystack
```

---

# Quick Start

All examples below use the same configuration object.

```tsx
const config = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 20000, // Amount in the lowest currency unit (20000 Kobo = ₦200)
	publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxx",
};
```

---

# Usage

This library can be used in three different ways:

1. `usePaystackPayment` Hook
2. `PaystackButton` Component
3. `PaystackConsumer` Component

All three approaches provide the same payment experience.

---

# 1. Using the Hook

```tsx
import { usePaystackPayment } from "@aro-wolo/react-paystack";

const config = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 20000,
	publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxx",
};

export default function App() {
	const initializePayment = usePaystackPayment(config);

	const onSuccess = (reference: any) => {
		console.log(reference);
	};

	const onClose = () => {
		console.log("Payment cancelled");
	};

	return (
		<button onClick={() => initializePayment(onSuccess, onClose)}>
			Pay Now
		</button>
	);
}
```

---

# 2. Using the Button Component

```tsx
import { PaystackButton } from "@aro-wolo/react-paystack";

const componentProps = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 20000,
	publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxx",

	text: "Pay Now",

	onSuccess(reference: any) {
		console.log(reference);
	},

	onClose() {
		console.log("Payment cancelled");
	},
};

export default function App() {
	return <PaystackButton {...componentProps} />;
}
```

---

# 3. Using the Consumer Component

```tsx
import { PaystackConsumer } from "@aro-wolo/react-paystack";

const componentProps = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 20000,
	publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxx",

	onSuccess(reference: any) {
		console.log(reference);
	},

	onClose() {
		console.log("Payment cancelled");
	},
};

export default function App() {
	return (
		<PaystackConsumer {...componentProps}>
			{({ initializePayment }) => (
				<button onClick={() => initializePayment()}>Pay Now</button>
			)}
		</PaystackConsumer>
	);
}
```

---

# Transaction Metadata

Additional transaction metadata can be sent using the `metadata` property.

```tsx
const config = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 20000,
	publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxx",

	metadata: {
		custom_fields: [
			{
				display_name: "Description",
				variable_name: "description",
				value: "Funding Wallet",
			},
		],
	},
};
```

Refer to the official Paystack documentation for all available metadata options.

---

# Configuration

| Property    | Required | Description                        |
| ----------- | :------: | ---------------------------------- |
| `email`     |    ✅    | Customer email address             |
| `amount`    |    ✅    | Amount in the lowest currency unit |
| `publicKey` |    ✅    | Your Paystack public key           |
| `reference` |    ✅    | Unique payment reference           |
| `currency`  |    ❌    | Currency code                      |
| `label`     |    ❌    | Label displayed on checkout        |
| `metadata`  |    ❌    | Additional transaction metadata    |
| `channels`  |    ❌    | Allowed payment channels           |
| `split`     |    ❌    | Split payment configuration        |

---

# Testing

Use your **Paystack Test Public Key** while developing.

Before deploying your application, replace it with your **Live Public Key**.

---

# Documentation

For more information about Paystack Inline, visit:

https://paystack.com/docs/payments/accept-payments/

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "Add my feature"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

---

# Roadmap

- React 19 improvements
- Improved TypeScript typings
- Better examples
- Additional customization options
- More comprehensive tests

---

# Credits

This project is based on the original work by **Ayeni Olusegun**.

---

# License

Licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
