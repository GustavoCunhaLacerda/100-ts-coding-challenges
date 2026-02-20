import React, { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!values.name) e.name = "Name is required";
    if (!values.email) e.email = "Email is required";
    if (!values.message) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (validate()) alert("Sent!");
  }

  return (
    // Problema: sem labels associados, sem aria-describedby, sem role nos erros
    <form onSubmit={handleSubmit}>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>
      <div>
        <span>Email</span>
        <input
          type="text"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <div>
        <span>Message</span>
        <textarea
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
