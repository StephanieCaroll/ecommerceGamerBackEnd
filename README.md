# Ecommerce Gamer Backend

## Descrição

Este é o backend para o projeto Ecommerce Gamer, construído com NestJS e TypeORM.

## Aviso

O diretório `node_modules` não está presente no repositório. É necessário baixar as dependências antes de iniciar o projeto.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn
- MySQL

## Configuração do Projeto

1. **Instale as dependências:**

   Usando npm:
   ```bash
   npm install
   ```

   Usando yarn:
   ```bash
   yarn install
   ```

3. **Configuração do banco de dados:**

   Crie um banco de dados MySQL e configure as credenciais no arquivo `.env`.

4. **Configuração do arquivo .env:**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=seu-usuario
   DB_PASSWORD=sua-senha
   DB_DATABASE=nome-do-banco
   ```

5. **Código SQL para teste:**

   O código SQL necessário para criar as tabelas será fornecido em outro arquivo.

## Scripts Disponíveis

- **Iniciar o servidor em modo de desenvolvimento:**

  ```bash
  npm run start:dev
  ```

- **Compilar o projeto:**

  ```bash
  npm run build
  ```

## Estrutura do Projeto

- **src/**: Contém o código fonte do projeto.
- **test/**: Contém os testes do projeto.
- **dist/**: Contém os arquivos compilados (gerado após rodar `npm run build`).

## Acessibilidade (WCAG)

Este projeto segue os princípios da WCAG (Web Content Accessibility Guidelines) para garantir acessibilidade a todos os usuários. Os pilares implementados são:

- **Perceptível**: Informações e componentes da interface são apresentados de forma perceptível, como mensagens claras e suporte para tecnologias assistivas.
- **Operável**: Todas as funcionalidades são acessíveis por teclado e projetadas para serem operáveis por qualquer usuário.
- **Compreensível**: Mensagens de erro e validações são claras e fáceis de entender.
- **Robusto**: O backend é projetado para funcionar em diferentes navegadores, dispositivos e tecnologias assistivas.

## Licença

Este projeto está licenciado sob a licença UNLICENSED.
