# Desafio 66: Render Props Pattern

- **Caminho do Ambiente:** `/hard/frontend/desafio-66/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Design Patterns React — Render Props
- **Arquivos do Ambiente:** `MouseTracker.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`MouseTracker.tsx` renderiza uma UI hardcoded para exibir coordenadas do mouse. A lógica de rastreamento não pode ser reutilizada para renderizar outros elementos (ex: um tooltip que segue o cursor, ou um elemento que se move com o mouse).

```tsx
import React, { useState } from "react";

export default function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div style={{ height: "100vh" }} onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <p>Mouse position: {pos.x}, {pos.y}</p>
      {/* UI hardcoded — não reutilizável */}
    </div>
  );
}
```

## Missão

Refatore para o padrão Render Props: `MouseTracker` deve aceitar uma prop `render: (pos: { x: number; y: number }) => ReactNode` e delegar a renderização para o consumidor.

## Critérios de Avaliação

- [ ] `MouseTracker` aceita prop `render` (ou `children` como função)
- [ ] `MouseTracker` não renderiza nenhuma UI própria — apenas chama `render(pos)`
- [ ] Demonstração de dois usos diferentes do mesmo `MouseTracker`
- [ ] Lógica de rastreamento encapsulada e reutilizável
- [ ] Código compila sem erros

---

# Desafio 67: Higher-Order Component (HOC)

- **Caminho do Ambiente:** `/hard/frontend/desafio-67/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Design Patterns React — HOC / withAuth
- **Arquivos do Ambiente:** `pages.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`pages.tsx` tem verificação de autenticação duplicada em cada componente de página protegida. Adicionar uma nova página protegida exige copiar o mesmo bloco de verificação.

```tsx
import React from "react";
const useAuth = () => ({ user: null as { name: string } | null, loading: false });

export function DashboardPage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Dashboard for {user.name}</div>;
}

export function ProfilePage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Profile of {user.name}</div>;
}

export function SettingsPage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Settings for {user.name}</div>;
}
```

## Missão

Crie um HOC `withAuth<P>(Component: React.ComponentType<P>)` que encapsula a lógica de autenticação. As páginas devem ser componentes simples sem lógica de auth.

## Critérios de Avaliação

- [ ] HOC `withAuth` genérico implementado com TypeScript generics
- [ ] Páginas não contêm nenhuma lógica de autenticação
- [ ] HOC preserva os tipos das props do componente envolvido
- [ ] `displayName` definido no HOC para melhor debugging
- [ ] Comportamento idêntico ao original

---

# Desafio 68: useMemo e useCallback — Otimização Real

- **Caminho do Ambiente:** `/hard/frontend/desafio-68/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** React Performance — useMemo / useCallback
- **Arquivos do Ambiente:** `ExpensiveList.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`ExpensiveList.tsx` recalcula uma lista filtrada e ordenada a cada render, mesmo quando os dados não mudaram. Funções de callback são recriadas a cada render, causando re-renders desnecessários em componentes filhos memoizados.

```tsx
import React, { useState } from "react";

const data = Array.from({ length: 10_000 }, (_, i) => ({ id: i, value: Math.random() * 1000, label: `Item ${i}` }));

export default function ExpensiveList() {
  const [filter, setFilter] = useState("");
  const [multiplier, setMultiplier] = useState(1);

  // Recalculado a cada render — mesmo quando filter não mudou
  const filtered = data
    .filter((d) => d.label.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.value - b.value)
    .slice(0, 100);

  // Recriada a cada render — causa re-render de ItemRow mesmo com React.memo
  const handleClick = (id: number) => console.log(`Clicked ${id} with multiplier ${multiplier}`);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <input type="number" value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))} />
      {filtered.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.label}: {(item.value * multiplier).toFixed(2)}
        </div>
      ))}
    </div>
  );
}
```

## Missão

Aplique `useMemo` para a lista filtrada e `useCallback` para o handler. Envolva o item de lista em `React.memo`. Meça a diferença de performance com React DevTools Profiler.

## Critérios de Avaliação

- [ ] `filtered` calculado com `useMemo([filter])` — não recalcula quando `multiplier` muda
- [ ] `handleClick` estabilizado com `useCallback([multiplier])`
- [ ] Componente `ItemRow` extraído e envolvido com `React.memo`
- [ ] `ItemRow` não re-renderiza quando `filter` muda (apenas quando `multiplier` muda)
- [ ] Código compila sem erros

---

# Desafio 69: React.memo — Prevenção de Re-renders

- **Caminho do Ambiente:** `/hard/frontend/desafio-69/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** React Performance — React.memo / Shallow Comparison
- **Arquivos do Ambiente:** `Dashboard.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Dashboard.tsx` tem componentes filhos que re-renderizam desnecessariamente quando o estado do pai muda, mesmo que as props deles não tenham mudado. O problema é agravado por objetos e funções criados inline nas props.

```tsx
import React, { useState } from "react";

function StatsCard({ title, value, color }: { title: string; value: number; color: string }) {
  console.log(`StatsCard ${title} rendered`);
  return <div style={{ color }}><h3>{title}</h3><p>{value}</p></div>;
}

