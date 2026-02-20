# Desafio 05: Funções Puras e Efeitos Colaterais

- **Caminho do Ambiente:** `/easy/backend/desafio-05/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Programação Funcional — Pureza de Funções
- **Arquivos do Ambiente:** `inventory.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`sellProduct` faz quatro coisas ao mesmo tempo: muta o objeto recebido, atualiza uma variável global, escreve em um array global e chama `console.log`. Isso torna a função impossível de testar de forma isolada e cria acoplamento oculto com o estado global do módulo.

## Missão

Refatore `sellProduct` para ser uma função pura. Separe os efeitos colaterais em funções distintas e explícitas com nomes que revelam sua intenção.

## Critérios de Avaliação

- [ ] `sellProduct` não muta o objeto recebido (retorna novo objeto com `spread`)
- [ ] `sellProduct` não acessa nem modifica variáveis externas ao seu escopo
- [ ] `sellProduct` não chama `console.log` nem `new Date()`
- [ ] Efeitos colaterais isolados em funções separadas com nomes claros
- [ ] A mesma funcionalidade observável externamente é preservada
