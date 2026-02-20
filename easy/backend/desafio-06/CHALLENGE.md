# Desafio 06: Desestruturação e Parâmetros Padrão

- **Caminho do Ambiente:** `/easy/backend/desafio-06/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** ES6+ — Desestruturação / Default Parameters
- **Arquivos do Ambiente:** `notification.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`notification.ts` acessa propriedades de objetos via `options.x` repetidamente e usa operadores ternários verbosos para definir valores padrão. O código é funcional, mas desnecessariamente prolixo — cada função tem um bloco de atribuições que não agrega lógica.

## Missão

Refatore usando desestruturação de parâmetros com valores padrão diretamente na assinatura das funções. Elimine todas as atribuições redundantes no corpo.

## Critérios de Avaliação

- [ ] Desestruturação feita diretamente no parâmetro da função
- [ ] Valores padrão definidos na assinatura, não no corpo
- [ ] Nenhuma atribuição redundante no corpo da função
- [ ] Comportamento idêntico ao original
- [ ] Código compila sem erros