function Chart({ data }: { data: number[] }) {
  console.log("Chart rendered");
  return <div>Chart: {data.join(", ")}</div>;
}

export default function Dashboard() {
  const [tick, setTick] = useState(0);
  const chartData = [10, 20, 30, 40, 50]; // Novo array a cada render

  return (
    <div>
      <button onClick={() => setTick((t) => t + 1)}>Refresh ({tick})</button>
      <StatsCard title="Revenue" value={42000} color="#28a745" />
      <StatsCard title="Orders" value={1337} color="#007bff" />
      <Chart data={chartData} />
    </div>
  );
}
```

## Missão

Aplique `React.memo` nos componentes filhos. Corrija os problemas de referência (array inline, objeto inline) que impedem `React.memo` de funcionar corretamente.

## Critérios de Avaliação

- [ ] `StatsCard` e `Chart` envolvidos com `React.memo`
- [ ] `chartData` estabilizado com `useMemo` ou movido para fora do componente
- [ ] Clicar em "Refresh" não re-renderiza `StatsCard` nem `Chart`
- [ ] `console.log` nos filhos não aparece ao clicar em "Refresh"
- [ ] Código compila sem erros

---

# Desafio 70: Virtualização de Lista Longa

- **Caminho do Ambiente:** `/hard/frontend/desafio-70/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Performance UI — Virtualização / react-window
- **Arquivos do Ambiente:** `BigList.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`BigList.tsx` renderiza 50.000 itens no DOM simultaneamente. O scroll é lento, a memória explode, e o tempo de renderização inicial é de vários segundos.

```tsx
import React from "react";

const items = Array.from({ length: 50_000 }, (_, i) => ({ id: i, name: `Item ${i}`, value: Math.random() * 1000 }));

