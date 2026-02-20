# Desafio 02: Nomeação Semântica de Variáveis

- **Caminho do Ambiente:** `/easy/backend/desafio-02/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Clean Code — Naming
- **Arquivos do Ambiente:** `order.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`order.ts` contém duas funções com nomes e variáveis completamente abreviados: `calc`, `chk`, `d`, `p`, `t`, `x`, `u`, `pwd`, `lst`, `f`. O código compila e funciona, mas é ilegível. Um novo desenvolvedor no time levaria minutos para entender o que cada função faz.

## Missão

Renomeie todas as variáveis, parâmetros e funções para que o código seja autoexplicativo, sem necessidade de comentários. Não altere a lógica.

## Critérios de Avaliação

- [ ] Nenhuma abreviação obscura nos identificadores
- [ ] Nomes de funções revelam intenção (ex: `calculateDiscountedTotal`, `isPrivilegedUser`)
- [ ] Nomes de variáveis revelam o que armazenam
- [ ] O código lido em voz alta faz sentido em inglês
- [ ] Lógica de negócio 100% inalterada
