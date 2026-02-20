import { Database } from "better-sqlite3";

// SQL inline acoplado diretamente ao serviço de negócio
export class ProductService {
  constructor(private db: Database) {}

  getActiveProducts() {
    return this.db.prepare("SELECT * FROM products WHERE active = 1 ORDER BY name").all();
  }

  getProductById(id: number) {
    return this.db.prepare("SELECT * FROM products WHERE id = ?").get(id);
  }

  createProduct(name: string, price: number, stock: number) {
    const stmt = this.db.prepare(
      "INSERT INTO products (name, price, stock, active) VALUES (?, ?, ?, 1)"
    );
    return stmt.run(name, price, stock).lastInsertRowid;
  }

  updateStock(id: number, delta: number) {
    this.db.prepare("UPDATE products SET stock = stock + ? WHERE id = ?").run(delta, id);
  }

  deactivateProduct(id: number) {
    this.db.prepare("UPDATE products SET active = 0 WHERE id = ?").run(id);
  }

  getLowStockProducts(threshold: number) {
    return this.db
      .prepare("SELECT * FROM products WHERE stock <= ? AND active = 1")
      .all(threshold);
  }
}
