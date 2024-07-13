## Dependencias usadas no projeto

Estou utilizando o **yarn** para gerenciar os pacotes

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
- **yarn add graphql**: Para as criacoes das API`s
- **yarn add express-graphql** : Para integrar API ao express

## Como configurar o package.json

"scripts": {
    "start": "node ./dist/index.ts",
    "dev": "nodemon ./src/index.ts",
    "build": "tsc -p .",
},

## Como configurar o tsconfig.json

Depois de usar o comando **tsc --init** o tsconfig.json sera criado automaticamente, entao sera necessario fazer as seguintes alteracoes no arquivo.

- Descomentar o codigo **"outDir": "./dist",** (Acrescentar o dist) -> especifica o diretório onde os arquivos JavaScript compilados serão colocados após a compilação do TypeScript
- Descomentar o codigo **"rootDir": "./src",** (Acrescentar o src) -> especifica o diretório raiz onde o compilador deve procurar pelos arquivos TypeScript
- Descomentar o codigo  **"strictPropertyInitialization": true,** -> TypeScript garantirá que todas as propriedades de uma classe sejam inicializadas no construtor ou sejam marcadas como opcionais
- Descomentar o codigo **"experimentalDecorators": true,** --> Decoradores
- Descomentar o codigo **"emitDecoratorMetadata": true,** --> Decoradores

## Link para utilizar o markdown

[stackedit](https://stackedit.io/app#)