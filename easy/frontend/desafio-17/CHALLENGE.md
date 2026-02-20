# Desafio 17: Renderização Condicional Limpa

- **Caminho do Ambiente:** `/easy/frontend/desafio-17/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — JSX / Renderização Condicional
- **Arquivos do Ambiente:** `DataFetcher.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`DataFetcher` tem renderização condicional redundante e aninhada: `{data !== null ? (data !== undefined ? ... : ...) : ...}` e `{true && ...}`. O JSX está inflado com verificações desnecessárias que obscurecem a intenção real.

## Missão

Simplifique a renderização condicional eliminando verificações redundantes e usando os padrões mais limpos para cada caso (`&&`, ternário, early return por status).

## Critérios de Avaliação

- [ ] Nenhuma verificação redundante (`{true && ...}`, duplo null-check)
- [ ] Cada estado (`idle`, `loading`, `success`, `error`) renderiza exatamente o que deve
- [ ] JSX limpo e sem aninhamento desnecessário
- [ ] Comportamento visual idêntico ao original
- [ ] Código compila sem erros
