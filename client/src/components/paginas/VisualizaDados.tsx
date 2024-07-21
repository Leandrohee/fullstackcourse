import { ReactNode } from 'react'
import TableVisualizar from '../TableVisualizar';
import TableVisualizar2 from '../TableVisualizar2';
import TableVisualizar3 from '../TableVisualizar3';

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
            {(tabela === 3) && <TableVisualizar3/>}
        </section>
    )
}
