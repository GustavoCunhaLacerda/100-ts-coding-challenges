# Desafio 49: Error Boundaries para Isolamento de Falhas

- **Caminho do Ambiente:** `/medium/frontend/desafio-49/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Error Boundaries / Resiliência de UI
- **Arquivos do Ambiente:** `BlogPage.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`BlogPage` não tem Error Boundary. Quando `PostCard` lança um erro para o post de id 3, toda a página quebra e exibe uma tela em branco. Os outros 4 posts (que renderizariam corretamente) ficam inacessíveis.

## Missão

Implemente um componente `ErrorBoundary` (classe) e envolva cada `PostCard` individualmente. Um erro em um card deve exibir um fallback apenas para aquele card, sem afetar os demais.

## Critérios de Avaliação

- [ ] Componente `ErrorBoundary` implementado como classe com `componentDidCatch`
- [ ] Cada `PostCard` envolvido individualmente por `<ErrorBoundary>`
- [ ] Erro em um card exibe fallback apenas para aquele card
- [ ] Os outros cards continuam renderizando normalmente
- [ ] Fetch com tratamento de erro de rede adicionado
