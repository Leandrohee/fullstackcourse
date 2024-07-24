/* ------------------ AQUI VAMOS ESCREVER TODAS AS QUERIES DO PROJETO INTEIRO ----------------- */

import { gql } from "@apollo/client";

/* -- A QUERY TEM QUE TER O MESMO NOME DA CONSTRUIDA NOS SCHEMAS DO BACKEND 'queryGetAllUsers' -- */
export const QUERY_GET_ALL_USERS = gql`
    query queryGetAllUsers {                                            
        queryGetAllUsers{
            id
            name
            username
            password
        }
    }
`