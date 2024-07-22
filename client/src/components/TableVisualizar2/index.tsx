import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

function handleEdit(data: any){
    console.log(data.row)
}

function handleDelete(data: any){
    console.log(data)
}


export default function TableVisualizar2() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'firstName', headerName: 'First name', flex: 1, headerAlign: 'center', align: 'center'},
        { field: 'lastName', headerName: 'Last name', flex: 1 , headerAlign: 'center', align: 'center' },
        { field: 'age', headerName: 'Age', flex: 1, type: 'number', headerAlign: 'center', align: 'center'},
        {
            field: 'fullName', 
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            headerAlign: 'center', align: 'center',
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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

      function createData(
        id: number,
        firstName: string,
        lastName: string,
        age: number,
      ) {
        return { id, firstName, lastName, age };
      }

    const rows = [
        createData(1,'Leandro', 'Torres', 29,),
        createData(2,'Rafael', 'Torres', 27,),
        createData(3,'Felipe', 'Torres', 18,),
    ]

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