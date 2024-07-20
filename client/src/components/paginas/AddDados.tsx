import { Square } from "../Square";
import { useForm } from "react-hook-form";       
import TextField from '@mui/material/TextField';                   
import { GenericButton } from "../GenericButton";

export function AddDados(){
    const {
        register,                                                       //Referencia o campo input, select 
        handleSubmit,                                                   //gerencia o submite
        formState: { errors },                                          //errors é um objeto use o validate para pegar ele
        watch,                                                          //watch verifica a alteração do campo a cada mudanca
      } = useForm();

    const watchNome = watch('nome')
    const watchUsername = watch('username')
    const wathPassword = watch('password')

    function validaNome(watchNome: string): boolean{
       if (watchNome){return watchNome.length <= 2 ? true : false} 
       return false
    }

    function validaNomeDepois(watchNome: string): boolean{
        if (watchNome){return watchNome.length <= 2 ? false : true} 
        return true
     }

    function validaUsername(watchUsername: string): boolean{
        if (watchUsername){return watchUsername.length <= 5 ? true : false} 
        return false
     }

    function validaPassword(password: string): boolean{
        const numerosTeste = /\d/g.test(password);                                      //Testa para ver se tem no minimo 3 numeros
        const letraMaiusculaTeste = /[A-Z]/g.test(password)                             //Testa para ver se tem no minimo 1 letra maiuscula

        if (password){
            if (numerosTeste && letraMaiusculaTeste){
                return false
            }
            return true
        }
        return false
    }

    function onSubmit(data: any){
        console.log(data)
    }
    return(
        <Square className="flex-col">
            <form className="w-[100%] h-[100%] flex flex-col gap-4" >
                <TextField                                                                                          //Validacao em tempo real
                    error={validaNome(watchNome)}
                    helperText={validaNome(watchNome) ? "Nome tem que ser maior que 2 digitos " : ""}
                    required
                    size="small"
                    label= "Nome"
                    fullWidth
                    defaultValue={""}
                    {...register("nome", {required: true})}
                />
                <TextField                                                                                          //Validacao somente apos o salvar
                    helperText={errors?.nome2 ? "Nome tem que ser maior que 2 digitos" : ""}
                    error={errors?.nome2 ? true : false}
                    required
                    size="small"
                    label= "Nome com validate depois"
                    fullWidth
                    defaultValue={""}
                    {...register("nome2", {required: true, validate: value => value = validaNomeDepois(value)})}    //Esse validate eh o que pega os erros
                />
                <TextField
                    error={validaUsername(watchUsername)}
                    helperText={validaUsername(watchUsername) ? "Username tem que ser maior que 5 digitos " : ""}
                    required
                    size="small"
                    label= "Username"
                    fullWidth
                    defaultValue={""}
                    {...register("username", {required: true})}
                />
                <TextField
                    error={validaPassword(wathPassword)}
                    helperText={validaPassword(wathPassword) ? "A senha tem que ter no minimo 3 numero e uma letra maiscula" : ""}
                    required
                    size="small"
                    label= "Senha"
                    type="password"
                    fullWidth
                    defaultValue={""}
                    {...register("password", {required: true})}
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