import React from "react";

export default function CheckoutPage() {
  return (
    <div>
      <button
        style={{ background: "#007bff", color: "#fff", padding: "8px 16px", border: "none", borderRadius: 4, cursor: "pointer" }}
        onClick={() => console.log("confirm")}
      >
        Confirm Order
      </button>

      <button
        style={{ background: "transparent", color: "#dc3545", padding: "8px 16px", border: "1px solid #dc3545", borderRadius: 4, cursor: "pointer" }}
        onClick={() => console.log("cancel")}
      >
        Cancel
      </button>

      <button
        style={{ background: "#6c757d", color: "#fff", padding: "8px 16px", border: "none", borderRadius: 4, cursor: "pointer", opacity: 0.65, pointerEvents: "none" }}
        disabled
      >
        Processing...
      </button>
    </div>
  );
}
