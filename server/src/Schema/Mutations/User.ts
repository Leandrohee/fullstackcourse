import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Data/Entities/Users";

export const mutCreateUser = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    resolve(parent: any, args: any){
        const {name, username, password} = args;
        Users.insert({name, username, password})                    // Aqui vc descreve oq quer inserir no banco de dados
        // Users.insert(args)                                       // Maneira mais limpa de descrever tudo de uma vez
        return args;
    }
}


/* -- CODIGO AQUI EM BAIXO EH PARA SER TESTADO NO GUI GRAPHQL EM: http://localhost:3001/graphql - */

// mutation{
//     mutCreateUser(name: "Leandro", username: "leandrohee", password: "1234"){
//       name
//       username
//       password
//     }
//   }