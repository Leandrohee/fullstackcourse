/* ------------------------------- CODIGOS RELACIONADOS AO TYPEORM ------------------------------ */
/* ------------------------- AQUI VAMOS CRIAR A TABELA NO BANCO DE DADOS ------------------------ */
/* ------------------ O NOME QUE COLOCAR NA CLASSE SERA O NOME DA TABELA NO DB ------------------ */
/* ------------- VAMOS COLOCAR OS DECORADORES AQUI TAMBEM QUE SAO OS CODIGOS COM "@" ------------ */
/* ------ O PRIMEIRO DECORADOR @ENTITY EH PARA DIZER QUE ESTAMOS TRABALHANDO COM UMA ENTITY ----- */
/* ---- OS DECORADORES @COLUMN SAO RELACIONADOS AS COLUNAS QUE TEREMOS NO NOSSO BANCO DE DADOS -- */
/* -- O @PrimaryGeneratedColumn ESTA RELACIONADO AO ID GERADO AUTOMATICAMENTE NO BANCO DE DADOS - */
/* ------ DEPOIS DE FAZER A ENTIDADE DEVEMOS IMPORTAR ELA NO Index.TS PRINCIPAL DO PROJETO ------ */

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

}