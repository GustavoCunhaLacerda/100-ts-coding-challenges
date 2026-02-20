# Desafio 33: Redução de Complexidade Ciclomática

- **Caminho do Ambiente:** `/medium/backend/desafio-33/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** Clean Code — Complexidade Ciclomática / Decomposição
- **Arquivos do Ambiente:** `loanEvaluator.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`evaluateLoan` tem complexidade ciclomática ~15: 8 `if/else` aninhados com múltiplos caminhos de retorno. Cobrir todos os caminhos com testes exigiria dezenas de casos. Adicionar uma nova regra de negócio exige entender toda a função antes de saber onde inserir.

## Missão

Decomponha `evaluateLoan` em funções menores com complexidade ciclomática máxima de 3 cada. Use o padrão de "regras de negócio como funções" — cada regra é uma função que retorna `null` (aprovado) ou uma string de motivo de rejeição.

## Critérios de Avaliação

- [ ] Nenhuma função com complexidade ciclomática acima de 4
- [ ] Cada regra de negócio é uma função separada e testável
- [ ] `evaluateLoan` orquestra as regras sem implementá-las
- [ ] Adicionar uma nova regra não exige modificar funções existentes
- [ ] Comportamento idêntico ao original para todos os casos
