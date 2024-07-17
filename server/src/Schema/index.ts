/* -------------- GERENCIA E DISPONIBILIZA TODAS AS QUERIES E MUTATIONS DO PROJETO -------------- */
/* -- PARA DISPONIBILIZAR UMA QUERIE OU MUTATION NOVA EH SO COLOCAR O NOME DELA DENTRO DE FIELD - */

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { queryGetAllUsers } from "./Queries/User";
import { mutCreateUser, mutDeleteUser, mutUpdatePasswordUser } from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        queryGetAllUsers: queryGetAllUsers
    },
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        mutCreateUser: mutCreateUser,
        mutDeleteUser: mutDeleteUser,
        mutUpdatePasswordUser: mutUpdatePasswordUser
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})