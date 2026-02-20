# Desafio 65: Compound Components Pattern

- **Caminho do Ambiente:** `/hard/frontend/desafio-65/`
- **Nível:** Difícil
- **Área:** Frontend
- **Conceito Foco:** Design Patterns React — Compound Components
- **Arquivos do Ambiente:** `Tabs.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Tabs` é um componente monolítico com uma API de props inflexível. Adicionar um novo tipo de conteúdo (ex: tab com badge de contagem) exige adicionar mais props. O consumidor não tem controle sobre o layout interno.

## Missão

Refatore para o padrão Compound Components: `<Tabs>`, `<Tabs.List>`, `<Tabs.Tab>`, `<Tabs.Panels>`, `<Tabs.Panel>`. O estado compartilhado deve ser gerenciado via Context interno.

## Critérios de Avaliação

- [ ] API de uso: `<Tabs><Tabs.List><Tabs.Tab id="a">Label</Tabs.Tab></Tabs.List><Tabs.Panel id="a">Content</Tabs.Panel></Tabs>`
- [ ] Estado de tab ativa gerenciado via Context interno ao `Tabs`
- [ ] `Tabs.Tab` e `Tabs.Panel` comunicam-se via Context sem props explícitas
- [ ] Flexibilidade: consumidor pode inserir qualquer JSX dentro de `Tabs.Tab`
- [ ] Comportamento idêntico ao original
