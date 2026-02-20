# Desafio 77: CQRS — Separação de Leitura e Escrita

- **Caminho do Ambiente:** `/expert/backend/desafio-77/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** CQRS — Command Query Responsibility Segregation
- **Arquivos do Ambiente:** `productService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`productService.ts` usa o mesmo modelo e repositório para leituras (listagens, buscas) e escritas (criar, atualizar, deletar). Otimizar a leitura (ex: adicionar índices, desnormalizar dados) afeta o modelo de escrita e vice-versa.

```ts
export class ProductService {
  constructor(private repo: IProductRepository) {}
  async createProduct(data: CreateProductDTO): Promise<Product> { /* ... */ }
  async updateProduct(id: string, data: UpdateProductDTO): Promise<Product> { /* ... */ }
  async deleteProduct(id: string): Promise<void> { /* ... */ }
  async getProduct(id: string): Promise<Product> { /* ... */ }
  async listProducts(filters: ProductFilters): Promise<Product[]> { /* ... */ }
  async searchProducts(query: string): Promise<Product[]> { /* ... */ }
  async getProductStats(): Promise<ProductStats> { /* ... */ }
}
```

## Missão

Separe em `ProductCommandService` (escritas) e `ProductQueryService` (leituras). Cada serviço deve ter seu próprio modelo e repositório otimizado para seu caso de uso.

## Critérios de Avaliação

- [ ] `ProductCommandService` com apenas operações de escrita
- [ ] `ProductQueryService` com apenas operações de leitura
- [ ] Modelos distintos: `ProductWriteModel` e `ProductReadModel`
- [ ] `IProductWriteRepository` e `IProductReadRepository` separados
- [ ] Nenhum método de leitura no command service e vice-versa

---

# Desafio 78: Event Sourcing Simplificado

- **Caminho do Ambiente:** `/expert/backend/desafio-78/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Event Sourcing — Estado como Sequência de Eventos
- **Arquivos do Ambiente:** `bankAccount.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`bankAccount.ts` armazena apenas o estado atual da conta. Não há histórico de transações. Impossível auditar "como chegamos a este saldo" ou reconstruir o estado em qualquer ponto no tempo.

```ts
export class BankAccount {
  private balance: number = 0;
  deposit(amount: number) { this.balance += amount; }
  withdraw(amount: number) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
  getBalance() { return this.balance; }
}
```

## Missão

Refatore para Event Sourcing: o estado da conta deve ser derivado de uma sequência de eventos imutáveis. Implemente `replayEvents` para reconstruir o estado a partir de qualquer ponto.

## Critérios de Avaliação

- [ ] Eventos tipados: `MoneyDeposited`, `MoneyWithdrawn`
- [ ] Estado derivado aplicando eventos em sequência
- [ ] `getHistory()` retorna todos os eventos
- [ ] `getBalanceAt(timestamp)` reconstrói o saldo em qualquer ponto no tempo
- [ ] Eventos são imutáveis após criação

---

# Desafio 79: DDD — Agregados e Invariantes

- **Caminho do Ambiente:** `/expert/backend/desafio-79/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** DDD — Aggregates / Invariants / Domain Events
- **Arquivos do Ambiente:** `order.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`order.ts` é um objeto anêmico: apenas dados sem comportamento. As regras de negócio (ex: "não pode adicionar item a pedido confirmado", "total mínimo de R$10") estão espalhadas em serviços externos.

```ts
export interface Order {
  id: string; status: "draft" | "confirmed" | "shipped"; items: OrderItem[]; total: number;
}
export interface OrderItem { productId: string; qty: number; unitPrice: number; }
// Regras de negócio em serviço separado — modelo anêmico
export class OrderService {
  addItem(order: Order, item: OrderItem) { order.items.push(item); order.total += item.qty * item.unitPrice; }
  confirm(order: Order) { order.status = "confirmed"; }
}
```

## Missão

