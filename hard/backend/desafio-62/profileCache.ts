// Race condition: múltiplas chamadas concorrentes podem sobrescrever estado incorretamente
export class UserProfileCache {
  private cache = new Map<string, { data: object; timestamp: number }>();
  private loading = new Set<string>();

  async getProfile(userId: string): Promise<object> {
    const cached = this.cache.get(userId);
    if (cached && Date.now() - cached.timestamp < 60_000) {
      return cached.data;
    }

    // Bug: sem verificar se já está carregando — múltiplas chamadas simultâneas
    // para o mesmo userId disparam múltiplos fetches
    if (this.loading.has(userId)) {
      // Tenta aguardar, mas de forma incorreta
      await new Promise((r) => setTimeout(r, 100));
      return this.getProfile(userId); // Recursão potencialmente infinita
    }

    this.loading.add(userId);
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();
      this.cache.set(userId, { data, timestamp: Date.now() });
      return data;
    } finally {
      this.loading.delete(userId);
    }
  }
}
