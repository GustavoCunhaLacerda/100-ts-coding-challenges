# 🧩 Coding Challenges — Trilha de 100 Desafios

> Trilha estruturada de desafios práticos para aprimoramento de conceitos avançados de engenharia de software: Clean Code, POO, Design Patterns, Algoritmos e Arquitetura — cobrindo Backend e Frontend.

---

## Filosofia

Cada desafio segue a lógica de **puzzles táticos**: você recebe um ambiente funcional, mas com problemas estruturais reais — acoplamento, violações de SOLID, gargalos de performance, estado mal gerenciado. Sua missão é identificar e resolver o problema com precisão cirúrgica.

Não há uma única resposta correta. Os **Critérios de Avaliação** definem o que uma solução de qualidade deve conter.

---

## Estrutura de Diretórios

```
coding-challenges/
├── easy/
│   ├── backend/   (desafios 01–13)
│   └── frontend/  (desafios 14–25)
├── medium/
│   ├── backend/   (desafios 26–38)
│   └── frontend/  (desafios 39–50)
├── hard/
│   ├── backend/   (desafios 51–63)
│   └── frontend/  (desafios 64–75)
└── expert/
    ├── backend/   (desafios 76–88)
    └── frontend/  (desafios 89–100)
```

---

## Índice Completo

### 🟢 Fácil (25 desafios)

| # | Título | Área | Conceito |
|---|--------|------|----------|
| 01 | Tipagem Explícita em Funções Utilitárias | Backend | TypeScript Básico |
| 02 | Nomeação Semântica de Variáveis | Backend | Clean Code — Naming |
| 03 | Extração de Constantes Mágicas | Backend | Clean Code — Magic Numbers |
| 04 | Guard Clauses vs. Nested Ifs | Backend | Clean Code — Early Return |
| 05 | Funções Puras e Efeitos Colaterais | Backend | Programação Funcional |
| 06 | Desestruturação e Parâmetros Padrão | Backend | ES6+ / Legibilidade |
| 07 | Encadeamento Opcional e Nullish Coalescing | Backend | Defensive Programming |
| 08 | Array Methods vs. Loops Imperativos | Backend | Programação Funcional |
| 09 | Tratamento de Erros com Try/Catch Semântico | Backend | Error Handling |
| 10 | Módulos e Exportações Organizadas | Backend | Modularização |
| 11 | Tipagem de Objetos com Interface vs. Type | Backend | TypeScript — Tipos |
| 12 | Imutabilidade com Spread e Object.freeze | Backend | Imutabilidade |
| 13 | Promises vs. Async/Await Legível | Backend | Assincronismo |
| 14 | Componente com Props Mal Tipadas | Frontend | React + TypeScript |
| 15 | Extração de Componente de Lista | Frontend | Componentização |
| 16 | Evento de Formulário Sem Controlled Component | Frontend | React — Controlled Inputs |
| 17 | Renderização Condicional Limpa | Frontend | React — JSX |
| 18 | Prop Drilling de Um Nível | Frontend | React — Props |
| 19 | Estilização Inline vs. CSS Modules | Frontend | CSS Modules |
| 20 | useEffect com Dependências Incorretas | Frontend | React Hooks |
| 21 | Key Prop em Listas Dinâmicas | Frontend | React — Reconciliação |
| 22 | Componente de Botão Reutilizável | Frontend | Componentização |
| 23 | Feedback Visual de Loading State | Frontend | React — Estado Local |
| 24 | Acessibilidade em Formulário Simples | Frontend | A11y / Semântica HTML |
| 25 | Formatação de Datas sem Biblioteca | Frontend | Internacionalização |

### 🟡 Médio (25 desafios)

| # | Título | Área | Conceito |
|---|--------|------|----------|
| 26 | Função Deus — Extração de Responsabilidades | Backend | SRP / Clean Code |
| 27 | Classe com Múltiplas Responsabilidades | Backend | SRP |
| 28 | Validação Acoplada à Lógica de Negócio | Backend | Separação de Camadas |
| 29 | Substituição de Switch por Polimorfismo | Backend | OCP / Polimorfismo |
| 30 | Herança Profunda vs. Composição | Backend | Composição sobre Herança |
| 31 | Repositório com SQL Inline | Backend | Repository Pattern |
| 32 | Serviço com Dependência Hardcoded | Backend | DIP básico |
| 33 | Complexidade Ciclomática Alta | Backend | Clean Code — Complexidade |
| 34 | Recursão sem Caso Base Claro | Algoritmo | Recursão |
| 35 | Busca Linear vs. Busca Binária | Algoritmo | O(n) vs. O(log n) |
| 36 | Ordenação Ingênua vs. Eficiente | Algoritmo | Sorting Algorithms |
| 37 | Cache Simples com Memoização | Algoritmo | Memoização |
| 38 | Estrutura de Dados Inadequada | Algoritmo | Map vs. Array |
| 39 | useState Excessivo — Consolidação de Estado | Frontend | React — Estado |
| 40 | Lógica de Negócio dentro do Componente | Frontend | Separação de Concerns |
| 41 | Custom Hook para Fetch de Dados | Frontend | React Custom Hooks |
| 42 | Formulário Complexo sem useReducer | Frontend | useReducer |
| 43 | Prop Drilling Profundo | Frontend | Context API |
| 44 | Efeito Colateral em Render | Frontend | useEffect / Pureza |
| 45 | Componente de Modal Acoplado | Frontend | Composição de Componentes |
| 46 | Gerenciamento de Lista com Imutabilidade | Frontend | Imutabilidade no Estado |
| 47 | Debounce em Campo de Busca | Frontend | Performance / useMemo |
| 48 | Componente de Tabela Não Reutilizável | Frontend | Componentização Avançada |
| 49 | Tratamento de Erro em Fetch sem Boundary | Frontend | Error Boundaries |
| 50 | Animação com CSS vs. Framer Motion | Frontend | UX / Performance |