Transforme `Order` em um Agregado rico com invariantes protegidas. O agregado deve ser a única porta de entrada para modificações e deve emitir Domain Events.

## Critérios de Avaliação

- [ ] `Order` como classe com estado privado
- [ ] Invariantes protegidas: não adicionar item a pedido confirmado, total mínimo
- [ ] Domain Events emitidos: `OrderItemAdded`, `OrderConfirmed`
- [ ] Nenhuma mutação direta de propriedades do agregado de fora
- [ ] `OrderService` externo não contém regras de domínio

---

# Desafio 80: DDD — Value Objects

- **Caminho do Ambiente:** `/expert/backend/desafio-80/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** DDD — Value Objects / Tipos Primitivos Obsessivos
- **Arquivos do Ambiente:** `primitiveObsession.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`primitiveObsession.ts` usa tipos primitivos (`string`, `number`) para conceitos de domínio ricos como Email, Money, CPF e PhoneNumber. Isso permite valores inválidos em tempo de compilação e espalha validações pelo código.

```ts
export interface Customer {
  id: string;
  name: string;
  email: string;        // Qualquer string — sem validação
  cpf: string;          // Qualquer string — sem validação
  phone: string;        // Qualquer string — sem validação
  balance: number;      // Pode ser negativo acidentalmente
  creditLimit: number;  // Sem relação com balance
}
```

## Missão

Substitua os primitivos por Value Objects imutáveis com validação no construtor: `Email`, `CPF`, `PhoneNumber`, `Money`.

## Critérios de Avaliação

- [ ] `Email` — valida formato, imutável, comparável por valor
- [ ] `CPF` — valida dígitos verificadores, normaliza formato
- [ ] `Money` — previne valores negativos, operações aritméticas type-safe
- [ ] `PhoneNumber` — normaliza e valida formato brasileiro
- [ ] `Customer` usa Value Objects em vez de primitivos
- [ ] Erros de validação lançados no construtor, não em serviços externos

---

# Desafio 81: Refatoração de Código Legado Acoplado

- **Caminho do Ambiente:** `/expert/backend/desafio-81/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Refatoração Profunda — Strangler Fig / Seams
- **Arquivos do Ambiente:** `legacy.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`legacy.ts` é um módulo legado de 200+ linhas com acoplamento total: funções globais que chamam outras funções globais, variáveis globais mutáveis, sem interfaces, sem separação de responsabilidades. Não há testes.

## Missão

Refatore incrementalmente usando o padrão Strangler Fig: introduza interfaces e seams sem quebrar o comportamento existente. Cada passo deve ser verificável.

## Critérios de Avaliação

- [ ] Variáveis globais eliminadas
- [ ] Funções puras extraídas e testáveis
- [ ] Interfaces introduzidas para dependências externas
- [ ] Comportamento idêntico ao original verificado por testes
- [ ] Código final segue princípios SOLID

---

# Desafio 82: Chain of Responsibility — Pipeline de Processamento

- **Caminho do Ambiente:** `/expert/backend/desafio-82/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Design Patterns — Chain of Responsibility / Middleware Pipeline
- **Arquivos do Ambiente:** `requestProcessor.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`requestProcessor.ts` processa requisições com múltiplas etapas (autenticação, autorização, validação, rate limiting, logging) em uma única função monolítica. Adicionar, remover ou reordenar etapas exige modificar a função principal.

```ts
export async function processRequest(req: Request): Promise<Response> {
  // Autenticação
  if (!req.headers.authorization) return { status: 401, body: "Unauthorized" };
  // Rate limiting
  if (requestCount > 100) return { status: 429, body: "Too Many Requests" };
  // Validação
  if (!req.body) return { status: 400, body: "Bad Request" };
  // Logging
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  // Processamento
  return { status: 200, body: "OK" };
}
```

## Missão

Implemente um pipeline de middleware usando Chain of Responsibility. Cada handler deve ser uma classe independente que pode ser composta em qualquer ordem.

## Critérios de Avaliação

