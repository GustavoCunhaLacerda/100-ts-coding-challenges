// Busca linear O(n) em dados que poderiam ser indexados
const productCatalog = Array.from({ length: 100_000 }, (_, i) => ({
  id: i + 1,
  sku: `SKU-${String(i + 1).padStart(6, "0")}`,
  name: `Product ${i + 1}`,
  price: Math.random() * 1000,
}));

export function findProductById(id: number) {
  for (const product of productCatalog) {
    if (product.id === id) return product;
  }
  return null;
}

export function findProductBySku(sku: string) {
  for (const product of productCatalog) {
    if (product.sku === sku) return product;
  }
  return null;
}

// Busca de interseção O(n²)
export function getCommonIds(listA: number[], listB: number[]): number[] {
  const result: number[] = [];
  for (const a of listA) {
    for (const b of listB) {
      if (a === b) result.push(a);
    }
  }
  return result;
}
