# Desafio 57: Liskov Substitution Principle — Formas Geométricas

- **Caminho do Ambiente:** `/hard/backend/desafio-57/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** LSP — Liskov Substitution Principle
- **Arquivos do Ambiente:** `shapes.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Square extends Rectangle` viola o LSP: um `Square` não pode substituir um `Rectangle` sem quebrar o comportamento esperado. `setWidth` e `setHeight` têm semânticas diferentes para cada tipo — um quadrado não pode ter largura e altura independentes.

## Missão

Refatore a hierarquia para respeitar o LSP. Uma solução clássica é usar uma interface `IShape` comum sem herança entre `Rectangle` e `Square`. Justifique sua escolha de design.

## Critérios de Avaliação

- [ ] `Square` não herda de `Rectangle`
- [ ] Ambos implementam uma interface `IShape` comum com `getArea()`
- [ ] `testRectangle` funciona corretamente para `Rectangle`
- [ ] Nenhuma função que aceita `IShape` quebra ao receber `Square` ou `Rectangle`
- [ ] Código compila sem erros
- [ ] Comentário explicando a decisão de design
