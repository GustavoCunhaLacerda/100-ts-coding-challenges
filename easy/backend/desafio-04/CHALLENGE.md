# Desafio 04: Guard Clauses vs. Nested Ifs

- **Caminho do Ambiente:** `/easy/backend/desafio-04/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Clean Code — Early Return / Guard Clauses
- **Arquivos do Ambiente:** `checkout.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`checkout.ts` contém uma função com 6 níveis de aninhamento de `if/else`. O código funciona corretamente, mas é difícil de ler, testar e manter. Adicionar uma nova condição exige entender toda a pirâmide antes de saber onde inserir o novo bloco.

## Missão

Refatore `processCheckout` usando guard clauses (early returns) para eliminar o aninhamento. O comportamento deve ser 100% idêntico ao original.

## Critérios de Avaliação

- [ ] Nenhum `if` aninhado além de 1 nível
- [ ] Condições de erro/borda retornam cedo no início da função
- [ ] O caminho feliz (happy path) fica no final, sem `else`
- [ ] Comportamento idêntico para todas as combinações de entrada
- [ ] Código compila sem erros
