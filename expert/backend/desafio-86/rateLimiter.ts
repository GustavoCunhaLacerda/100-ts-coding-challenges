const counters = new Map<string, { count: number; resetAt: number }>();

export function isAllowed(clientId: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = counters.get(clientId);

  if (!entry || now > entry.resetAt) {
    counters.set(clientId, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}
