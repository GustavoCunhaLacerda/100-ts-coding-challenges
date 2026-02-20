# Desafio 43: Prop Drilling Profundo — Context API

- **Caminho do Ambiente:** `/medium/frontend/desafio-43/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Context API / Provider Pattern
- **Arquivos do Ambiente:** `App.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`App.tsx` passa `theme`, `user` e `onToggleTheme` por 4 níveis de componentes intermediários. `Layout` e `Sidebar` não usam essas props diretamente — apenas as repassam. Adicionar um novo dado global exige modificar toda a cadeia.

## Missão

Crie `ThemeContext` e `UserContext` com seus respectivos providers. Componentes que precisam dos dados devem consumi-los diretamente via `useContext`, sem receber props intermediárias.

## Critérios de Avaliação

- [ ] `ThemeContext` criado com `createContext` e tipado corretamente
- [ ] `UserContext` criado com `createContext` e tipado corretamente
- [ ] Componentes intermediários (`Layout`, `Sidebar`) não recebem props de theme/user
- [ ] `Avatar`, `NavItem`, `TopBar` consomem os contextos diretamente
- [ ] Custom hooks `useTheme()` e `useUser()` criados para encapsular o `useContext`
- [ ] Comportamento idêntico ao original
