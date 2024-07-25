import { Square } from "../Square";
import { useForm } from "react-hook-form";       
import TextField from '@mui/material/TextField';
import { useMutation } from "@apollo/client";    
import { MUT_CREATE_USER } from "../../Graphql/Mutations";
import { toast } from "react-toastify";
import { QUERY_GET_ALL_USERS } from "../../Graphql/Queries";

interface usernameDados{                                                //Interface seta o retorno do formulario
    nome: string,
    username: string,
    password: string,
}

export function AddDados(){

    const [addUsuario, ] = useMutation(MUT_CREATE_USER,{
        refetchQueries: [                                               //Da o refetch em uma queria apos uma mutation
            {query: QUERY_GET_ALL_USERS},                               //Escolhe qual a querie
        ],
        awaitRefetchQueries: true
    });

    const {
        register,                                                       //Referencia o campo input, select 
        handleSubmit,                                                   //gerencia o submite
        formState: { errors },                                          //errors é um objeto use o validate para pegar ele
        watch,                                                          //watch verifica a alteração do campo a cada mudanca
        reset
    } = useForm<usernameDados>();                                       //O retorno do formulario

    const watchNome = watch('nome')
    const watchUsername = watch('username')
    const wathPassword = watch('password')

    function validaNome(watchNome: string): boolean{
        if (watchNome){return watchNome.length <= 2 ? false : true} 
        return true
     }

    function validaUsername(watchUsername: string): boolean{
        if (watchUsername){return watchUsername.length <= 5 ? false : true} 
        return true
     }

    function validaPassword(password: string): boolean{
        const numerosTeste = /\d/g.test(password);                                      //Testa para ver se tem no minimo 3 numeros
        const letraMaiusculaTeste = /[A-Z]/g.test(password)                             //Testa para ver se tem no minimo 1 letra maiuscula

        if (password){
            if (numerosTeste && letraMaiusculaTeste){
                return true
            }
            return false
        }
        return true
    }

    async function onSubmit(data: usernameDados){
        console.log(data)
        try{
            await addUsuario ({
                variables:{
                    name: data.nome,
                    username: data.username,
                    password: data.password
                }
            });
            toast.success("Usuario adicionado com sucesso")
            reset()
        } catch(error){
            console.error(error)
            toast.error("Erro ao adicionar usuário")
        }
    };

    return(
        <Square className="flex-col">
            <form className="w-[100%] h-[100%] flex flex-col gap-4" >
                <TextField                                                                                                  //Validacao em tempo real
                    error={(validaNome(watchNome) == false ? true : false )}                                                //Se for true eh acionado a cor vermelha
                    helperText={validaNome(watchNome) == false ? "Nome tem que ser maior que 2 digitos " : ""}              //Se for true eh acionado a mensagem
                    required
                    size="small"
                    label= "Nome"
                    fullWidth
                    defaultValue={""}
                    {...register("nome", { required: "O nome é obrigatório", validate: dt => validaNome(dt)})}
                    />
                <TextField
                    error={validaUsername(watchUsername) == false ? true : false}                                           // Se for true eh acionado a cor vermelha
                    helperText={validaUsername(watchUsername) == false ? "Username tem que ser maior que 5 digitos " : ""}  //Se for true eh acionado a mensagem
                    required
                    size="small"
                    label= "Username"
                    fullWidth
                    defaultValue={""}
                    {...register("username", {required: true, validate: dt => validaUsername(dt)})}                    //Se for false libera o forms
                />
                <TextField
                    error={validaPassword(wathPassword) == false ? true : false}
                    helperText={validaPassword(wathPassword) == false ? "A senha tem que ter no minimo 3 numero e uma letra maiscula" : ""}
                    required
                    size="small"
                    label= "Senha"
                    type="password"
                    fullWidth
                    defaultValue={""}
                    {...register("password", {required: true, validate: dt => validaPassword(dt)})}                    //Se tiver false libera o forms
                />
            </form>
            <button 
                onClick={()=>handleSubmit(onSubmit)()}
                className={`
                    bg-green-600 hover:bg-green-700
                    p-2 rounded-md hover:shadow-xl
                    shadow-lg w-[8vw] text-black
                    text-transform: uppercase tracking-tighter
                    ml-auto
                `}
            >
                SALVAR
            </button>
        </Square>
    )
}