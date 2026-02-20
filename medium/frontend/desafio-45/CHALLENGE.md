# Desafio 45: Componente de Modal Desacoplado

- **Caminho do Ambiente:** `/medium/frontend/desafio-45/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Composição de Componentes / Portal
- **Arquivos do Ambiente:** `UserTable.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserTable` tem dois modais hardcoded com estrutura duplicada (overlay, container, botões). O JSX do modal está misturado com o JSX da tabela. Adicionar um terceiro modal exige duplicar mais código.

## Missão

Extraia um componente `Modal` genérico e reutilizável usando `ReactDOM.createPortal`. `UserTable` deve usar `<Modal>` para ambos os casos sem duplicar a estrutura de overlay.

## Critérios de Avaliação

- [ ] Componente `Modal` genérico com props `isOpen`, `onClose`, `title`, `children`
- [ ] `Modal` usa `ReactDOM.createPortal` para renderizar fora da árvore DOM atual
- [ ] Overlay fecha ao clicar fora do conteúdo
- [ ] `UserTable` usa `<Modal>` sem nenhuma estrutura de overlay duplicada
- [ ] Comportamento idêntico ao original
