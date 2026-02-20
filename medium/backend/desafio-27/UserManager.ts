import fs from "fs";
import crypto from "crypto";

export class UserManager {
  private users: Array<{ id: string; name: string; email: string; password: string }> = [];
  private logFile = "app.log";

  // Responsabilidade 1: Autenticação
  authenticate(email: string, password: string): boolean {
    const hashed = crypto.createHash("sha256").update(password).digest("hex");
    return this.users.some((u) => u.email === email && u.password === hashed);
  }

  // Responsabilidade 2: CRUD de usuários
  createUser(name: string, email: string, password: string): string {
    const id = crypto.randomUUID();
    const hashed = crypto.createHash("sha256").update(password).digest("hex");
    this.users.push({ id, name, email, password: hashed });
    this.log(`User created: ${id}`);
    return id;
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((u) => u.id !== id);
    this.log(`User deleted: ${id}`);
  }

  // Responsabilidade 3: Persistência em arquivo
  save(): void {
    fs.writeFileSync("users.json", JSON.stringify(this.users, null, 2));
    this.log("Users saved to disk");
  }

  load(): void {
    if (fs.existsSync("users.json")) {
      this.users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    }
  }

  // Responsabilidade 4: Logging
  private log(message: string): void {
    const entry = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFileSync(this.logFile, entry);
  }

  // Responsabilidade 5: Relatórios
  getStats(): { total: number; emails: string[] } {
    return {
      total: this.users.length,
      emails: this.users.map((u) => u.email),
    };
  }
}
