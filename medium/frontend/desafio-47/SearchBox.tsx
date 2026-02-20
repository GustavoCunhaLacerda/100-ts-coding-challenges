import React, { useState, useEffect } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Sem debounce: dispara fetch a cada keystroke
  useEffect(() => {
    if (!query) { setResults([]); return; }
    setLoading(true);
    fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((data) => { setResults(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {loading && <p>Searching...</p>}
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
