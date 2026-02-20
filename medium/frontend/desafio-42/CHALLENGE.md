# Desafio 42: Formulário Multi-Step com useReducer

- **Caminho do Ambiente:** `/medium/frontend/desafio-42/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — useReducer / Máquina de Estados Simples
- **Arquivos do Ambiente:** `MultiStepForm.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`MultiStepForm` gerencia 8 `useState` separados para um formulário multi-step. As transições de step são controladas por lógica imperativa espalhada em `next()` e `back()`. Adicionar um novo step exige modificar múltiplas funções.

## Missão

Consolide todo o estado do formulário em um único `useReducer` com actions tipadas (`NEXT_STEP`, `PREV_STEP`, `UPDATE_FIELD`, `SET_ERRORS`). O reducer deve ser a única fonte de verdade para transições de estado.

## Critérios de Avaliação

- [ ] Um único `useReducer` gerencia todo o estado do formulário
- [ ] Actions tipadas com discriminated union
- [ ] Transições de step definidas no reducer, não em funções imperativas
- [ ] Validação por step implementada como funções puras
- [ ] Comportamento idêntico ao original
