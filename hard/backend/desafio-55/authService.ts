import crypto from "crypto";

// Todas as dependências instanciadas internamente — impossível testar
export class AuthService {
  // Dependências hardcoded
  private readonly jwtSecret = "super-secret-key-hardcoded";
  private readonly tokenExpiry = 3600;

  async login(email: string, password: string): Promise<string> {
    // Simula busca no banco — acoplado diretamente
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    if (user.password !== hashedPassword) throw new Error("Invalid password");

    return this.generateToken(user.id);
  }

  private async findUserByEmail(email: string): Promise<{ id: string; password: string } | null> {
    // Acoplado ao banco de dados diretamente
    console.log(`DB query: SELECT * FROM users WHERE email = '${email}'`);
    return { id: "user-123", password: crypto.createHash("sha256").update("password123").digest("hex") };
  }

  private generateToken(userId: string): string {
    const payload = { userId, exp: Date.now() + this.tokenExpiry * 1000 };
    return Buffer.from(JSON.stringify(payload)).toString("base64");
  }

  verifyToken(token: string): { userId: string } {
    const payload = JSON.parse(Buffer.from(token, "base64").toString());
    if (payload.exp < Date.now()) throw new Error("Token expired");
    return { userId: payload.userId };
  }
}
