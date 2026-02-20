# Desafio 89: Micro-Frontend — Module Federation

- **Caminho do Ambiente:** `/expert/frontend/desafio-89/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Arquitetura Frontend — Micro-Frontends / Module Federation
- **Arquivos do Ambiente:** `host/`, `remote-auth/`, `remote-products/`, `package.json`

## Cenário Inicial

`monolith.tsx` é uma aplicação React monolítica com três domínios distintos (Auth, Products, Dashboard) desenvolvidos e deployados juntos. Times diferentes precisam deployar de forma independente.

## Missão

Separe em três aplicações independentes usando Webpack Module Federation: `host` (shell), `remote-auth` e `remote-products`. O host deve carregar os remotes dinamicamente em runtime.

## Critérios de Avaliação

- [ ] Três aplicações Vite/Webpack independentes configuradas
- [ ] `remote-auth` expõe `LoginForm` via Module Federation
- [ ] `remote-products` expõe `ProductList` via Module Federation
- [ ] `host` carrega os remotes sem conhecer sua implementação interna
- [ ] Cada remote pode ser deployado independentemente
- [ ] Shared dependencies (React) não duplicadas no bundle

---

# Desafio 90: Renderização Isomórfica (SSR) com Next.js

- **Caminho do Ambiente:** `/expert/frontend/desafio-90/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Next.js — SSR / SSG / ISR / Streaming
- **Arquivos do Ambiente:** `pages/`, `app/`, `package.json`

## Cenário Inicial

`ClientOnlyPage.tsx` é uma página React que faz fetch no cliente com `useEffect`. Isso causa: flash de conteúdo vazio, SEO ruim (crawlers veem página vazia), e tempo de interação alto (usuário espera JS carregar + fetch completar).

```tsx
"use client";
import { useState, useEffect } from "react";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => { fetch("/api/products").then(r => r.json()).then(setProducts); }, []);
  if (!products.length) return <p>Loading...</p>;
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

## Missão

Migre para Next.js App Router com Server Components. Use `generateStaticParams` para páginas de produto individuais e ISR para revalidação automática.

## Critérios de Avaliação

- [ ] `ProductsPage` como Server Component (sem `"use client"`)
- [ ] Fetch feito no servidor — HTML pré-renderizado
- [ ] `generateStaticParams` para rotas de produto individuais
- [ ] `revalidate` configurado para ISR
- [ ] Streaming com `Suspense` para partes lentas da página
- [ ] SEO: meta tags geradas com `generateMetadata`

---

# Desafio 91: Refatoração de Componente Legado de Classe

- **Caminho do Ambiente:** `/expert/frontend/desafio-91/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Modernização React — Class Components → Hooks
- **Arquivos do Ambiente:** `LegacyDashboard.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`LegacyDashboard.tsx` é um componente de classe com 200+ linhas usando lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`), `this.setState`, e HOCs legados. Impossível usar hooks nele.

## Missão

Refatore para componente funcional com hooks equivalentes. Cada lifecycle method deve ser mapeado para o hook correto. Extraia lógica reutilizável em custom hooks.

## Critérios de Avaliação

- [ ] Nenhum `class`, `this`, `extends Component`
- [ ] `componentDidMount` → `useEffect(fn, [])`
- [ ] `componentDidUpdate` → `useEffect(fn, [deps])`
- [ ] `componentWillUnmount` → cleanup function no `useEffect`
- [ ] `this.setState` → `useState` ou `useReducer`
- [ ] Lógica de negócio extraída em custom hooks
- [ ] Comportamento idêntico ao original

---

# Desafio 92: Gerenciador de Estado Reativo do Zero

- **Caminho do Ambiente:** `/expert/frontend/desafio-92/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Reatividade — Signals / Observable State
- **Arquivos do Ambiente:** `store.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`store.ts` usa um padrão de pub/sub manual e verboso para notificar componentes de mudanças de estado. Adicionar um novo slice de estado exige boilerplate repetitivo.

## Missão

Implemente um sistema de estado reativo baseado em Signals (similar ao Preact Signals ou SolidJS): `signal(initialValue)` retorna um objeto com `value` getter/setter que notifica automaticamente os subscribers.

## Critérios de Avaliação

- [ ] `signal<T>(initial: T)` implementado com getter/setter
- [ ] `computed<T>(fn: () => T)` derivado de outros signals
- [ ] `effect(fn: () => void)` re-executa quando signals dependentes mudam
- [ ] Rastreamento automático de dependências (sem declaração manual)
- [ ] Hook `useSignal` para integração com React
- [ ] Implementação sem bibliotecas externas de reatividade

---

# Desafio 93: Componente Headless Altamente Reutilizável

