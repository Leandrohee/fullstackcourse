/* ------------------ AQUI VAMOS ESCREVER TODAS AS MUTATIONS DO PROJETO INTEIRO ----------------- */

import { gql } from "@apollo/client";

export const MUT_CREATE_USER = gql`
    mutation mutCreateUser($name: String!, $username: String!, $password: String!) {
        mutCreateUser(name: $name, username: $username, password: $password){
            id
            name
            username
        }
    }
`