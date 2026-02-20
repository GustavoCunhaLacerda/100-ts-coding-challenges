import React, { useState } from "react";

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    setLoading(true);
    // Simula chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Payment successful!");
  }

  return (
    // Problema: botão não é desabilitado durante loading, permitindo cliques duplos
    // Problema: nenhum feedback visual de loading
    <button onClick={handlePayment}>
      Pay Now
    </button>
  );
}
