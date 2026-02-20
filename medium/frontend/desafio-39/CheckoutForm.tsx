import React, { useState } from "react";

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitSuccess(true);
    } catch {
      setSubmitError("Payment failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" />
      <input value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP" />
      <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card number" />
      <input value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} placeholder="Expiry" />
      <input value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} placeholder="CVV" />
      {submitError && <p style={{ color: "red" }}>{submitError}</p>}
      {submitSuccess && <p style={{ color: "green" }}>Order placed!</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Place Order"}
      </button>
    </form>
  );
}
