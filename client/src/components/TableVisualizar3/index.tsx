import MaterialTable from "material-table";

export default function TableVisualizar3() {
  
    const columns = [
        {title: 'Nome', field: 'name'},
        {title: 'Sobrenome', field: 'lastname'},
        {title: 'Idade', field: 'age'},
    ]

    const data = [
        {name: 'Leandro', lastname: 'Torres', age: 29}
    ]
  
    return (
        <div style={{ maxWidth: '100%'}}>
            {/* <MaterialTable
                columns={columns}
                data={data}
                title={"Filhos Torres"}
            /> */}
        </div>
    )
}
