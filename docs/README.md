# Sistema de Login e Cadastro com encriptação

Este repositório contém um sistema de login e cadastro de usuários utilizando `bcrypt` para hash de senhas. O projeto é desenvolvido em Node.js e utiliza o banco de dados MySQL.

## Funcionalidades

- Cadastro de novos usuários com senha criptografada.
- Login de usuários com verificação de senha.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- bcrypt

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/products/workbench/)

## Instalação

```bash
# Clone este repositório
$ git clone https://github.com/mapompeo/login-cadastrar.git

# Instale as dependências
$ npm install

# Acesse a pasta do back-end
$ cd back-end

# Acesse a pasta model
$ cd model

# Rode o arquivo de configuração do banco de dados
$ node user.js

# Acesse a pasta do servidor
$ cd ..

# Depois rode o servidor
$ node index.js
