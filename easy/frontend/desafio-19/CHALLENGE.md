# Desafio 19: Estilização Inline vs. CSS Modules

- **Caminho do Ambiente:** `/easy/frontend/desafio-19/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** CSS Modules — Separação de Estilo e Lógica
- **Arquivos do Ambiente:** `Alert.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Alert` usa estilos inline para tudo: layout, cores, tipografia e variantes por tipo. Isso polui o JSX, impede reutilização de estilos, impossibilita media queries e pseudo-seletores (`:hover`, `:focus`), e mistura responsabilidades de apresentação com lógica de componente.

## Missão

Migre todos os estilos para um arquivo `Alert.module.css`. Use classes CSS para as variantes de tipo (`success`, `warning`, `error`, `info`). O componente deve aplicar as classes dinamicamente.

## Critérios de Avaliação

- [ ] Arquivo `Alert.module.css` criado com todas as classes necessárias
- [ ] Nenhum `style={{}}` inline no JSX (exceto valores verdadeiramente dinâmicos em runtime)
- [ ] Variantes de tipo aplicadas via classes CSS, não via objetos JS
- [ ] Aparência visual idêntica ao original
- [ ] Código compila sem erros
