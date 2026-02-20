# Desafio 50: Animações de Entrada e Saída

- **Caminho do Ambiente:** `/medium/frontend/desafio-50/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** UX / Performance — CSS Transitions / Framer Motion
- **Arquivos do Ambiente:** `NotificationStack.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`NotificationStack` adiciona e remove notificações abruptamente sem animação. Notificações aparecem e desaparecem instantaneamente, criando uma experiência visual abrupta. Animar a saída é especialmente difícil porque o elemento é removido do DOM antes de qualquer animação terminar.

## Missão

Adicione animações de entrada (slide-in da direita) e saída (fade-out) usando `framer-motion`. A animação de saída deve completar antes do elemento ser removido do DOM.

## Critérios de Avaliação

- [ ] `framer-motion` instalado e usado para animações
- [ ] Animação de entrada: slide-in da direita com fade-in
- [ ] Animação de saída: fade-out antes da remoção do DOM
- [ ] `AnimatePresence` usado para gerenciar o ciclo de vida das animações
- [ ] Estilos inline migrados para CSS Modules
- [ ] Performance: animações usando `transform` e `opacity` (não `width`/`height`)
