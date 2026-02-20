# Desafio 11: Tipagem de Objetos — Interface vs. Type

- **Caminho do Ambiente:** `/easy/backend/desafio-11/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** TypeScript — Interface vs. Type Alias / Union Types / Generics
- **Arquivos do Ambiente:** `types.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`types.ts` mistura `interface` e `type` sem critério, usa `any` onde um genérico seria correto, usa `object` como tipo de retorno onde o tipo concreto é conhecido, e usa `string` onde um union type seria mais preciso e seguro.

## Missão

Refatore as definições de tipo aplicando as convenções corretas: `interface` para contratos de objetos extensíveis, `type` para unions/intersections/aliases, union types para campos com valores fixos, e genéricos onde a função opera sobre tipos variáveis.

## Critérios de Avaliação

- [ ] `status` em `OrderInterface` é um union type com os valores possíveis
- [ ] `createdAt` usa `Date` em vez de `string`
- [ ] `printName` usa um genérico com constraint (`T extends { name: string }`) em vez de `any`
- [ ] `createUser` retorna `UserType` em vez de `object`
- [ ] Convenção `interface` vs `type` é consistente e justificável
- [ ] Código compila sem erros e sem `any`
