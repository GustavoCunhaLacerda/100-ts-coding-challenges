# Desafio 31: Repositório com SQL Inline

- **Caminho do Ambiente:** `/medium/backend/desafio-31/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** Repository Pattern / Separação de Camadas
- **Arquivos do Ambiente:** `productService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`ProductService` contém SQL inline diretamente no serviço de negócio. Trocar SQLite por PostgreSQL exige modificar a classe de negócio. Testar a lógica de negócio sem um banco de dados real é impossível.

## Missão

Extraia toda a lógica de acesso a dados para uma classe `ProductRepository` que implementa uma interface `IProductRepository`. `ProductService` deve depender apenas da interface.

## Critérios de Avaliação

- [ ] Interface `IProductRepository` definida com todos os métodos de acesso a dados
- [ ] `ProductRepository` implementa a interface com o SQL atual
- [ ] `ProductService` recebe `IProductRepository` via construtor (injeção de dependência)
- [ ] `ProductService` não contém nenhuma query SQL
- [ ] É possível criar um `MockProductRepository` para testes sem banco de dados
- [ ] Código compila sem erros
