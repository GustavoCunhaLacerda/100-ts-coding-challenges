import express from "express";
import { Pool } from "pg";

// Arquitetura em camadas acoplada — lógica de negócio misturada com HTTP e banco
const app = express();
const db = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  // Validação misturada com handler HTTP
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Lógica de negócio misturada com SQL
  const existing = await db.query("SELECT id FROM users WHERE email = $1", [email]);
  if (existing.rows.length > 0) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const hashedPassword = Buffer.from(password).toString("base64"); // Simulação
  const result = await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
    [name, email, hashedPassword]
  );

  // Notificação misturada com handler
  console.log(`Welcome email sent to ${email}`);

  res.status(201).json({ id: result.rows[0].id });
});

app.listen(3000);
