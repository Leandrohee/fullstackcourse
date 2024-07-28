import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Data/Entities/Users";                                              //Criado com o typeORM

/* --------------------------- CRIA UM USUARIO, PASSANDO 3 PARAMETROS --------------------------- */
export const mutCreateUser = {
    type: UserType,                                                                             //O que vai retornar quando a query for chamada
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent: any, args: any){
        const {name, username, password} = args;

        const userAVerificar =  await Users.findOne({ where: { username: username } });         //Procurar username no DB, se já existir lançar um erro
        if (userAVerificar){
            throw new Error (`Esse username '${username}' já existe`)
        }

        Users.insert({name, username, password})                                                //Aqui vc descreve oq quer inserir no banco de dados
        // Users.insert(args)                                                                   //Maneira mais limpa de descrever tudo de uma vez
        return args;
    }
}

/* ---- DELETA UM USUARIO BASEADO NO SEU USERNAME, VERIFICA SE O USER EXISTE ANTES DE DELETAR --- */
export const mutDeleteUser = {
    type: UserType,                                                                             //O que vai retornar quando a query for chamada
    args: {
        username: {type: GraphQLString},
    },
    async resolve(parent: any, args: any){
        const {username} = args;

        const userAVerificar =  await Users.findOne({ where: { username: username } });         //Procurar username no DB, se o usuario não existir lançar um erro
        if (!userAVerificar) {
            throw new Error(`Usuario '${username}' não encontrado`);
        }

        await Users.delete({username: username})                                                //Deletando a linha referente ao usuario do DB. O primeiro username eh referente a coluna username do DB e o segundo username eh referente ao nome do usuario                  
        return userAVerificar;
    }
}

/* ----------- ATUALIZA A SENHA DE UM USUARIO. O USUARIO EH IDENTIFICADO PELO USERNAME ---------- */
export const mutUpdatePasswordUser = {
    type: UserType,                                                                             //O que vai retornar quando a query for chamada
    args: {
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString},
    },
    async resolve(parent: any, args: any){
        const {username, oldPassword, newPassword} = args;

        const userAVerificar =  await Users.findOne({ where: { username: username } });         // Procurar username no DB para verificar a senha antiga
        const passwordAVerificar =  userAVerificar?.password;

        if (!userAVerificar) {
            throw new Error(`Usuario '${username}' não encontrado`);
        }

        if (passwordAVerificar !== oldPassword) {
            throw new Error(`A senha antiga não está correta`);
        }

        await Users.update({username: username},{password: newPassword});                       // Fazendo o update da senha. Primeiro parametro identifica a linha a ser alterada, segunda linha altera a coluna com o dado/                 
        return userAVerificar;
    }
}

/* ----------------------------------- VERIFICAR ESSA MUTATION ---------------------------------- */
export const mutUpdateName = {
    type: UserType,
    args:{
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        newName: {type: GraphQLString}
    },
    async resolve(parent: any, args: any){
        const {id, name, newName} = args

        const userAVerificar = await Users.findOne({ where: { id: id, name: name}});            //Acha o usuario pelo nome e id

        if (!userAVerificar) {
            throw new Error(`Nomde de usuario: '${name}' ou id: '${id}' não encontrados`);
        }

        await Users.update({id: id},{name: newName});                                           //Primeiro objeto localiza a linha a ser modificada. Segundo objeto troca o campo requerido
        return userAVerificar;
    }
}



/* -- CODIGO AQUI EM BAIXO EH PARA SER TESTADO NO GUI GRAPHQL EM: http://localhost:3001/graphql - */

/*
mutation{
    mutCreateUser(name: "Leandro", username: "leandrohee", password: "1234"){
      name
      username
      password
    }
}
*/

/*
mutation{
  mutDeleteUser(username: "leandrohee2"){
    username 
  }
}
*/

/*
mutation{
    mutUpdatePasswordUser(username: "Leandro", oldPassword: "123", newPassword: "1234"){
      name
      username
      oldPassword
      newPassword
    }
}
*/

/*
mutation{
	mutUpdateName(id: 9,name: "teste", newName: "testeLeandro"){
    id
    name
  }
}
*/