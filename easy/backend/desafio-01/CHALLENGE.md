# Desafio 01: Tipagem Explícita em Funções Utilitárias

- **Caminho do Ambiente:** `/easy/backend/desafio-01/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** TypeScript — Tipagem Explícita
- **Arquivos do Ambiente:** `utils.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

O arquivo `utils.ts` contém três funções utilitárias sem nenhuma anotação de tipo. O `tsconfig.json` já está configurado com `"strict": true`, o que significa que o compilador está pronto para rejeitar código mal tipado — mas o código atual passa sem erros apenas porque o TypeScript infere `any` implicitamente quando não há tipos declarados (comportamento que `noImplicitAny` bloquearia).

O problema: qualquer chamada incorreta como `formatCurrency("cem reais", 42, null)` passa despercebida em tempo de desenvolvimento.

## Missão

Adicione tipagem explícita a todos os parâmetros e retornos das três funções. O código deve compilar com `tsc` sem erros ou warnings.

## Critérios de Avaliação

- [ ] Todos os parâmetros possuem tipos explícitos
- [ ] Todos os retornos possuem tipos explícitos
- [ ] Nenhum uso de `any`
- [ ] O código compila com `tsc` sem erros
- [ ] Tipos são os mais precisos possíveis (`string` em vez de `String`, `number` em vez de `Number`)
