import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface GenericButtonProps{
    children?: ReactNode,
    className?: string,
    to: string,
}

export function GenericLink({className,to,children}: GenericButtonProps){
    
    let classNameI: string = `
        bg-slate-300 hover:bg-slate-400
        p-2 my-2 rounded-md hover:shadow-xl
        shadow-lg text-black text center
        text-transform: uppercase tracking-tighter
        mx-auto font-medium
    `
    let toI = ``

    classNameI = className  ? classNameI + className : classNameI 
    toI= to ? toI + to : toI

    return(
        <Link to={toI} className={classNameI}>
            {children}
        </Link>
    )
}
