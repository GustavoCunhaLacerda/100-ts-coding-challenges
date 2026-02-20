import React, { useState } from "react";

let renderCount = 0;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  // Bug: efeito colateral (fetch) disparado diretamente no render, não em useEffect
  if (query.length > 2) {
    // Isso executa a cada render, incluindo renders causados por outros estados
    fetch(`/api/search?q=${query}`)
      .then((r) => r.json())
      .then((data) => setResults(data)); // Causa loop infinito de renders
  }

  // Bug: mutação de variável externa durante render
  renderCount++;
  console.log(`Render #${renderCount}`);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
