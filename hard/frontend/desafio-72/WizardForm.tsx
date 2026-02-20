import React, { useState } from "react";

type Step = 1 | 2 | 3 | 4;

const stepLabels: Record<Step, string> = {
  1: "Personal Info",
  2: "Address",
  3: "Payment",
  4: "Review",
};

export default function WizardForm() {
  const [step, setStep] = useState<Step>(1);
  const [completed, setCompleted] = useState<Set<Step>>(new Set());

  function next() {
    if (step < 4) {
      setCompleted((c) => new Set([...c, step]));
      setStep((s) => (s + 1) as Step);
    }
  }

  function back() {
    if (step > 1) setStep((s) => (s - 1) as Step);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <div key={s} style={{ padding: "4px 12px", background: s === step ? "#007bff" : completed.has(s) ? "#28a745" : "#eee", color: s === step || completed.has(s) ? "#fff" : "#333", borderRadius: 4 }}>
            {stepLabels[s]}
          </div>
        ))}
      </div>
      <p>Current step: {stepLabels[step]}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={back} disabled={step === 1}>Back</button>
        <button onClick={next} disabled={step === 4}>{step === 3 ? "Submit" : "Next"}</button>
      </div>
    </div>
  );
}
