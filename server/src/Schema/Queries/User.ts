import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Data/Entities/Users";


/* ------ A FUNCAO GraphQLList PERMITE QUE SE BUSQUE TODOS OS TIPOS DA VARIAVEL ESPECIFICA ------ */
/* ------------------ queryGetAllUsers é um objeto que define uma query GraphQ ------------------ */

export const queryGetAllUsers = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}


/* -- CODIGO AQUI EM BAIXO EH PARA SER TESTADO NO GUI GRAPHQL EM: http://localhost:3001/graphql - */

// query{
//     queryGetAllUsers{
//       name
//       username
//       password
//     }
//   }