- [ ] Interface `IMiddleware` com método `handle(req, next)`
- [ ] Cada etapa implementada como classe separada
- [ ] Pipeline configurável: `new Pipeline([auth, rateLimit, validation, logging])`
- [ ] Adicionar nova etapa não requer modificar código existente
- [ ] Comportamento idêntico ao original

---

# Desafio 83: Mini ORM com Metaprogramação

- **Caminho do Ambiente:** `/expert/backend/desafio-83/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Metaprogramação — Decorators / Reflect Metadata
- **Arquivos do Ambiente:** `orm.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`orm.ts` tem mapeamento objeto-relacional hardcoded: nomes de tabelas e colunas duplicados entre a classe e as queries SQL. Adicionar um novo campo exige modificar a classe E as queries.

```ts
export class UserRepository {
  async findById(id: string) {
    return db.query("SELECT id, name, email, created_at FROM users WHERE id = $1", [id]);
  }
  async save(user: { id: string; name: string; email: string }) {
    return db.query("INSERT INTO users (id, name, email) VALUES ($1, $2, $3)", [user.id, user.name, user.email]);
  }
}
```

## Missão

Implemente decorators `@Table`, `@Column`, `@PrimaryKey` e uma classe base `BaseRepository<T>` que gera queries SQL automaticamente a partir dos metadados.

## Critérios de Avaliação

- [ ] Decorators `@Table(name)`, `@Column(name?)`, `@PrimaryKey` implementados
- [ ] `BaseRepository<T>` gera `findById`, `save`, `update`, `delete` automaticamente
- [ ] Adicionar novo campo requer apenas adicionar `@Column` na entidade
- [ ] `experimentalDecorators` e `emitDecoratorMetadata` habilitados no tsconfig
- [ ] Queries geradas corretamente para a entidade decorada

---

# Desafio 84: Sistema de Plugins com IoC Container

- **Caminho do Ambiente:** `/expert/backend/desafio-84/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** IoC Container / Plugin Architecture
- **Arquivos do Ambiente:** `app.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`app.ts` instancia todos os serviços manualmente com `new`. Com 20+ serviços e dependências cruzadas, a ordem de instanciação é frágil e o grafo de dependências é difícil de visualizar.

## Missão

Implemente um IoC Container simples com registro por token, resolução automática de dependências e suporte a singletons. Registre e resolva os serviços da aplicação.

## Critérios de Avaliação

- [ ] `Container` com métodos `register`, `registerSingleton`, `resolve`
- [ ] Resolução automática de dependências via constructor injection
- [ ] Singletons retornam a mesma instância
- [ ] Detecção de dependências circulares com erro descritivo
- [ ] Código compila sem erros

---

# Desafio 85: Concorrência Avançada — Worker Threads

- **Caminho do Ambiente:** `/expert/backend/desafio-85/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Concorrência — Worker Threads / CPU-bound Tasks
- **Arquivos do Ambiente:** `imageProcessor.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`imageProcessor.ts` processa imagens (resize, compress, filter) no thread principal do Node.js. Processar 10 imagens bloqueia o event loop por vários segundos, tornando a API irresponsiva durante o processamento.

```ts
export function processImage(buffer: Buffer, options: ProcessOptions): Buffer {
  // Operação CPU-bound que bloqueia o event loop
  let result = buffer;
  result = resize(result, options.width, options.height);
  result = compress(result, options.quality);
  if (options.grayscale) result = toGrayscale(result);
  return result;
}
```

## Missão

Mova o processamento para Worker Threads. Implemente um pool de workers para processar múltiplas imagens em paralelo sem bloquear o event loop.

## Critérios de Avaliação

- [ ] `worker.ts` com lógica de processamento isolada
- [ ] `WorkerPool` com tamanho configurável
- [ ] Event loop não bloqueado durante processamento
- [ ] Processamento paralelo de múltiplas imagens
- [ ] Cleanup correto dos workers ao encerrar

---

# Desafio 86: Rate Limiter com Token Bucket

