import React, { ReactNode } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TableVisualizar from '../TableVisualizar';
import TableVisualizar2 from '../TableVisualizar2';

interface VisualizaDadosProps{
    children?: ReactNode,
    tabela: 1 | 2 | 3
}

export default function VisualizaDados({children, tabela}: VisualizaDadosProps) {


    return (
        <section
            className= {`
                h-[60vh] w-[45vw] bg-yellow-200 mx-auto
                rounded-3xl my-auto shadow-2xl p-5 flex
            `}
        >
            {(tabela === 1) && <TableVisualizar/>}
            {(tabela === 2) && <TableVisualizar2/>}
            {(tabela === 3) && <div>Tabela 3</div>}
        </section>
    )
}