- **Caminho do Ambiente:** `/expert/frontend/desafio-93/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Headless UI — Separação de Lógica e Apresentação
- **Arquivos do Ambiente:** `Select.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Select.tsx` é um componente de select customizado com lógica e apresentação acopladas. Não pode ser reutilizado com um design diferente sem duplicar toda a lógica de teclado, acessibilidade e estado.

## Missão

Refatore para o padrão Headless: `useSelect` hook com toda a lógica (keyboard navigation, ARIA, estado aberto/fechado), e componentes de apresentação separados que usam o hook.

## Critérios de Avaliação

- [ ] `useSelect` hook com toda a lógica de interação
- [ ] Navegação por teclado (↑↓ Enter Escape) implementada no hook
- [ ] ARIA attributes (`role="listbox"`, `aria-selected`, `aria-expanded`) no hook
- [ ] Componentes de apresentação são apenas JSX que consomem o hook
- [ ] Mesmo hook pode ser usado com dois designs completamente diferentes
- [ ] Acessível via teclado e leitor de tela

---

# Desafio 94: Otimização de Bundle — Tree Shaking

- **Caminho do Ambiente:** `/expert/frontend/desafio-94/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Performance / Build — Tree Shaking / Bundle Analysis
- **Arquivos do Ambiente:** `App.tsx`, `utils/index.ts`, `package.json`, `vite.config.ts`

## Cenário Inicial

`App.tsx` importa bibliotecas inteiras quando usa apenas uma função. `utils/index.ts` re-exporta tudo de forma que impede tree shaking. O bundle final tem 500KB quando deveria ter 50KB.

```ts
// Importa toda a lodash (70KB) para usar apenas uma função
import _ from "lodash";
const result = _.groupBy(items, "category");

// Importa toda a date-fns (200KB) para usar apenas format
import * as dateFns from "date-fns";
const formatted = dateFns.format(new Date(), "dd/MM/yyyy");
```

## Missão

Corrija todas as importações para serem tree-shakeable. Configure o Vite para análise de bundle. Reduza o bundle em pelo menos 70%.

## Critérios de Avaliação

- [ ] Importações named em vez de default para lodash e date-fns
- [ ] `utils/index.ts` refatorado para não bloquear tree shaking
- [ ] `rollup-plugin-visualizer` configurado para análise de bundle
- [ ] Bundle final reduzido em pelo menos 70%
- [ ] Funcionalidade idêntica ao original

---

# Desafio 95: Web Workers para Processamento Pesado

- **Caminho do Ambiente:** `/expert/frontend/desafio-95/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** Concorrência no Browser — Web Workers / Comlink
- **Arquivos do Ambiente:** `DataProcessor.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`DataProcessor.tsx` processa um CSV de 100.000 linhas no thread principal. Durante o processamento (~3 segundos), a UI congela completamente — scroll, animações e interações param.

```tsx
export default function DataProcessor() {
  const [result, setResult] = useState<ProcessedData | null>(null);
  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target?.result as string;
      // Bloqueia o thread principal por ~3 segundos
      const processed = parseAndProcessCSV(csv);
      setResult(processed);
    };
    reader.readAsText(file);
  }
  // ...
}
```

## Missão

Mova `parseAndProcessCSV` para um Web Worker. Use Comlink para comunicação type-safe entre o thread principal e o worker.

## Critérios de Avaliação

- [ ] `worker.ts` com `parseAndProcessCSV` exposto via Comlink
- [ ] Thread principal não bloqueia durante processamento
- [ ] Progress updates enviados do worker para a UI
- [ ] UI responsiva durante processamento (scroll, animações funcionam)
- [ ] Worker terminado após processamento para liberar recursos

---

# Desafio 96: Acessibilidade Avançada — ARIA Live Regions

- **Caminho do Ambiente:** `/expert/frontend/desafio-96/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** A11y Avançado — ARIA Live Regions / Focus Management
- **Arquivos do Ambiente:** `LiveDashboard.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`LiveDashboard.tsx` atualiza dados em tempo real (preços de ações, alertas de sistema) sem anunciar as mudanças para leitores de tela. Usuários com deficiência visual não sabem quando dados críticos mudam.

## Missão

Implemente ARIA Live Regions para anunciar mudanças críticas. Gerencie o foco corretamente em modais e notificações. Implemente um `ScreenReaderAnnouncer` reutilizável.

## Critérios de Avaliação

- [ ] `aria-live="polite"` para atualizações não urgentes
- [ ] `aria-live="assertive"` para alertas críticos
- [ ] `ScreenReaderAnnouncer` hook/componente reutilizável
- [ ] Foco retorna ao elemento trigger ao fechar modal
- [ ] Focus trap implementado dentro de modais
- [ ] Testado com VoiceOver ou NVDA

---

# Desafio 97: Internacionalização (i18n) Arquitetada

