# Desafio 48: Componente de Tabela Genérico e Reutilizável

- **Caminho do Ambiente:** `/medium/frontend/desafio-48/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Componentização Avançada / Generics em JSX
- **Arquivos do Ambiente:** `UserTable.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserTable` é uma tabela hardcoded para o tipo `User`. Para exibir uma tabela de `Product` ou `Order`, seria necessário criar um componente completamente novo com código duplicado.

## Missão

Crie um componente genérico `DataTable<T>` que recebe `data: T[]` e `columns: ColumnDef<T>[]` (definição de colunas com `key`, `header` e `render` opcional). `UserTable` deve ser apenas uma configuração de `DataTable`.

## Critérios de Avaliação

- [ ] Componente `DataTable<T>` genérico implementado com TypeScript generics
- [ ] Tipo `ColumnDef<T>` definido com `key: keyof T`, `header: string`, `render?: (value: T) => ReactNode`
- [ ] `UserTable` refatorado para usar `<DataTable<User> data={users} columns={...} />`
- [ ] O mesmo `DataTable` pode ser usado para qualquer tipo de dado
- [ ] Código compila sem erros com `strict: true`
