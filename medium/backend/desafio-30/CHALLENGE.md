# Desafio 30: Herança Profunda vs. Composição

- **Caminho do Ambiente:** `/medium/backend/desafio-30/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** Composição sobre Herança / Design OOP
- **Arquivos do Ambiente:** `animals.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`animals.ts` tem uma hierarquia de herança com 5 níveis de profundidade. `PoliceServiceDog` herda comportamentos que não fazem sentido para ele (`fetch()`, `belongsTo()`). Adicionar `RobotDog` — que late e busca mas não respira — é impossível sem quebrar a hierarquia ou duplicar código.

## Missão

Refatore usando composição: defina comportamentos como interfaces ou mixins (`IBreathable`, `IFetchable`, `IBarkable`, `IGuidable`) e componha as entidades a partir deles, em vez de herdar de uma cadeia rígida.

## Critérios de Avaliação

- [ ] Hierarquia de herança reduzida a no máximo 2 níveis
- [ ] Comportamentos definidos como interfaces separadas
- [ ] `PoliceServiceDog` não herda comportamentos que não usa
- [ ] `RobotDog` pode ser implementado sem quebrar nada existente
- [ ] Código compila sem erros
