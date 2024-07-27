import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowModes, GridRowModesModel } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_GET_ALL_USERS } from "../../Graphql/Queries";
import {QueryGetAllUsersQuery } from "../../__generated__/graphql";
import { MUT_DELETE_USER } from "../../Graphql/Mutations";
import { toast } from "react-toastify";
import { useState } from "react";

/* ------------------------------------ INICIO DO COMPONENTE ------------------------------------ */
export default function TableVisualizar2() {
    const {loading, error, data } = useQuery<QueryGetAllUsersQuery>(QUERY_GET_ALL_USERS)          //A reposta da query tem que ter as caracteristicas setadas na interface
    const [rowEditableId, setRowEditableId] = useState(-1);
    const [newName, setNewName] = useState("")
    const [deleteUsuario] = useMutation(MUT_DELETE_USER,{
        refetchQueries:[
            {query: QUERY_GET_ALL_USERS},
        ],
        awaitRefetchQueries: true
    })

    // data && console.log(data.queryGetAllUsers)
    console.log(newName)
    console.log(rowEditableId)


    /* ------------------------------ FUNCOES DE DELETAR E EDITAR DADOS ----------------------------- */
    function handleEdit(data: any){
        console.log(data.row.id)
        setRowEditableId(data.row.id)
    }

    function handleConfirmEdit(){
        setRowEditableId(-1);                                                                       //Resetando o rowEditableId
        setNewName("");                                                                             //Resetando o newName
    }

    function handleCancelEdit(){
        setRowEditableId(-1);                                                                       //Resetando o rowEditableId
        setNewName("");
    }

    async function handleDelete(data: any){
        try{
            await deleteUsuario({
                variables:{
                    username: data.row.username
                }
            });
            toast.success("Usuario deletado com sucesso")
        }
        catch(error){
            console.error(error)
            toast.error("Erro ao deletar usuario")
        }
    }

    /* ----------------------------- CONFIGURANDO AS COLUNAS E AS LINHAS ---------------------------- */
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'name', headerName: 'Nome', flex: 1, headerAlign: 'center', align: 'center',
            renderCell: (params: GridRenderCellParams) => (                             //Essa funcao rendercell renderiza outra coisa ao invezdo valor normal dela
                rowEditableId === params.id ? (
                    <input onChange={(e)=>{setNewName(e?.target?.value)}}
                        className="bg-inherit focus:outline-none text-red-500" 
                        defaultValue={params.formattedValue}
                    />
                )
                : (
                    params.formattedValue
                )

            ),
        },
        { field: 'username', headerName: 'Username', flex: 1 , headerAlign: 'center', align: 'center' },
        { field: 'password', headerName: 'Password', flex: 1, headerAlign: 'center', align: 'center'},
        {
            field: 'fullName', 
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            headerAlign: 'center', align: 'center',
            valueGetter: (value, row) => `${row.firstName || ''} Mané`,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params: GridRenderCellParams) => (
                rowEditableId === params.id ?
                <div>
                    <IconButton onClick={() => handleConfirmEdit()} color="inherit">
                        <CheckIcon sx={{color: 'green', fontSize: '100%'}}/>
                    </IconButton>
                    <IconButton onClick={() => handleCancelEdit()} color="inherit">
                        <CloseIcon sx={{color: 'red', fontSize: '100%'}}/>
                    </IconButton>  
                </div>
                :
                <div>
                    <IconButton onClick={() => handleEdit(params)} color="inherit">
                        <EditIcon sx={{fontSize: '80%'}}/>
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params)} color="inherit">
                        <DeleteIcon sx={{fontSize: '80%'}} />
                    </IconButton>
                </div>
            ),
        }, //fim do 'actions'
      ];

    const rows = data?.queryGetAllUsers?.map((item) => {
        return ({...item})
    })

    /* ---------------------------------- RENDERIZANDO O COMPONENTE --------------------------------- */
    return (
        <div className= "h-[95%] w-[100%]">
            <div className= "text-center mb-2">
                <h2>TABELA DADOS</h2>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                disableColumnResize
                rowHeight={40}
                sx={{
                    boxShadow: 3,
                    border: 0,
                    borderColor: "black",
                    '& .MuiDataGrid-cell:hover': { color: 'red'},
                }}
                initialState={{
                columns:{
                    columnVisibilityModel:{
                        id: false,                                                              //Deixa a coluna "id" invisivel
                    }
                },
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
        </div>
    )
}