import { useState } from "react";

interface RazorpayButtonProps {
  amount: number;
  currency: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  amount,
  currency,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency }),
    });

    const data = await res.json();
    const orderId = data.orderId;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency,
      order_id: orderId,
      name: "Your Company Name",
      description: "Product Purchase",
      handler: function (response: any) {
        alert(`Payment Successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Your Name",
        email: "your-email@example.com",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
    setIsLoading(false);
  };

  return (
    <button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? "Processing..." : "Checkout"}
    </button>
  );
};

export default RazorpayButton;
