/* ------ AQUI EH ONDE EU FACO A CONEXAO COM O BANCO DE DADOS E SETO TODAS AS CONFIGURACOES ----- */

import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5555,
    username: "postgres",
    password: "123",
    database: "leandro_db",
    synchronize: false,
    logging: true,
    entities: [Users],
    subscribers: [],
    migrations: [],
})