export default function BigList() {
  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      {items.map((item) => (
        <div key={item.id} style={{ height: 50, display: "flex", alignItems: "center", borderBottom: "1px solid #eee", padding: "0 16px" }}>
          <span>{item.name}</span>
          <span style={{ marginLeft: "auto" }}>{item.value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
```

## Missão

Implemente virtualização usando `react-window`. Apenas os itens visíveis devem ser renderizados no DOM.

## Critérios de Avaliação

- [ ] `react-window` instalado e usado com `FixedSizeList`
- [ ] Apenas ~15 itens renderizados no DOM em qualquer momento
- [ ] Scroll suave com 50.000 itens
- [ ] Aparência visual idêntica ao original
- [ ] Código compila sem erros

---

# Desafio 71: Code Splitting com React.lazy

- **Caminho do Ambiente:** `/hard/frontend/desafio-71/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Performance / Bundle — React.lazy / Suspense
- **Arquivos do Ambiente:** `App.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`App.tsx` importa todos os componentes de página de forma estática. O bundle inicial inclui código de páginas que o usuário pode nunca visitar (ex: AdminPanel, Reports, Settings).

```tsx
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AdminPanel from "./AdminPanel";
import Reports from "./Reports";
import Settings from "./Settings";

export default function App() {
  const [page, setPage] = useState<"dashboard" | "admin" | "reports" | "settings">("dashboard");
  return (
    <div>
      <nav>
        {(["dashboard", "admin", "reports", "settings"] as const).map((p) => (
          <button key={p} onClick={() => setPage(p)}>{p}</button>
        ))}
      </nav>
      {page === "dashboard" && <Dashboard />}
      {page === "admin" && <AdminPanel />}
      {page === "reports" && <Reports />}
      {page === "settings" && <Settings />}
    </div>
  );
}
```

## Missão

Converta todos os imports de página para `React.lazy`. Envolva com `Suspense` com fallback de loading. Cada página deve ser um chunk separado no bundle.

## Critérios de Avaliação

- [ ] Todos os imports de página convertidos para `React.lazy`
- [ ] `Suspense` com fallback adequado envolvendo as páginas
- [ ] Bundle inicial não inclui código das páginas lazy
- [ ] Navegação entre páginas mostra o fallback de loading
- [ ] Código compila sem erros

---

# Desafio 72: Formulário Multi-Step com Máquina de Estados

- **Caminho do Ambiente:** `/hard/frontend/desafio-72/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** XState / Máquina de Estados Finitos
- **Arquivos do Ambiente:** `WizardForm.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`WizardForm.tsx` gerencia transições de step com lógica imperativa em funções `next()` e `back()`. Estados inválidos são possíveis (ex: ir para o step 3 sem completar o step 1). Não há como visualizar ou testar as transições de estado isoladamente.

```tsx
import React, { useState } from "react";
type Step = 1 | 2 | 3 | 4;
export default function WizardForm() {
  const [step, setStep] = useState<Step>(1);
  const [completed, setCompleted] = useState<Set<Step>>(new Set());
  function next() {
    if (step < 4) { setCompleted((c) => new Set([...c, step])); setStep((s) => (s + 1) as Step); }
  }
  function back() { if (step > 1) setStep((s) => (s - 1) as Step); }
  return (
    <div>
      <p>Step {step} of 4</p>
      <button onClick={back} disabled={step === 1}>Back</button>
      <button onClick={next} disabled={step === 4}>Next</button>
    </div>
  );
}
```

## Missão

Implemente a máquina de estados com XState. Defina estados, transições e guards explicitamente. A máquina deve ser a única fonte de verdade para transições válidas.

## Critérios de Avaliação

- [ ] XState instalado e máquina de estados definida
- [ ] Estados e transições explicitamente declarados
- [ ] Guards impedem transições inválidas (ex: não pode avançar sem preencher o step atual)
- [ ] Máquina testável isoladamente sem React
- [ ] Comportamento idêntico ao original

---

# Desafio 73: Design System — Tokens e Variantes

- **Caminho do Ambiente:** `/hard/frontend/desafio-73/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Design System — Design Tokens / CVA
- **Arquivos do Ambiente:** `components.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`components.tsx` tem múltiplos componentes com valores de design hardcoded (cores, espaçamentos, border-radius) duplicados. Mudar a cor primária exige buscar e substituir em dezenas de lugares.

```tsx
import React from "react";
export function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <button onClick={onClick} style={{ background: "#007bff", color: "#fff", padding: "8px 16px", borderRadius: 4, border: "none" }}>{children}</button>;
}
export function DangerButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <button onClick={onClick} style={{ background: "#dc3545", color: "#fff", padding: "8px 16px", borderRadius: 4, border: "none" }}>{children}</button>;
}
export function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#fff", border: "1px solid #dee2e6", borderRadius: 8, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>{children}</div>;
}
```

## Missão

Crie um arquivo `tokens.ts` com design tokens tipados. Use `class-variance-authority` (CVA) para definir variantes de componentes de forma type-safe.

## Critérios de Avaliação

- [ ] `tokens.ts` com cores, espaçamentos e border-radius como constantes tipadas
- [ ] CVA instalado e usado para variantes de `Button`
- [ ] Nenhum valor de design hardcoded nos componentes
- [ ] Mudar a cor primária em `tokens.ts` reflete em todos os componentes
- [ ] Código compila sem erros

---

# Desafio 74: Testes Unitários de Custom Hook

- **Caminho do Ambiente:** `/hard/frontend/desafio-74/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Testing — React Testing Library / renderHook
- **Arquivos do Ambiente:** `useCart.ts`, `useCart.test.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`useCart.ts` é um custom hook sem testes. O hook gerencia adição, remoção, atualização de quantidade e cálculo de total. Bugs em qualquer operação só são descobertos manualmente.

```ts
import { useState } from "react";
type CartItem = { id: string; name: string; price: number; qty: number };
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (item: Omit<CartItem, "qty">) => setItems((prev) => {
    const existing = prev.find((i) => i.id === item.id);
    if (existing) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
    return [...prev, { ...item, qty: 1 }];
  });
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) => setItems((prev) => qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => i.id === id ? { ...i, qty } : i));
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  return { items, addItem, removeItem, updateQty, total, itemCount };
}
```

## Missão

Escreva testes unitários completos para `useCart` usando `@testing-library/react` e `renderHook`. Cubra todos os casos de uso e edge cases.

## Critérios de Avaliação

- [ ] Cobertura de todos os métodos: `addItem`, `removeItem`, `updateQty`
- [ ] Teste de incremento de quantidade ao adicionar item existente
- [ ] Teste de remoção automática quando `qty <= 0`
- [ ] Teste de cálculo correto de `total` e `itemCount`
- [ ] Todos os testes passam com `npm test`

---

# Desafio 75: Testes de Integração de Componente

- **Caminho do Ambiente:** `/hard/frontend/desafio-75/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Testing — React Testing Library / MSW / Integração
- **Arquivos do Ambiente:** `LoginForm.tsx`, `LoginForm.test.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`LoginForm.tsx` é um formulário de login com validação, chamada de API e redirecionamento. Não há testes. Bugs de integração (ex: formulário submete com campos vazios, erro de API não exibido) só são descobertos em produção.

```tsx
import React, { useState } from "react";
export default function LoginForm({ onSuccess }: { onSuccess: (token: string) => void }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); const [loading, setLoading] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError(null);
    if (!email || !password) { setError("All fields required"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      if (!res.ok) { setError("Invalid credentials"); return; }
      const { token } = await res.json();
      onSuccess(token);
    } catch { setError("Network error"); } finally { setLoading(false); }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" aria-label="Password" />
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={loading}>{loading ? "Loading..." : "Login"}</button>
    </form>
  );
}
```

## Missão

Escreva testes de integração usando `@testing-library/react` e `msw` para mockar a API. Teste o fluxo completo: validação, loading state, sucesso e erro.

## Critérios de Avaliação

- [ ] MSW configurado para mockar `/api/auth/login`
- [ ] Teste: submissão com campos vazios exibe erro de validação
- [ ] Teste: loading state exibido durante a requisição
- [ ] Teste: sucesso chama `onSuccess` com o token
- [ ] Teste: erro 401 exibe "Invalid credentials"
- [ ] Todos os testes passam com `npm test`
