import React, { useState } from "react";

type Step = "personal" | "address" | "payment" | "review";

export default function MultiStepForm() {
  const [step, setStep] = useState<Step>("personal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validatePersonal() {
    const e: Record<string, string> = {};
    if (!name) e.name = "Required";
    if (!email || !email.includes("@")) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateAddress() {
    const e: Record<string, string> = {};
    if (!street) e.street = "Required";
    if (!city) e.city = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === "personal" && validatePersonal()) setStep("address");
    else if (step === "address" && validateAddress()) setStep("payment");
    else if (step === "payment") setStep("review");
  }

  function back() {
    if (step === "address") setStep("personal");
    else if (step === "payment") setStep("address");
    else if (step === "review") setStep("payment");
  }

  return (
    <div>
      <p>Step: {step}</p>
      {step === "personal" && (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          {errors.name && <span>{errors.name}</span>}
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          {errors.email && <span>{errors.email}</span>}
        </div>
      )}
      {step === "address" && (
        <div>
          <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
          {errors.street && <span>{errors.street}</span>}
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
          {errors.city && <span>{errors.city}</span>}
        </div>
      )}
      {step === "payment" && (
        <div>
          <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card number" />
          <input value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} placeholder="Name on card" />
        </div>
      )}
      {step === "review" && (
        <div>
          <p>{name} / {email}</p>
          <p>{street}, {city}</p>
          <p>Card: **** {cardNumber.slice(-4)}</p>
        </div>
      )}
      <button onClick={back} disabled={step === "personal"}>Back</button>
      <button onClick={next} disabled={step === "review"}>Next</button>
    </div>
  );
}