### 🔴 Difícil (25 desafios)

| # | Título | Área | Conceito |
|---|--------|------|----------|
| 51 | Implementar Strategy Pattern | Backend | Design Patterns |
| 52 | Implementar Observer Pattern | Backend | Design Patterns |
| 53 | Implementar Decorator Pattern | Backend | Design Patterns |
| 54 | Implementar Factory Method | Backend | Design Patterns |
| 55 | Injeção de Dependência Manual | Backend | DIP / IoC |
| 56 | Refatorar para Interface Segregation | Backend | ISP |
| 57 | Liskov Substitution Violation | Backend | LSP |
| 58 | Algoritmo de Grafos — BFS | Algoritmo | BFS / Grafos |
| 59 | Algoritmo de Grafos — DFS | Algoritmo | DFS / Grafos |
| 60 | Programação Dinâmica — Fibonacci | Algoritmo | DP / Memoização |
| 61 | Programação Dinâmica — Knapsack | Algoritmo | DP |
| 62 | Concorrência — Race Condition em Promises | Backend | Concorrência |
| 63 | Concorrência — Promise.all vs. Sequencial | Backend | Concorrência |
| 64 | Zustand vs. Context — Migração de Estado Global | Frontend | Estado Global |
| 65 | Compound Components Pattern | Frontend | Design Patterns React |
| 66 | Render Props Pattern | Frontend | Design Patterns React |
| 67 | Higher-Order Component (HOC) | Frontend | Design Patterns React |
| 68 | useMemo e useCallback — Otimização Real | Frontend | Performance React |
| 69 | React.memo — Prevenção de Re-renders | Frontend | Performance React |
| 70 | Virtualization de Lista Longa | Frontend | Performance / UI |
| 71 | Code Splitting com React.lazy | Frontend | Performance / Bundle |
| 72 | Formulário Multi-Step com Máquina de Estados | Frontend | XState / useReducer |
| 73 | Design System — Tokens e Variantes | Frontend | Design System |
| 74 | Testes Unitários de Hook Customizado | Frontend | Testing |
| 75 | Testes de Integração de Componente | Frontend | Testing |

### ⚫ Expert (25 desafios)

| # | Título | Área | Conceito |
|---|--------|------|----------|
| 76 | Arquitetura Hexagonal — Ports & Adapters | Backend | Arquitetura |
| 77 | CQRS — Separação de Leitura e Escrita | Backend | Arquitetura |
| 78 | Event Sourcing Simplificado | Backend | Arquitetura |
| 79 | Domain-Driven Design — Agregados | Backend | DDD |
| 80 | Domain-Driven Design — Value Objects | Backend | DDD |
| 81 | Refatoração de Código Legado Acoplado | Backend | Refatoração Profunda |
| 82 | Pipeline de Processamento com Chain of Responsibility | Backend | Design Patterns |
| 83 | Implementar um Mini ORM | Backend | Metaprogramação |
| 84 | Sistema de Plugins com Injeção de Dependência | Backend | IoC Container |
| 85 | Concorrência Avançada — Worker Threads | Backend | Concorrência |
| 86 | Rate Limiter com Token Bucket | Backend | Algoritmos / Sistemas |
| 87 | Cache com LRU (Least Recently Used) | Algoritmo | Estruturas de Dados |
| 88 | Trie para Autocompletar | Algoritmo | Estruturas de Dados |
| 89 | Micro-Frontend — Module Federation | Frontend | Arquitetura Frontend |
| 90 | Renderização Isomórfica (SSR) | Frontend | Next.js / SSR |
| 91 | Refatoração de Componente Legado de Classe | Frontend | Modernização React |
| 92 | Gerenciador de Estado Reativo do Zero | Frontend | Reatividade |
| 93 | Componente Headless Altamente Reutilizável | Frontend | Headless UI |
| 94 | Otimização de Bundle — Tree Shaking | Frontend | Performance / Build |
| 95 | Web Workers para Processamento Pesado | Frontend | Concorrência no Browser |
| 96 | Acessibilidade Avançada — ARIA Live Regions | Frontend | A11y Avançado |
| 97 | Internacionalização (i18n) Arquitetada | Frontend | i18n |
| 98 | Design de API de Componente — Fluent Interface | Frontend | API Design |
| 99 | Monorepo — Compartilhamento de Tipos | Backend/Frontend | Monorepo / Turborepo |
| 100 | Refatoração Full-Stack — Do Caos à Arquitetura | Backend/Frontend | Arquitetura Full |

---

## Como usar

```bash
# Clone o repositório
git clone <repo-url>
cd coding-challenges

# Navegue até o desafio desejado
cd easy/backend/desafio-01

# Instale as dependências (quando houver package.json)
npm install

# Leia o enunciado no arquivo CHALLENGE.md de cada pasta
```

---

## Convenções

- Cada pasta de desafio contém um `CHALLENGE.md` com o enunciado completo
- O código inicial problemático já está nos arquivos — **não altere o `CHALLENGE.md`**
- Crie sua solução em arquivos com sufixo `.solution` ou em uma pasta `solution/`
- Os critérios de avaliação são o contrato da sua entrega

---

*Trilha gerada com foco em estado da arte — Clean Code, SOLID, Design Patterns, Algoritmos e Arquitetura de Software.*