- **Caminho do Ambiente:** `/expert/backend/desafio-86/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Algoritmos de Sistemas — Token Bucket / Rate Limiting
- **Arquivos do Ambiente:** `rateLimiter.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`rateLimiter.ts` implementa rate limiting com contador simples por janela de tempo fixa. Isso permite "burst" no início de cada janela: um cliente pode fazer 100 requisições no último segundo de uma janela e 100 no primeiro segundo da próxima — 200 em 2 segundos.

```ts
const counters = new Map<string, { count: number; resetAt: number }>();
export function isAllowed(clientId: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = counters.get(clientId);
  if (!entry || now > entry.resetAt) {
    counters.set(clientId, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}
```

## Missão

Implemente o algoritmo Token Bucket: tokens são adicionados a uma taxa constante, e cada requisição consome um token. Permite burst controlado sem o problema da janela fixa.

## Critérios de Avaliação

- [ ] `TokenBucket` com `capacity`, `refillRate` (tokens/segundo), `refillInterval`
- [ ] Tokens reabastecidos continuamente (não em janelas fixas)
- [ ] Burst permitido até `capacity` tokens
- [ ] `consume(tokens: number)` retorna `true` se há tokens suficientes
- [ ] Thread-safe para uso em ambiente assíncrono

---

# Desafio 87: Cache LRU (Least Recently Used)

- **Caminho do Ambiente:** `/expert/backend/desafio-87/`
- **Nível:** Expert
- **Área:** Algoritmo
- **Conceito Foco:** Estruturas de Dados — LRU Cache / Doubly Linked List + HashMap
- **Arquivos do Ambiente:** `lruCache.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`lruCache.ts` implementa um cache simples com `Map` mas sem política de evicção. Com o tempo, o cache cresce indefinidamente consumindo memória.

```ts
export class SimpleCache<K, V> {
  private store = new Map<K, V>();
  get(key: K): V | undefined { return this.store.get(key); }
  set(key: K, value: V): void { this.store.set(key, value); }
  // Sem limite de tamanho — sem evicção
}
```

## Missão

Implemente `LRUCache<K, V>` com complexidade O(1) para `get` e `set`. Use uma doubly linked list + HashMap para rastrear a ordem de uso.

## Critérios de Avaliação

- [ ] `get(key)` — O(1), move item para o topo (mais recente)
- [ ] `set(key, value)` — O(1), remove o menos recente quando capacidade é atingida
- [ ] Capacidade máxima configurável no construtor
- [ ] `LRUCache(3)`: após `set(a), set(b), set(c), get(a), set(d)` — `b` é eviccionado
- [ ] Implementação sem bibliotecas externas

---

# Desafio 88: Trie para Autocompletar

- **Caminho do Ambiente:** `/expert/backend/desafio-88/`
- **Nível:** Expert
- **Área:** Algoritmo
- **Conceito Foco:** Estruturas de Dados — Trie / Prefix Tree
- **Arquivos do Ambiente:** `autocomplete.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`autocomplete.ts` implementa autocompletar com busca linear O(n * m) onde n = número de palavras e m = comprimento do prefixo. Com 1 milhão de palavras, cada keystroke faz 1 milhão de comparações.

```ts
const dictionary: string[] = ["apple", "application", "apply", "apt", "banana", "band", "bandana"];

export function autocomplete(prefix: string): string[] {
  return dictionary.filter((word) => word.startsWith(prefix));
}
```

## Missão

Implemente uma Trie (Prefix Tree) para autocompletar em O(p + k) onde p = comprimento do prefixo e k = número de resultados.

## Critérios de Avaliação

- [ ] `Trie` com métodos `insert(word)` e `search(prefix): string[]`
- [ ] `insert` — O(m) onde m = comprimento da palavra
- [ ] `search` — O(p + k) onde p = prefixo, k = resultados
- [ ] `autocomplete("app")` retorna `["apple", "application", "apply"]`
- [ ] Implementação sem bibliotecas externas
