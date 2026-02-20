import crypto from "crypto";

// Função que faz tudo: valida, processa, persiste e notifica
export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  role: string;
}): Promise<{ success: boolean; message: string }> {
  // Validação
  if (!data.name || data.name.trim().length < 2) {
    return { success: false, message: "Name must be at least 2 characters" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, message: "Invalid email format" };
  }
  if (data.password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters" };
  }
  if (!["admin", "user", "moderator"].includes(data.role)) {
    return { success: false, message: "Invalid role" };
  }

  // Processamento
  const hashedPassword = crypto.createHash("sha256").update(data.password).digest("hex");
  const userId = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const userRecord = {
    id: userId,
    name: data.name.trim(),
    email: data.email.toLowerCase(),
    password: hashedPassword,
    role: data.role,
    createdAt,
    isActive: true,
  };

  // Persistência (simulada)
  console.log("Saving to DB:", userRecord);
  await new Promise((r) => setTimeout(r, 100));

  // Notificação (simulada)
  console.log(`Sending welcome email to ${userRecord.email}`);
  await new Promise((r) => setTimeout(r, 50));

  // Auditoria (simulada)
  console.log(`Audit log: user ${userId} created at ${createdAt}`);

  return { success: true, message: `User ${userRecord.name} registered successfully` };
}
