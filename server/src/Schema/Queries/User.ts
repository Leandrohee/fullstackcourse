import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";


/* ------ A FUNCAO GraphQLList PERMITE QUE SE BUSQUE TODOS OS TIPOS DA VARIAVEL ESPECIFICA ------ */

export const queryGetAllUsers = {
    type: new GraphQLList(UserType),
    resolve() {
        return [];
    }
}