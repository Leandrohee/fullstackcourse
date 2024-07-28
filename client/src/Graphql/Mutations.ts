/* ------------------ AQUI VAMOS ESCREVER TODAS AS MUTATIONS DO PROJETO INTEIRO ----------------- */

import { gql } from "@apollo/client";

/* --- A MUTATION TEM QUE TER O MESMO NOME DA CONSTRUIDA NO SCHEMA DO BACKEND 'mutCreateUser' --- */
export const MUT_CREATE_USER = gql`
    mutation mutCreateUser($name: String!, $username: String!, $password: String!) {
        mutCreateUser(name: $name, username: $username, password: $password){
            id
            name
            username
        }
    }
`

export const MUT_DELETE_USER = gql`
    mutation mutDeleteUser($username: String!){
        mutDeleteUser(username: $username){
            username
        }
    }
`

export const MUT_UPDATE_NAME = gql`
    mutation mutUpdateName($id: ID!, $name: String!, $newName: String!){
        mutUpdateName(id: $id,name: $name, newName: $newName){
            id
            name
        }
    }
`