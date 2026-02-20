// Pub/sub manual verboso — sem reatividade automática
type Listener = () => void;

class Store<T> {
  private state: T;
  private listeners = new Set<Listener>();

  constructor(initial: T) { this.state = initial; }

  getState(): T { return this.state; }

  setState(updater: (prev: T) => T): void {
    this.state = updater(this.state);
    this.listeners.forEach((l) => l());
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

// Cada slice precisa de boilerplate repetitivo
export const counterStore = new Store({ count: 0 });
export const userStore = new Store<{ name: string; email: string } | null>(null);
export const themeStore = new Store<"light" | "dark">("light");

// Sem computed values automáticos — precisa calcular manualmente
export function getDoubleCount() {
  return counterStore.getState().count * 2;
}
