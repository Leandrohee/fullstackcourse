import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_USERS } from "../../Graphql/Queries";
import { useEffect, useState } from "react";



function handleEdit(data: any){
    console.log(data.row)
}

function handleDelete(data: any){
    console.log(data)
}

/* ------------- ESSA INTERFACE MANEJA AS PROPS QUE VEM DA QUERY 'queryGetAllUsers' ------------- */
interface itfQueryGetAllUsers{
    id: number,
    name: string,
    username: string,
    password: string
}

/* ------------------------------------ INICIO DO COMPONENTE ------------------------------------ */
export default function TableVisualizar2() {
    const [currentData, setCurrentData] = useState<itfQueryGetAllUsers[]>([])               //A variavel 'currentData' só pode aceitar Array que contenha objetos com a interface 'itfQueryGetAllUsers'
    const {loading, error, data} = useQuery(QUERY_GET_ALL_USERS)

    useEffect(()=>{
        if (loading === false){
            setCurrentData(data.queryGetAllUsers)
        }
    },[data])

    console.log(currentData) 

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'name', headerName: 'Nome', flex: 1, headerAlign: 'center', align: 'center'},
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
                <div>
                    <IconButton onClick={() => handleEdit(params)} color="inherit">
                        <EditIcon sx={{fontSize: '80%'}}/>
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params)} color="inherit">
                        <DeleteIcon sx={{fontSize: '80%'}} />
                    </IconButton>
                </div>
            ),
        },
      ];

    const rows = currentData.map((item) => {
        return ({...item})
    })

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
                        id: false,                                  //Deixa a coluna "id" invisivel
                    }
                },
                pagination: {
                    paginationModel: { page: 0, pageSize: 20 },
                },
                }}
                pageSizeOptions={[10, 20]}
                // checkboxSelection
            />
        </div>
    )
}