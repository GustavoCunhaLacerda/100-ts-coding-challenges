# Desafio 14: Componente com Props Mal Tipadas

- **Caminho do Ambiente:** `/easy/frontend/desafio-14/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React + TypeScript — Tipagem de Props
- **Arquivos do Ambiente:** `UserCard.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserCard` recebe `props: any`, o que desabilita completamente a verificação de tipos. Qualquer propriedade pode ser passada (ou omitida) sem erro em tempo de desenvolvimento. O componente também não usa desestruturação nas props.

## Missão

Defina uma interface `UserCardProps` com todos os campos tipados corretamente. Use desestruturação diretamente no parâmetro. Marque campos opcionais com `?`.

## Critérios de Avaliação

- [ ] Interface `UserCardProps` definida com todos os campos tipados
- [ ] Nenhum uso de `any`
- [ ] Props desestruturadas diretamente no parâmetro da função
- [ ] Campo `isAdmin` marcado como opcional (`?`)
- [ ] Código compila sem erros com `strict: true`
