# Desafio 26: Função Deus — Extração de Responsabilidades

- **Caminho do Ambiente:** `/medium/backend/desafio-26/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** SRP — Single Responsibility Principle / Clean Code
- **Arquivos do Ambiente:** `userRegistration.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`registerUser` é uma "Função Deus": valida entrada, processa dados (hash, UUID), persiste no banco, envia email e registra auditoria — tudo em uma única função de 50 linhas. Testar qualquer parte isoladamente é impossível. Adicionar um novo canal de notificação exige modificar a função principal.

## Missão

Decomponha `registerUser` aplicando SRP: cada responsabilidade deve ser uma função ou módulo separado. A função orquestradora deve apenas coordenar as etapas, sem implementar nenhuma delas.

## Critérios de Avaliação

- [ ] Validação extraída para função(ões) separada(s) e testável(is) isoladamente
- [ ] Processamento (hash, UUID, normalização) em função separada
- [ ] Persistência abstraída atrás de uma interface/função separada
- [ ] Notificação e auditoria em funções separadas
- [ ] `registerUser` orquestra sem implementar — lê como uma sequência de passos
- [ ] Comportamento idêntico ao original
