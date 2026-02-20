import React, { useState } from "react";

function parseAndProcessCSV(csv: string): { rows: number; columns: number; sum: number; avg: number } {
  const lines = csv.split("\n").filter(Boolean);
  const headers = lines[0].split(",");
  let sum = 0;
  let count = 0;

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    for (const val of values) {
      const num = parseFloat(val);
      if (!isNaN(num)) { sum += num; count++; }
    }
  }

  return { rows: lines.length - 1, columns: headers.length, sum, avg: count > 0 ? sum / count : 0 };
}

export default function DataProcessor() {
  const [result, setResult] = useState<ReturnType<typeof parseAndProcessCSV> | null>(null);
  const [processing, setProcessing] = useState(false);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setProcessing(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const csv = ev.target?.result as string;
      // Bloqueia o thread principal
      const processed = parseAndProcessCSV(csv);
      setResult(processed);
      setProcessing(false);
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFile} />
      {processing && <p>Processing... (UI is frozen)</p>}
      {result && (
        <div>
          <p>Rows: {result.rows}</p>
          <p>Columns: {result.columns}</p>
          <p>Sum: {result.sum.toFixed(2)}</p>
          <p>Average: {result.avg.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
