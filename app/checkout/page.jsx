"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { checkoutCart } from "@/lib/ecommerce";

export default function CheckoutPage() {
  const router = useRouter();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("cod");
  const [error, setError] = useState("");

  const handleOrder = () => {
    setError("");

    if (!address || !city || !pincode) {
      setError("Please fill all address fields");
      return;
    }

    if (!payment) {
      setError("Select payment method");
      return;
    }

    const result = checkoutCart();

    if (!result.success) {
      setError(result.message);
      return;
    }

    alert("🎉 Order placed successfully!");
    router.push("/orders"); // or home
  };

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

        {/* ADDRESS */}
        <div className="border p-6 space-y-4">
          <h2 className="font-semibold">Shipping Address</h2>

          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-3"
          />

          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border p-3"
          />

          <input
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full border p-3"
          />
        </div>

        {/* PAYMENT */}
        <div className="mt-6 border p-6 space-y-4">
          <h2 className="font-semibold">Payment Method</h2>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="card"
              checked={payment === "card"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Credit / Debit Card
          </label>
        </div>

        {/* ERROR */}
        {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}

        {/* BUTTON */}
        <button
          onClick={handleOrder}
          className="mt-6 w-full bg-black text-white py-3 uppercase text-sm"
        >
          Place Order
        </button>
      </section>

      <Footer />
    </main>
  );
}