// Cálculos caros repetidos sem cache
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Chamada repetida sem cache — recalcula toda vez
export function getPrimesUpTo(limit: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

// Função de formatação cara chamada em loop sem cache
export function formatReport(items: { id: number; value: number; category: string }[]): string[] {
  return items.map((item) => {
    // Simula formatação cara
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(item.value);
    return `[${item.category}] #${item.id}: ${formatted}`;
  });
}
