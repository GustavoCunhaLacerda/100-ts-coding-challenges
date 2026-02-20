import React, { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function DataFetcher() {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState<string | null>(null);

  function simulate() {
    setStatus("loading");
    setTimeout(() => {
      if (Math.random() > 0.3) {
        setData("User data loaded successfully");
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1000);
  }

  return (
    <div>
      <button onClick={simulate}>Fetch Data</button>
      {status === "idle" && <p>Press the button to fetch data.</p>}
      {status === "loading" && (
        <div>
          <div className="spinner" />
          <p>Loading...</p>
        </div>
      )}
      {status === "success" && (
        <div>
          {data !== null ? (
            <div>
              {data !== undefined ? (
                <p style={{ color: "green" }}>{data}</p>
              ) : (
                <p>No data</p>
              )}
            </div>
          ) : (
            <p>Empty</p>
          )}
        </div>
      )}
      {status === "error" && (
        <div>
          {true && (
            <p style={{ color: "red" }}>Something went wrong. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
}
