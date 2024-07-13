/* -------------- GERENCIA E DISPONIBILIZA TODAS AS QUERIES E MUTATIONS DO PROJETO -------------- */
/* ------- PARA ADD UMA QUERIE OU MUTATION NOVA EH SO COLOCAR O NOME DELA DENTRO DE FIELD ------- */

import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {}
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {}
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})