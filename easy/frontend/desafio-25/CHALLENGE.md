# Desafio 25: Formatação de Datas com Intl

- **Caminho do Ambiente:** `/easy/frontend/desafio-25/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** Internacionalização — Intl API / Separação de Utilitários
- **Arquivos do Ambiente:** `EventList.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`EventList` formata datas e durações manualmente com concatenação de strings e padding manual (`d.getDate() < 10 ? "0" + ...`). Esse código é frágil (não lida com fusos horários corretamente), não é internacionalizado, e está misturado com o JSX de renderização.

## Missão

Substitua a formatação manual pela `Intl.DateTimeFormat` API nativa. Extraia as funções de formatação para um arquivo `dateUtils.ts` separado.

## Critérios de Avaliação

- [ ] `Intl.DateTimeFormat` usado para formatar a data/hora
- [ ] Funções de formatação extraídas para `dateUtils.ts`
- [ ] Nenhuma manipulação manual de padding (`"0" + ...`) no código
- [ ] Formatação de duração também extraída para utilitário
- [ ] `EventList` importa e usa as funções utilitárias
- [ ] Código compila sem erros
