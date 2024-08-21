# Desafio: Proxy Reverso com Nginx, Node.js e MySQL

## Descrição do Desafio

Este projeto foi desenvolvido como parte de um desafio para aplicar conhecimentos sobre a utilização do Nginx como proxy reverso. O objetivo principal é que, ao acessar o Nginx, ele faça uma chamada para uma aplicação Node.js, a qual adicionará um registro em um banco de dados MySQL, cadastrando um nome na tabela `people`.

## Funcionalidades

- **Nginx como Proxy Reverso:** O Nginx é configurado para atuar como um proxy reverso, encaminhando as requisições para a aplicação Node.js.
- **Aplicação Node.js:** A aplicação recebe as requisições do Nginx, cadastra um nome na tabela `people` do banco de dados MySQL, e retorna uma resposta para o Nginx.
- **Banco de Dados MySQL:** Um banco de dados MySQL é utilizado para armazenar os nomes cadastrados pela aplicação Node.js.

## Resposta da Aplicação

Quando o Nginx encaminha uma requisição para a aplicação Node.js, a resposta que retorna é:

```html
<h1>Full Cycle Rocks!</h1>
```

- **Lista de nomes cadastrados no banco de dados:** Além da mensagem principal, a aplicação também retorna uma lista de nomes que foram cadastrados no banco de dados.

## Como Executar o Projeto

Este projeto utiliza Docker Compose para simplificar o processo de configuração e execução. Para iniciar o ambiente, basta executar o seguinte comando:

```bash
docker-compose up -d
```

Isso iniciará todos os serviços necessários, incluindo o Nginx, a aplicação Node.js e o banco de dados MySQL. O sistema estará disponível na porta **8080**.

## Ambiente de Desenvolvimento

Para facilitar o desenvolvimento, foi configurado um volume na aplicação Node.js. Isso permite que as alterações no código sejam refletidas automaticamente sem a necessidade de reiniciar o container.

## Tecnologias Utilizadas

- **Nginx:** Proxy reverso para gerenciar as requisições.
- **Node.js:** Plataforma utilizada para desenvolver a aplicação.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional.
- **Docker Compose:** Ferramenta para definir e gerenciar containers Docker.

## Como Contribuir

Se você quiser contribuir para este projeto, sinta-se à vontade para clonar o repositório, criar branches e abrir pull requests com melhorias ou correções.