- **Caminho do Ambiente:** `/expert/frontend/desafio-97/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** i18n — react-i18next / Pluralização / Formatação
- **Arquivos do Ambiente:** `App.tsx`, `locales/`, `package.json`, `tsconfig.json`

## Cenário Inicial

`App.tsx` tem strings hardcoded em português. Adicionar inglês exigiria buscar e substituir centenas de strings. Datas, números e moedas são formatados sem considerar locale.

## Missão

Implemente i18n completo com `react-i18next`: extração de strings, pluralização, formatação de datas/números por locale, e lazy loading de traduções.

## Critérios de Avaliação

- [ ] `react-i18next` configurado com namespaces
- [ ] Todas as strings extraídas para arquivos de tradução (`pt-BR`, `en-US`)
- [ ] Pluralização correta (`1 item` vs `2 items`)
- [ ] Datas e números formatados com `Intl` baseado no locale ativo
- [ ] Lazy loading de traduções por namespace
- [ ] Troca de idioma sem reload da página

---

# Desafio 98: Design de API de Componente — Fluent Interface

- **Caminho do Ambiente:** `/expert/frontend/desafio-98/`
- **Nível:** Expert
- **Área:** Frontend
- **Conceito Foco:** API Design — Fluent Interface / Builder Pattern em React
- **Arquivos do Ambiente:** `QueryBuilder.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`QueryBuilder.tsx` tem uma API de props plana e verbosa para construir queries de dados. Com 15+ props, é difícil entender quais combinações são válidas e a ordem importa.

## Missão

Redesenhe a API usando o padrão Fluent Interface / Builder: `query().from("users").where("age", ">", 18).orderBy("name").limit(10).build()`. A API deve ser type-safe e guiar o desenvolvedor com autocomplete.

## Critérios de Avaliação

- [ ] API fluente com method chaining type-safe
- [ ] TypeScript garante que métodos obrigatórios sejam chamados
- [ ] Autocomplete funciona em cada etapa do builder
- [ ] `build()` retorna o tipo correto baseado nos métodos chamados
- [ ] Impossível construir query inválida em tempo de compilação

---

# Desafio 99: Monorepo — Compartilhamento de Tipos

- **Caminho do Ambiente:** `/expert/frontend/desafio-99/`
- **Nível:** Expert
- **Área:** Backend/Frontend
- **Conceito Foco:** Monorepo — Turborepo / Shared Types / tRPC
- **Arquivos do Ambiente:** `packages/`, `apps/`, `turbo.json`, `package.json`

## Cenário Inicial

`apps/api` e `apps/web` têm tipos duplicados: `User`, `Product`, `Order` definidos em ambos os projetos. Uma mudança no tipo `User` no backend exige atualização manual no frontend — e frequentemente fica dessincronizado.

## Missão

Configure um monorepo com Turborepo. Crie um pacote `@repo/types` compartilhado. Use tRPC para garantir type-safety end-to-end entre API e cliente sem duplicação de tipos.

## Critérios de Avaliação

- [ ] Turborepo configurado com `turbo.json`
- [ ] Pacote `@repo/types` com tipos compartilhados
- [ ] `apps/api` e `apps/web` importam de `@repo/types`
- [ ] tRPC configurado com router type-safe
- [ ] Mudança de tipo no backend causa erro de compilação no frontend automaticamente
- [ ] `turbo build` compila todos os pacotes na ordem correta

---

# Desafio 100: Refatoração Full-Stack — Do Caos à Arquitetura

- **Caminho do Ambiente:** `/expert/frontend/desafio-100/`
- **Nível:** Expert
- **Área:** Backend/Frontend
- **Conceito Foco:** Arquitetura Full-Stack — Refatoração Profunda / Estado da Arte
- **Arquivos do Ambiente:** `legacy/`, `package.json`

## Cenário Inicial

`legacy/` contém uma aplicação full-stack de e-commerce com todos os anti-patterns acumulados ao longo da trilha: componentes monolíticos, lógica de negócio no frontend, SQL inline no backend, sem testes, sem tipagem, estado global mal gerenciado, sem separação de camadas.

Este é o desafio final — uma refatoração completa aplicando tudo que foi aprendido.

## Missão

Refatore a aplicação completa aplicando:
- **Backend**: Arquitetura Hexagonal, DDD, CQRS, testes
- **Frontend**: Componentização, estado global com Zustand, React Query, testes
- **Shared**: Monorepo, tipos compartilhados, tRPC

## Critérios de Avaliação

- [ ] Backend com Arquitetura Hexagonal e use cases testáveis
- [ ] Frontend com componentes reutilizáveis e estado bem gerenciado
- [ ] Tipos compartilhados entre frontend e backend
- [ ] Cobertura de testes > 80% nas camadas de domínio e aplicação
- [ ] Zero `any` no TypeScript
- [ ] Performance: Lighthouse score > 90
- [ ] Acessibilidade: zero erros no axe-core
- [ ] Bundle otimizado com code splitting e tree shaking
