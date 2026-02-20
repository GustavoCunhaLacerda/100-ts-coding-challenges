// Usando Array onde Map seria O(1)
type Session = { userId: string; token: string; expiresAt: number };

const activeSessions: Session[] = [];

export function createSession(userId: string, token: string): void {
  // Remove sessão anterior se existir — O(n)
  const idx = activeSessions.findIndex((s) => s.userId === userId);
  if (idx !== -1) activeSessions.splice(idx, 1);
  activeSessions.push({ userId, token, expiresAt: Date.now() + 3600_000 });
}

export function getSession(token: string): Session | undefined {
  // Busca linear O(n) em toda a lista
  return activeSessions.find((s) => s.token === token && s.expiresAt > Date.now());
}

export function invalidateSession(userId: string): void {
  // Busca linear + splice O(n)
  const idx = activeSessions.findIndex((s) => s.userId === userId);
  if (idx !== -1) activeSessions.splice(idx, 1);
}

export function cleanExpiredSessions(): void {
  // Percorre toda a lista — O(n)
  const now = Date.now();
  for (let i = activeSessions.length - 1; i >= 0; i--) {
    if (activeSessions[i].expiresAt <= now) activeSessions.splice(i, 1);
  }
}
