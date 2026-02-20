// Sem Decorator — funcionalidades transversais misturadas com lógica de negócio
export class UserService {
  async getUser(id: string): Promise<{ id: string; name: string }> {
    // Logging misturado
    console.log(`[${new Date().toISOString()}] getUser called with id=${id}`);
    const start = Date.now();

    // Validação misturada
    if (!id || id.trim() === "") throw new Error("Invalid user ID");

    // Lógica de negócio
    const user = { id, name: `User ${id}` };

    // Métricas misturadas
    console.log(`[${new Date().toISOString()}] getUser completed in ${Date.now() - start}ms`);

    return user;
  }

  async updateUser(id: string, data: { name: string }): Promise<void> {
    console.log(`[${new Date().toISOString()}] updateUser called with id=${id}`);
    const start = Date.now();

    if (!id || id.trim() === "") throw new Error("Invalid user ID");
    if (!data.name || data.name.trim() === "") throw new Error("Name is required");

    console.log(`Updating user ${id}:`, data);
    console.log(`[${new Date().toISOString()}] updateUser completed in ${Date.now() - start}ms`);
  }
}
