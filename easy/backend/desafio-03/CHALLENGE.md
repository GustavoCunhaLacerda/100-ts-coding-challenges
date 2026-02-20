# Desafio 03: Extração de Constantes Mágicas

- **Caminho do Ambiente:** `/easy/backend/desafio-03/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Clean Code — Magic Numbers / Magic Strings
- **Arquivos do Ambiente:** `pricing.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`pricing.ts` está repleto de números literais (`2.75`, `500`, `0.08`, `0.05`, `0.12`, `30`, `0.85`, `0.92`, `0.97`) e strings literais (`"gold"`, `"silver"`, `"bronze"`) espalhados diretamente no corpo das funções. Qualquer alteração de regra de negócio exige uma caça ao número certo no meio do código.

## Missão

Extraia todos os literais para constantes nomeadas no topo do arquivo. Use `as const` onde apropriado para garantir tipos literais.

## Critérios de Avaliação

- [ ] Nenhum número literal no corpo das funções
- [ ] Nenhuma string literal de domínio no corpo das funções
- [ ] Constantes nomeadas com `SCREAMING_SNAKE_CASE`
- [ ] Constantes agrupadas semanticamente (ex: objeto `SHIPPING_RATES`, objeto `DISCOUNT_RATES`)
- [ ] Lógica inalterada e código compila sem erros
