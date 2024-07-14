/* -------- ESSA PASTA LIDA COM CRIAR UMA VARIAVEL QUE SERA USADA POR MUTATIONS E QUERIES ------- */

import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    })
})