/* ------ CONFIGURANDO O CODEGEN PARA GERAR 'INTERFACES' AUTOMATICAS DE RETORNOS EM GRAPHQL ----- */
/* ---------------- TENHO QUE IR EM package.json E COLOCAR UM SCRIPT PRO CODEGEN ---------------- */

import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3001/graphql',            //Local onde esta o servidor graphql
    documents: ["src/Graphql/*.{ts,tsx}"],              //Vou procurar as queries e mutations na pasta ./Graphql/
    generates: {
        './src/__generated__/' :{                       //Todos os arquivos gerados pelo codegen serao alocados na pasta  ./src/generated/
            preset: 'client',
            plugins: []
        }
    }
}

export default config
