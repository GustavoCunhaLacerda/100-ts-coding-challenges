# Desafio 40: Lógica de Negócio Fora do Componente

- **Caminho do Ambiente:** `/medium/frontend/desafio-40/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** Separação de Concerns — Lógica vs. Apresentação
- **Arquivos do Ambiente:** `ProductDashboard.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`ProductDashboard` mistura lógica de filtragem, ordenação e cálculo de métricas diretamente no corpo do componente. Essa lógica não pode ser testada sem renderizar o componente, e não pode ser reutilizada em outro componente.

## Missão

Extraia toda a lógica de negócio para funções puras em `productUtils.ts` e o fetch para um custom hook `useProducts`. O componente deve apenas orquestrar estado e renderizar.

## Critérios de Avaliação

- [ ] `filterAndSortProducts` extraída para `productUtils.ts` como função pura
- [ ] `calculateInventoryStats` extraída para `productUtils.ts` como função pura
- [ ] `useProducts` custom hook encapsula o fetch e o estado de loading
- [ ] `ProductDashboard` não contém lógica de filtragem ou cálculo
- [ ] Funções em `productUtils.ts` são testáveis sem React
- [ ] Comportamento idêntico ao original
