# Desafio 64: Migração de Context API para Zustand

- **Caminho do Ambiente:** `/hard/frontend/desafio-64/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Estado Global — Zustand / Performance de Re-renders
- **Arquivos do Ambiente:** `store.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`store.tsx` usa Context API com um único contexto para todo o estado da aplicação. Qualquer mudança (ex: `sidebarOpen`) re-renderiza **todos** os componentes que consomem o contexto — incluindo o carrinho e as notificações, que não mudaram.

## Missão

Migre para Zustand com stores separadas por domínio (`useUserStore`, `useCartStore`, `useNotificationStore`, `useUIStore`). Componentes devem re-renderizar apenas quando o slice de estado que consomem muda.

## Critérios de Avaliação

- [ ] Zustand instalado e configurado
- [ ] 4 stores separadas por domínio
- [ ] Cada store usa seletores para minimizar re-renders
- [ ] Componente que usa apenas `sidebarOpen` não re-renderiza quando o carrinho muda
- [ ] API pública idêntica à original (mesmas ações disponíveis)
- [ ] Código compila sem erros
