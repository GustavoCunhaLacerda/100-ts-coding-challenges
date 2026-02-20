let totalSold = 0;
const auditLog: string[] = [];

type Product = { name: string; stock: number; price: number };

export function sellProduct(product: Product, qty: number): Product {
  product.stock -= qty;
  totalSold += qty * product.price;
  auditLog.push(`Sold ${qty} of ${product.name} at ${new Date().toISOString()}`);
  console.log(`Stock updated: ${product.stock}`);
  return product;
}
