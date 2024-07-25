## Comandos para colocar o projeto online

- **yarn dev** : Inicia o projeto com nodemon no ambiente producao (src)
- **yarn start** : Inicia o projeto com node no ambiente desenvolvimento (dist)

## Comando basicos utilizados para iniciar o projeto (na pasta server)

- **yarn init** : Para gerar o arquivo package.json
- **yarn add typescript --dev** : Para instalar o typescript
- **yarn add nodemon -D** : nodemon reinicia o servidor node.js quando detecta alguma alteracao
- **tsc --init** : Para instalar o typescript no projeto e acrescentar o tsconfig.json
- **yarn cors** : Faz a conexao entre o backend e o frontend
- **yarn ts-node** : Permite executar o ts diretamento no node
- **yarn add express** : framework para construcao de API`s em node.js
- **yarn add @types/cors @types/express** : definicoes de tipos de typescript para cors e express
- **yarn add @types/node** : definicoes de tipos de typescript para node
- **yarn add typeorm** : Um ORM para fazer a conversao de js para sql (banco de dados)
- **yarn add pg** : Para o typeorm se connectar com bancos baseados em postgreSql
- **yarn add graphql**: Para as criacoes das API`s
- **yarn add express-graphql** : Para integrar API ao express
- **yarn add class-validator**: Para validar colunas no Banco

## Comando basicos utilizados para iniciar o projeto (na pasta client)

- **yarn create react-app . --template typescript**: Para iniciar o projeto react
- **yarn add @apollo/client**: Para consumir graphql do lado do cliente
- **yarn add graphql**: Para usar o graphql no react
- **yarn add react-router-dom**: Para criar rotas
- **yarn add react-hook-form**: Para criar formularios
- **yarn add @graphql-codegen/cli** : Automatizar interfaces de graphql
- **yarn add @graphql-codegen/typescript** : Automatizar interfaces de graphql
- **yarn add @graphql-codegen/typescript-operations** : Automatizar interfaces de graphql
- **yarn add @graphql-codegen/typescript-react-apollo** : Automatizar interfaces de graphql

## Comando para instalar o tailwind e o materialui

- [passo a passo Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
- [passo a passo MaterialUi](https://mui.com/material-ui/getting-started/installation/)
- [passo a passo Material Table](https://material-table.com/#/docs/install)
- **yarn add @mui/x-data-grid**: Para usar tabela
- **yarn add @mui/material**: Para usar textfield
- **yarn add material-table** : Para usar material table
- **yarn add @material-ui/core**: Pra usar material table
- **yarn add @mui/lab**
- **yarn add @mui/styles**
- **yarn add @mui/icons-material**: Icones 
- **yarn add react-toastify**: Para adicionar toast

## Como configurar o package.json do server

"scripts": {
    "start": "node ./dist/index.ts",
    "dev": "nodemon ./src/index.ts",
    "build": "tsc -p .",
},

## Como configurar o tsconfig.json do server

Depois de usar o comando **tsc --init** o tsconfig.json sera criado automaticamente, entao sera necessario fazer as seguintes alteracoes no arquivo.

- Descomentar o codigo **"outDir": "./dist",** (Acrescentar o dist) -> especifica o diretório onde os arquivos JavaScript compilados serão colocados após a compilação do TypeScript
- Descomentar o codigo **"rootDir": "./src",** (Acrescentar o src) -> especifica o diretório raiz onde o compilador deve procurar pelos arquivos TypeScript
- Descomentar o codigo  **"strictPropertyInitialization": true,** -> TypeScript garantirá que todas as propriedades de uma classe sejam inicializadas no construtor ou sejam marcadas como opcionais
- Descomentar o codigo **"experimentalDecorators": true,** --> Decoradores
- Descomentar o codigo **"emitDecoratorMetadata": true,** --> Decoradores

## Distribuicao das pastas no projeto

#### Pasta client
 Responsavel pelo frontend e pelo projeto react

#### Pasta server
 Responsavel pelo backend, conexao com o banco de dados, servidor graphql...
- Pasta **dist** : desenvolvimento
- Past **src** : producao
- Pasta **src/schema** serve para armazenar as queries, mutations e vaiaveis do projeto.
- Pasta **src/Data** serve para gerenciar tudo relacionado com banco de dados (conexoes, entities)

## Link para utilizar o markdown

[stackedit](https://stackedit.io/app#)