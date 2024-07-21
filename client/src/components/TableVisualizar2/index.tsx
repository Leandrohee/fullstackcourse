import { red } from "@mui/material/colors";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function TableVisualizar2() {


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'firstName', headerName: 'First name', width: 130, headerAlign: 'center', align: 'center',},
        { field: 'lastName', headerName: 'Last name', width: 130, headerAlign: 'center', align: 'center' },
        { field: 'age', headerName: 'Age', type: 'number', width: 90, headerAlign: 'center', align: 'center'},
        {
            field: 'fullName', 
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            headerAlign: 'center', align: 'center',
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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
        <div style={{ height: '100%' , width: '100%' }}>
            <DataGrid

                rows={rows}
                columns={columns}
                disableColumnResize
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
                checkboxSelection
            />
        </div>
    )
}