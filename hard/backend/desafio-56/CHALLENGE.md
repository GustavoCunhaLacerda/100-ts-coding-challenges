# Desafio 56: Interface Segregation Principle

- **Caminho do Ambiente:** `/hard/backend/desafio-56/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** ISP — Interface Segregation Principle
- **Arquivos do Ambiente:** `workers.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`IWorker` é uma interface gorda com 7 métodos. `Robot` e `Developer` são forçados a implementar métodos que não fazem sentido para eles, lançando `Error` como solução paliativa. Isso viola o ISP: clientes não devem ser forçados a depender de interfaces que não usam.

## Missão

Quebre `IWorker` em interfaces coesas e granulares. Cada classe deve implementar apenas as interfaces que fazem sentido para ela.

## Critérios de Avaliação

- [ ] `IWorker` dividida em interfaces menores e coesas
- [ ] Nenhuma classe implementa método que lança `Error` por não ser aplicável
- [ ] `Robot` implementa apenas as interfaces relevantes para robôs
- [ ] `Developer` implementa apenas as interfaces relevantes para desenvolvedores
- [ ] Funções que precisam de capacidades específicas dependem de interfaces específicas
- [ ] Código compila sem erros
