/* ------ AQUI EH ONDE EU FACO A CONEXAO COM O BANCO DE DADOS E SETO TODAS AS CONFIGURACOES ----- */

import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";
import { UsersV2 } from "./Entities/UsersV2";

const dataBaseName = 'leandro_db'                        // Se estiver usando no windows
// const dataBaseName = 'leandro_db_mac'                    // Se estiver usando no mac

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5555,
    username: "postgres",
    password: "123",
    database: dataBaseName,
    synchronize: false,                                 //true para sincronizar e adicionar entidades novas ou modificacoes
    logging: true,
    entities: [Users, UsersV2],
    subscribers: [],
    migrations: [],
})
