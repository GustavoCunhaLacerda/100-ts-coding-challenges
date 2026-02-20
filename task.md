**Papel:** Atue como um Engenheiro de Software Sênior e Mentor Técnico. 

**Objetivo:** Crie uma trilha de 100 desafios práticos de programação, focados no aprimoramento de conceitos avançados, Clean Code, POO, algoritmos e arquitetura, abrangendo Backend e Frontend. 

**Estrutura de Diretórios e Ambientes Isolados (Regra de Organização):**
A priori, os desafios devem ser organizados em uma árvore de diretórios baseada no nível e na área (ex: `/expert/frontend/desafio-100/`). 
**Regra de Ouro:** Cada pasta de desafio (`desafio-x`) deve ser tratada como um ambiente completo e isolado. Para cada desafio, você deve fornecer a estrutura de arquivos necessária (ex: `index.html`, `index.js`, `package.json`, etc.) para que o desenvolvedor tenha um setup pronto para rodar e testar.

**A Analogia do Xadrez (Regra Principal e Conceitual):**
Os desafios não devem ser do tipo "crie um app do zero". Eles devem seguir a *lógica* de "Puzzles de Xadrez" (como exercícios de xeque-mate ou táticas de meio-jogo). 
*Nota: A nomenclatura de xadrez abaixo é apenas uma analogia mental para o seu entendimento da estrutura. Não utilize os termos "Tabuleiro", "Jogada" ou "Xeque-Mate" no texto final gerado.*
A estrutura conceitual de cada desafio deve conter:
* **O Cenário Inicial:** O setup do ambiente funcionando, mas com problemas estruturais, de legibilidade, gargalos de performance, acoplamento ou bugs ocultos.
* **O Objetivo:** O que o desenvolvedor precisa fazer (ex: aplicar um design pattern, reduzir a complexidade ciclomática, extrair responsabilidades, gerenciar o estado de forma mais limpa).
* **Os Critérios de Sucesso:** Como a solução será avaliada, visto que nem sempre há uma única resposta exata. Pode ser uma avaliação feita por IA ou code review de um sênior.

**Níveis de Dificuldade:**
A lista de 100 desafios deve ser dividida em:
1.  **Fácil (25):** Foco em sintaxe, tipagem, uso correto de funções e componentes simples de UI.
2.  **Médio (25):** Refatoração de funções grandes (Clean Code), separação de responsabilidades (SOLID básico), gerenciamento de estado local no Frontend e manipulação de eventos.
3.  **Difícil (25):** Aplicação de Design Patterns, otimização de algoritmos (Big O), POO avançada, injeção de dependências e gerenciamento de estado global.
4.  **Expert (25):** Arquitetura de software, refatoração profunda de código legado acoplado, problemas complexos de concorrência e design de componentes altamente reutilizáveis.

**Escopo Técnico:**
* **Backend:** Lógica de negócios, Programação Orientada a Objetos (POO), Clean Code, estruturas de dados.
* **Frontend:** Foco em frameworks baseados em componentes (como React), manipulação profunda de JSX, ciclo de vida, imutabilidade e gerenciamento de eventos/estado.

**Formato de Saída Exigido para cada Desafio:**
Para cada desafio gerado, use a seguinte estrutura em Markdown:

**# Desafio [Número]: [Título do Desafio]**
* **Caminho do Ambiente:** [Ex: `/expert/frontend/desafio-84/`]
* **Nível:** [Fácil/Médio/Difícil/Expert]
* **Área:** [Backend / Frontend / Algoritmo]
* **Conceito Foco:** [Ex: Single Responsibility Principle, React Hooks, etc.]
* **Arquivos do Ambiente:** [Liste os arquivos que compõem este diretório, ex: `index.html`, `app.js`, `styles.css`]
* **Cenário Inicial (Setup):** [Descrição da situação atual. Forneça aqui os blocos de código com o conteúdo exato de cada arquivo listado acima para montar o ambiente base do desafio]
* **Missão (Objetivo):** [O que deve ser alcançado/refatorado pelo desenvolvedor]
* **Critérios de Avaliação (Sucesso):** [Checklist do que uma boa solução deve conter para ser validada pelo revisor/IA]