# Desafio 10: Módulos e Exportações Organizadas

- **Caminho do Ambiente:** `/easy/backend/desafio-10/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Modularização — Separação por Responsabilidade
- **Arquivos do Ambiente:** `helpers.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`helpers.ts` é um arquivo "gaveta" com 8 funções de domínios completamente diferentes: validação, autenticação, notificação e formatação. À medida que o projeto cresce, esse arquivo se torna um ponto de acoplamento — qualquer módulo que precise de `formatDate` acaba importando junto com `hashPassword`.

## Missão

Quebre `helpers.ts` em módulos coesos por responsabilidade. Crie um arquivo `index.ts` que re-exporta tudo para manter compatibilidade com importações existentes.

## Critérios de Avaliação

- [ ] Cada novo módulo tem uma única responsabilidade clara
- [ ] Nenhuma função está no módulo errado
- [ ] `index.ts` re-exporta tudo usando `export * from`
- [ ] O arquivo `helpers.ts` original pode ser deletado sem quebrar importações via `index.ts`
- [ ] Código compila sem erros
