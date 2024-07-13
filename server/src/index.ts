/* ------------------------------ ARQUIVO BASE DO PROJETO BRACKEND ------------------------------ */
/* ------------------------------- O express EH ONDE CRIO AS APIS ------------------------------- */
/* -------- graphqlHTTP VAI PERMITIR INCIAR O SERVIDOR GRAPHQL COM O ENDPOINT '/graphql' -------- */
/* -------------------- cors PERMITE CONECTAR O REACT COM O SERVIDOR GRAPHQL -------------------- */


import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from './Schema'
import cors from 'cors';
import { createConnection } from 'typeorm';
import { DataSource } from 'typeorm';

/* ------------------ CRIANDO UMA FUNCAO PRINCIPAL QUE LIDARA COM TODA A LOGICA ----------------- */
async function main (){
    
    const app = express()                                           // Cria uma instancia do express
    app.use(cors())                                                 // Usa o cors para lidar com o graphql
    app.use(express.json())                                         // 
    app.use("/graphql", graphqlHTTP({                               // Cria o ambiente para testes de api no endpoint: /graphql
        schema,
        graphiql: true
    }))

    app.listen(3001, ()=>{                                          // Configurar o servidor para rodar na porta especifica
        console.log("SERVER RUNNING ON PORT 3001");                 
    })

};


/* --------------- CHAMANDO A FUNCAO PRINCIPAL E VERIFICANDO SE EXISTE ALGUM ERRO --------------- */
main().catch((error)=>{
    console.log(error);
});